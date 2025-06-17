import { AwesomeList } from "../data/awesome-list.js";

async function fetchAllGitHubIssuesGraphQLForRepo(token, owner, repo) {
  console.log(`START fetching all issues for ${owner}/${repo}`);
  let allIssues = [];
  let issuesCursor = null;
  let hasNextIssues = true;
  const perPage = 100;
  while (hasNextIssues) {
    console.log(`Fetching issues for ${owner}/${repo} with cursor: ${issuesCursor}`);
    const query = `
      query($owner: String!, $repo: String!, $issuesCursor: String) {
        repository(owner: $owner, name: $repo) {
          issues(first: ${perPage}, after: $issuesCursor, states: [OPEN, CLOSED], orderBy: {field: CREATED_AT, direction: DESC}) {
            pageInfo { endCursor hasNextPage }
            nodes {
              number
              title
              state
              createdAt
              updatedAt
              body
              labels(first: 10) { nodes { name } }
              comments(first: 100) {
                pageInfo { endCursor hasNextPage }
                nodes {
                  author { login }
                  createdAt
                  body
                }
              }
            }
          }
        }
      }
    `;
    const variables = { owner, repo, issuesCursor };
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: JSON.stringify({ query, variables }),
    });
    console.log(`Fetched issues for ${owner}/${repo} with cursor: ${issuesCursor}`);
    const json = await res.json();
    if (json.errors) {
      console.error("GitHub GraphQL errors:", json.errors);
      console.error("Full response:", JSON.stringify(json, null, 2));
    }
    if (!json.data || !json.data.repository) break;
    const issues = json.data.repository.issues.nodes;
    console.log(`Fetched ${issues.length} issues for ${owner}/${repo} (cursor: ${issuesCursor})`);
    // For each issue, fetch all comments if there are more than 100, in parallel
    const commentPageFetches = [];
    for (let issue of issues) {
      let allComments = [...issue.comments.nodes];
      let commentsCursor = issue.comments.pageInfo.endCursor;
      let hasNextComments = issue.comments.pageInfo.hasNextPage;
      if (hasNextComments) {
        // Fetch all remaining comment pages in parallel
        const commentPagePromises = [];
        let pageCursor = commentsCursor;
        // We don't know how many pages, so loop until hasNextPage is false
        // We'll use a recursive helper to collect all pages
        const fetchAllCommentPages = async (cursor) => {
          console.log(`Fetching next page of comments for issue #${issue.number} in ${owner}/${repo} with cursor: ${cursor}`);
          const commentsQuery = `
            query($owner: String!, $repo: String!, $number: Int!, $commentsCursor: String) {
              repository(owner: $owner, name: $repo) {
                issue(number: $number) {
                  comments(first: 100, after: $commentsCursor) {
                    pageInfo { endCursor hasNextPage }
                    nodes {
                      author { login }
                      createdAt
                      body
                    }
                  }
                }
              }
            }
          `;
          const commentsVariables = {
            owner,
            repo,
            number: issue.number,
            commentsCursor: cursor,
          };
          const commentsRes = await fetch("https://api.github.com/graphql", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              ...(token ? { Authorization: `Bearer ${token}` } : {}),
            },
            body: JSON.stringify({
              query: commentsQuery,
              variables: commentsVariables,
            }),
          });
          const commentsJson = await commentsRes.json();
          const commentsData = commentsJson.data.repository.issue.comments;
          let pages = [commentsData.nodes];
          if (commentsData.pageInfo.hasNextPage) {
            const nextPages = await fetchAllCommentPages(commentsData.pageInfo.endCursor);
            pages = pages.concat(nextPages);
          }
          return pages;
        };
        commentPagePromises.push(fetchAllCommentPages(pageCursor));
        // Wait for all comment page promises in parallel (usually only one, but could be more)
        commentPageFetches.push(
          Promise.all(commentPagePromises).then((pagesArr) => {
            // Flatten all pages
            const extraComments = pagesArr.flat(2);
            allComments = [...allComments, ...extraComments];
            issue.comments = allComments;
            return null;
          })
        );
      } else {
        issue.comments = allComments;
      }
      // Optionally log
      // console.log(`Issue #${issue.number} in ${owner}/${repo} has ${allComments.length} comments`);
    }
    // Wait for all comment page fetches to complete
    if (commentPageFetches.length > 0) {
      await Promise.all(commentPageFetches);
    }
    allIssues = [...allIssues, ...issues];
    issuesCursor = json.data.repository.issues.pageInfo.endCursor;
    hasNextIssues = json.data.repository.issues.pageInfo.hasNextPage;
  }
  console.log(`DONE fetching all issues for ${owner}/${repo}`);
  return allIssues;
}

function formatIssueAsLLMsEntryGraphQL(issue, owner, repo) {
  let content = `# GitHub Issue: ${owner}/${repo} #${issue.number}\n\n`;
  content += `Title: ${issue.title}\n`;
  content += `State: ${issue.state}\n`;
  if (issue.labels && issue.labels.nodes.length > 0) {
    content += `Labels: ${issue.labels.nodes.map((l) => l.name).join(", ")}\n`;
  }
  content += `Created: ${issue.createdAt}\n`;
  content += `Updated: ${issue.updatedAt}\n`;
  content += `URL: https://github.com/${owner}/${repo}/issues/${issue.number}\n\n`;
  content += `## Issue Description\n\n${issue.body || ""}\n\n`;
  if (issue.comments && issue.comments.length > 0) {
    content += `## Comments\n\n`;
    issue.comments.forEach((comment) => {
      content += `### Comment by ${
        comment.author ? comment.author.login : "unknown"
      } (${comment.createdAt})\n\n`;
      content += `${comment.body}\n\n`;
    });
  }
  return content;
}

function getPresetTitles(preset) {
  if (preset === 'all') {
    // All items except 'Outdated'
    const allTitles = [];
    AwesomeList.forEach((item) => {
      if (!item.tag.includes("Outdated")) allTitles.push(item.title);
      if (item.children && Array.isArray(item.children)) {
        item.children.forEach((child) => {
          if (!child.tag || !child.tag.includes("Outdated")) allTitles.push(child.title);
        });
      }
    });
    return allTitles;
  } else if (preset === 'recommended') {
    // Only 'Recommended' items
    const recommendedTitles = [];
    AwesomeList.forEach((item) => {
      if (item.tag.includes("Recommended")) recommendedTitles.push(item.title);
      if (item.children && Array.isArray(item.children)) {
        item.children.forEach((child) => {
          if (child.tag && child.tag.includes("Recommended")) recommendedTitles.push(child.title);
        });
      }
    });
    return recommendedTitles;
  }
  return [];
}

export default async function handler(req, res) {
  const { titles, includeIssues, preset } = req.query;
  let titleArr = [];
  if (preset) {
    titleArr = getPresetTitles(preset);
  } else if (titles) {
    titleArr = titles.split(",").map(decodeURIComponent);
  } else {
    res.status(400).send("Missing titles or preset param");
    return;
  }
  const flatList = [];
  AwesomeList.forEach(item => {
    flatList.push(item);
    if (item.children && Array.isArray(item.children)) {
      item.children.forEach(child => flatList.push(child));
    }
  });
  const items = flatList.filter(item => titleArr.includes(item.title));
  const texts = await Promise.all(
    items.map(async item => {
      try {
        let url = item.llms;
        if (url.startsWith("https://context7.com/")) {
          url = "https://cors-proxy-inky-six.vercel.app/api/proxy?url=" + encodeURIComponent(url);
        }
        const resp = await fetch(url);
        if (!resp.ok) return `Failed to fetch: ${item.title}`;
        return await resp.text();
      } catch {
        return `Error fetching: ${item.title}`;
      }
    })
  );

  // If includeIssues is set, aggregate issues for all unique repos
  let issuesSection = "";
  if (includeIssues === "true" || includeIssues === true) {
    const token = process.env.GITHUB_TOKEN;
    // Extract unique owner/repo pairs from selected items
    const uniqueRepos = [];
    const seen = new Set();
    for (const item of items) {
      const repoUrl = item.repo || (item.link && item.link.startsWith("https://github.com/") ? item.link : null);
      if (repoUrl) {
        const match = repoUrl.match(/^https:\/\/github.com\/([^\/]+)\/([^\/]+)(?:$|\/|#|\?)/);
        if (match) {
          const owner = match[1];
          const repo = match[2];
          const key = `${owner}/${repo}`;
          if (!seen.has(key)) {
            uniqueRepos.push({ owner, repo });
            seen.add(key);
          }
        }
      }
    }
    const allIssuesResults = [];
    for (const { owner, repo } of uniqueRepos) {
      const issues = await fetchAllGitHubIssuesGraphQLForRepo(token, owner, repo);
      allIssuesResults.push({ owner, repo, issues });
    }
    // Format all issues as llms entries
    issuesSection = allIssuesResults
      .flatMap(({ owner, repo, issues }) =>
        issues.map((issue) => formatIssueAsLLMsEntryGraphQL(issue, owner, repo))
      )
      .join("\n\n---\n\n");
  }

  let result = texts.join("\n\n---\n\n");
  if (issuesSection) {
    result += "\n\n---\n\n" + issuesSection;
  }
  res.setHeader("Content-Type", "text/plain");
  res.status(200).send(result);
} 
import React, { useState, useRef, useEffect } from "react";
import { useHistory } from "@docusaurus/router";
import Layout from "@theme/Layout";
import { AwesomeList } from "../../data/awesome-list";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

function getAllTags(list) {
  const all = Array.from(new Set(list.flatMap((item) => item.tag)));
  const rest = all
    .filter(
      (t) =>
        t !== "Recommended" &&
        t !== "Outdated" &&
        t !== "dApp" &&
        t !== "Script" &&
        t !== "Non-Technical" &&
        t !== "中文（Chinese）" &&
        t !== "Social Media"
    )
    .sort();
  const tags = [
    "Recommended",
    "dApp",
    "Script",
    "Non-Technical",
    "中文（Chinese）",
    "Social Media",
    ...rest,
  ];
  if (all.includes("Outdated")) tags.push("Outdated");
  return tags;
}

// Simple color palette for tags
const TAG_COLORS = [
  "#e57373",
  "#64b5f6",
  "#81c784",
  "#ffd54f",
  "#ba68c8",
  "#4db6ac",
  "#ffb74d",
  "#a1887f",
  "#90a4ae",
  "#f06292",
  "#7986cb",
  "#aed581",
  "#fff176",
  "#9575cd",
  "#4fc3f7",
  "#ff8a65",
  "#dce775",
  "#b0bec5",
  "#ce93d8",
  "#ffb300",
];
function tagColor(tag) {
  // Deterministic color by tag name
  const idx =
    Math.abs([...tag].reduce((a, c) => a + c.charCodeAt(0), 0)) %
    TAG_COLORS.length;
  return TAG_COLORS[idx];
}

function isColorDark(hex) {
  // Remove # if present
  hex = hex.replace("#", "");
  // Convert to RGB
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  // Perceived brightness
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness < 140;
}

function TagBadge({ tag, selected, onClick, style, grayInactive }) {
  // Special highlight for the two most important tags
  const isRecommended = tag === "Recommended";
  const isOutdated = tag === "Outdated";
  let color = tagColor(tag);
  let badgeStyle = {};
  let icon = null;
  // Add warning sign for Outdated tag only when not in filter selector
  const warningSign = isOutdated && !grayInactive ? "⚠️ " : "";
  if (isRecommended) {
    color = "#ff9800"; // orange
    if (grayInactive) {
      badgeStyle = {
        border: "1px solid #ff9800",
        background: selected ? "#ff9800" : "#fff8e1",
        color: selected ? "#fff" : "#b26a00",
        fontWeight: selected ? 700 : 400,
      };
    } else {
      badgeStyle = {
        border: "1px solid #ff9800",
        background: "#ff9800",
        color: "#fff",
        fontWeight: 700,
      };
    }
    icon = (
      <span
        style={{ marginRight: 5, verticalAlign: "middle" }}
        role="img"
        aria-label="Recommended"
      >
        👍
      </span>
    );
  } else if (isOutdated) {
    color = "#e53935"; // bold red
    if (selected) {
      badgeStyle = {
        border: "1px solid #e53935",
        background: "#e53935",
        color: "#fff",
        fontWeight: 700,
      };
    } else {
      // Use grayInactive logic for unselected Outdated tag
      badgeStyle = {};
    }
  }
  const textColor =
    selected || !grayInactive
      ? isColorDark(color)
        ? "#fff"
        : "#222"
      : grayInactive
      ? "#333"
      : "#fff";
  return (
    <span
      onClick={onClick}
      style={{
        display: "inline-block",
        padding: "2px 10px",
        margin: "2px 4px 2px 0",
        borderRadius: 12,
        background: selected ? color : grayInactive ? "#f0f0f0" : color,
        color: textColor,
        border: selected ? `1.2px solid ${color}` : `1px solid #ccc`,
        cursor: onClick ? "pointer" : "default",
        fontWeight: selected ? 700 : 400,
        fontSize: 13,
        whiteSpace: "nowrap",
        ...badgeStyle,
        ...style,
      }}
    >
      {icon}
      {warningSign}
      {tag}
    </span>
  );
}

function RawIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ marginRight: 4, verticalAlign: "middle" }}
    >
      <rect x={4} y={2} width={16} height={20} rx={2} ry={2} />
      <line x1={9} y1={9} x2={15} y2={9} />
      <line x1={9} y1={13} x2={15} y2={13} />
      <line x1={9} y1={17} x2={15} y2={17} />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ marginRight: 4, verticalAlign: "middle" }}
    >
      <path d="M10 13a5 5 0 0 1 7 7l-3 3a5 5 0 0 1-7-7" />
      <path d="M14 11a5 5 0 0 0-7-7l-3 3a5 5 0 0 0 7 7" />
    </svg>
  );
}

function Context7Icon() {
  return (
    <img
      src="https://context7.com/favicon.ico"
      alt="Context7"
      style={{ width: 16, height: 16, marginRight: 4, verticalAlign: "middle" }}
    />
  );
}

function LLMsActions({ llms, title, repo }) {
  const [copyStatus, setCopyStatus] = useState("");
  const [copyLinkStatus, setCopyLinkStatus] = useState("");
  const [context7Status, setContext7Status] = useState("checking"); // 'checking', 'not-indexed', or null

  // Helper to get context7 page for the llms URL
  const getContext7Url = (llmsUrl) => {
    if (!llmsUrl) return "#";
    if (llmsUrl.startsWith("https://context7.com/")) {
      // Remove /llms.txt and anything after it (query, fragment)
      const llmsTxtIdx = llmsUrl.indexOf("/llms.txt");
      let baseUrl = llmsUrl;
      if (llmsTxtIdx !== -1) {
        baseUrl = llmsUrl.slice(0, llmsTxtIdx);
      }
      // Remove trailing slash if present
      if (baseUrl.endsWith("/")) baseUrl = baseUrl.slice(0, -1);
      return baseUrl;
    }
    // For non-context7.com URLs, use the ?url= form
    const llmsTxtIdx = llmsUrl.indexOf("/llms.txt");
    let baseUrl = llmsUrl;
    if (llmsTxtIdx !== -1) {
      baseUrl = llmsUrl.slice(0, llmsTxtIdx);
    }
    return `https://context7.com/?url=${encodeURIComponent(baseUrl)}`;
  };
  const context7Url = getContext7Url(llms);

  // Only check if not indexed via llms.txt
  React.useEffect(() => {
    async function checkContext7Status() {
      if (!llms || !llms.startsWith("https://context7.com/")) {
        setContext7Status(null);
        return;
      }
      try {
        const llmsProxyUrl =
          "https://cors-proxy-inky-six.vercel.app/api/proxy?url=" +
          encodeURIComponent(llms);
        const llmsResp = await fetch(llmsProxyUrl);
        const llmsTxt = await llmsResp.text();
        if (llmsTxt.includes("not found. You can add it")) {
          setContext7Status("not-indexed");
          return;
        }
        setContext7Status(null);
      } catch (err) {
        console.log("[Context7 Error] llms.txt fetch failed", err);
        setContext7Status(null);
      }
    }
    checkContext7Status();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [llms, repo]);

  // Copy may fail if the clipboard API is denied by the user, or if fetch fails (e.g., network error or CORS)
  const handleCopyContent = async () => {
    if (!llms) return;
    try {
      // Use proxy for context7.com URLs
      let url = llms;
      if (url && url.startsWith("https://context7.com/")) {
        url =
          "https://cors-proxy-inky-six.vercel.app/api/proxy?url=" +
          encodeURIComponent(url);
      }
      const res = await fetch(url);
      const text = await res.text();
      await navigator.clipboard.writeText(text);
      setCopyStatus("Copied!");
      setTimeout(() => setCopyStatus(""), 1200);
    } catch {
      setCopyStatus("Failed");
      setTimeout(() => setCopyStatus(""), 1200);
    }
  };

  const handleCopyLink = async () => {
    if (!llms) return;
    try {
      await navigator.clipboard.writeText(llms);
      setCopyLinkStatus("Copied!");
      setTimeout(() => setCopyLinkStatus(""), 1200);
    } catch {
      setCopyLinkStatus("Failed");
      setTimeout(() => setCopyLinkStatus(""), 1200);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 6,
        minWidth: 80,
        maxWidth: 140,
        width: "100%",
      }}
    >
      {/* Show Context7/Index button depending on status */}
      {context7Status === "not-indexed" ? (
        <a
          href="https://context7.com/add-library"
          target="_blank"
          rel="noopener noreferrer"
          title="Add to Context7"
          style={{ width: "100%" }}
        >
          <button
            type="button"
            style={{
              padding: "2px 8px",
              width: "100%",
              minWidth: 100,
              maxWidth: 100,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 4,
              background: "#2196f3",
              color: "#fff",
              fontWeight: 700,
            }}
          >
            <Context7Icon />
            <span
              style={{
                display: "inline-block",
                minWidth: 48,
                textAlign: "left",
              }}
            >
              Index
            </span>
          </button>
        </a>
      ) : (
        llms &&
        llms.startsWith("https://context7.com/") && (
          <a
            href={context7Url}
            target="_blank"
            rel="noopener noreferrer"
            title="Open in Context7"
            style={{ width: "100%" }}
          >
            <button
              type="button"
              style={{
                padding: "2px 8px",
                width: "100%",
                minWidth: 100,
                maxWidth: 100,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 4,
              }}
            >
              <Context7Icon />
              <span
                style={{
                  display: "inline-block",
                  minWidth: 48,
                  textAlign: "left",
                }}
              >
                Context7
              </span>
            </button>
          </a>
        )
      )}
      <a
        href={llms}
        target="_blank"
        rel="noopener noreferrer"
        title="Open LLMs plain text"
        style={{ width: "100%" }}
      >
        <button
          type="button"
          style={{
            padding: "2px 8px",
            width: "100%",
            minWidth: 100,
            maxWidth: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 4,
          }}
        >
          <RawIcon />
          <span
            style={{ display: "inline-block", minWidth: 48, textAlign: "left" }}
          >
            Raw
          </span>
        </button>
      </a>
      <button
        type="button"
        style={{
          padding: "2px 8px",
          width: "100%",
          minWidth: 100,
          maxWidth: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 4,
        }}
        onClick={handleCopyContent}
        title="Copy LLMs content"
      >
        <span
          style={{ display: "inline-flex", alignItems: "center" }}
          aria-label="Copy"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ marginRight: 4, verticalAlign: "middle" }}
          >
            <rect width={8} height={4} x={8} y={2} rx={1} ry={1} />
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          </svg>
        </span>
        <span
          style={{ display: "inline-block", minWidth: 48, textAlign: "left" }}
        >
          {copyStatus ? copyStatus : "Copy"}
        </span>
      </button>
      <button
        type="button"
        style={{
          padding: "2px 8px",
          width: "100%",
          minWidth: 100,
          maxWidth: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 4,
        }}
        onClick={handleCopyLink}
        title="Copy LLMs link"
      >
        <LinkIcon />
        <span
          style={{ display: "inline-block", minWidth: 48, textAlign: "left" }}
        >
          {copyLinkStatus ? copyLinkStatus : "Link"}
        </span>
      </button>
    </div>
  );
}

function DeepwikiBadge({ githubUrl }) {
  // Extract owner/repo from the GitHub URL
  const match = githubUrl.match(
    /^https:\/\/github.com\/([^\/]+)\/([^\/]+)(?:$|\/|#|\?)/
  );
  if (!match) return null;
  const owner = match[1];
  const repo = match[2];
  const deepwikiUrl = `https://deepwiki.com/${owner}/${repo}`;
  return (
    <a
      href={deepwikiUrl}
      target="_blank"
      rel="noopener noreferrer"
      title="Ask DeepWiki"
      style={{
        display: "flex",
        alignItems: "center",
        verticalAlign: "middle",
        marginLeft: 0,
      }}
    >
      <img
        src="https://deepwiki.com/badge.svg"
        alt="Ask DeepWiki"
        style={{ verticalAlign: "middle" }}
      />
    </a>
  );
}

// Helper to flatten filtered list into all visible selectable items (parents and children)
function getAllVisibleSelectableTitlesFlat(filtered) {
  const titles = [];
  filtered.forEach((item) => {
    const isOutdated = item.tag && item.tag.includes("Outdated");
    const itemEnabled =
      item.repo || (item.link && item.link.startsWith("https://github.com/"));
    if (itemEnabled && !isOutdated) titles.push(item.title);
    if (item.children && Array.isArray(item.children)) {
      item.children.forEach((child) => {
        const childIsOutdated = child.tag && child.tag.includes("Outdated");
        const childEnabled =
          child.repo ||
          (child.link && child.link.startsWith("https://github.com/"));
        if (childEnabled && !childIsOutdated) titles.push(child.title);
      });
    }
  });
  return titles;
}

export default function AwesomePage() {
  const { siteConfig } = useDocusaurusContext();
  const githubToken = siteConfig.customFields.githubToken;
  const [selectedTags, setSelectedTags] = useState([]);
  const [checked, setChecked] = useState([]);
  const tags = getAllTags(AwesomeList);
  const history = useHistory();
  const [copyAggStatus, setCopyAggStatus] = useState("");
  const [aggPreview, setAggPreview] = useState("");
  const [aggLoading, setAggLoading] = useState(false);
  const [includeIssues, setIncludeIssues] = useState(false);
  const checkAllRef = useRef();

  // Only show items that include all selected tags
  let filtered =
    selectedTags.length === 0
      ? AwesomeList
      : AwesomeList.map((item) => {
          if (!item.children) {
            return selectedTags.every((tag) => item.tag.includes(tag))
              ? item
              : null;
          }
          const matchingChildren = item.children.filter((child) =>
            selectedTags.every((tag) => child.tag.includes(tag))
          );
          const parentMatches = selectedTags.every((tag) =>
            item.tag.includes(tag)
          );
          if (parentMatches || matchingChildren.length > 0) {
            return {
              ...item,
              children: matchingChildren,
            };
          }
          return null;
        }).filter(Boolean);

  filtered = [
    ...filtered.filter((item) => !item.tag.includes("Outdated")),
    ...filtered.filter((item) => item.tag.includes("Outdated")),
  ];

  const allVisibleTitlesFlat = getAllVisibleSelectableTitlesFlat(filtered);
  const allChecked =
    allVisibleTitlesFlat.length > 0 &&
    allVisibleTitlesFlat.every((title) => checked.includes(title));

  const handleCheck = (title) => {
    setChecked((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  // Add aggregateUrl with includeIssues param
  const aggregateUrl = `/llms?titles=${encodeURIComponent(
    checked.join(",")
  )}&includeIssues=${includeIssues ? "true" : "false"}`;

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleCheckAll = (e) => {
    const allTitles = getAllVisibleSelectableTitlesFlat(filtered);
    if (e.target.checked) {
      setChecked((prev) => Array.from(new Set([...prev, ...allTitles])));
    } else {
      setChecked((prev) => prev.filter((title) => !allTitles.includes(title)));
    }
  };

  // Fix indeterminate warning for select-all checkbox
  useEffect(() => {
    if (checkAllRef.current) {
      checkAllRef.current.indeterminate = checked.length > 0 && !allChecked;
    }
  }, [checked.length, allChecked]);

  // Fetch aggregation preview when checked or includeIssues changes
  React.useEffect(() => {
    if (checked.length > 0) {
      setAggLoading(true);
      setAggPreview("");
      const url = `/api/llms-aggregate?titles=${encodeURIComponent(
        checked.join(",")
      )}&includeIssues=${includeIssues ? "true" : "false"}`;
      fetch(url)
        .then((res) => res.text())
        .then((text) => {
          setAggPreview(text);
        })
        .catch(() => setAggPreview("Failed to fetch aggregation result."))
        .finally(() => setAggLoading(false));
    } else {
      setAggPreview("");
      setAggLoading(false);
    }
  }, [checked, includeIssues]);

  const handleDownloadAggregated = async () => {
    try {
      const url = `/api/llms-aggregate?titles=${encodeURIComponent(
        checked.join(",")
      )}&includeIssues=${includeIssues ? "true" : "false"}`;
      const res = await fetch(url);
      const content = await res.text();
      const blob = new Blob([content], { type: "text/plain" });
      const downloadUrl = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = downloadUrl;
      a.download = "llms.txt";
      document.body.appendChild(a);
      a.click();
      setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(downloadUrl);
      }, 100);
    } catch {
      alert("Failed to download aggregated llms.txt");
    }
  };

  // Add a copy link button if needed
  const handleCopyAggregateLink = async () => {
    try {
      await navigator.clipboard.writeText(
        window.location.origin + aggregateUrl
      );
      setCopyAggStatus("Copied!");
      setTimeout(() => setCopyAggStatus(""), 1200);
    } catch {
      setCopyAggStatus("Failed");
      setTimeout(() => setCopyAggStatus(""), 1200);
    }
  };

  return (
    <Layout
      title="Awesome Nervos CKB Ecosystem"
      description="Curated list of CKB ecosystem resources, filterable by tag."
    >
      <div className="container margin-vert--lg">
        <h1>Awesome Nervos CKB Ecosystem</h1>
        <div
          style={{
            marginBottom: 16,
            color: "#444",
            fontSize: 15,
            background: "#f8f9fa",
            border: "1px solid #eee",
            borderRadius: 8,
            padding: "10px 16px",
          }}
        >
          <b>How to Use:</b> Browse and filter the list to find items you might
          be interested in. Use the tags to narrow down the results. <br />
          <br />
          <b>Aggregation for AI (optional):</b> If you want to combine the LLMs
          context/resources from multiple items, use the checkboxes to select
          them. You can use the <b>select all</b> checkbox to select all visible
          items. After selecting, use the aggregation buttons below the table to
          copy a CORS-safe aggregate link or download the combined LLMs as{" "}
          <code>llms.txt</code>. This is an extra utility for advanced
          workflows, such as providing custom context to LLMs or AI tools.
        </div>
        <div
          style={{
            marginBottom: 16,
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <span style={{ marginRight: 8, fontWeight: 500 }}>
            Filter by tags:
          </span>
          {tags.map((tag) => (
            <TagBadge
              key={tag}
              tag={tag}
              selected={selectedTags.includes(tag)}
              onClick={() => toggleTag(tag)}
              grayInactive={true}
            />
          ))}
          {selectedTags.length > 0 && (
            <button
              style={{
                marginLeft: 16,
                padding: "2px 10px",
                borderRadius: 12,
                border: "1px solid #ccc",
                background: "#fff",
                cursor: "pointer",
              }}
              onClick={() => setSelectedTags([])}
            >
              Clear
            </button>
          )}
        </div>
        <div
          style={{
            marginBottom: 16,
            alignItems: "center",
            gap: 8,
          }}
        >
          {!githubToken && (
            <div style={{ color: "red", fontWeight: 500, marginBottom: 8 }}>
              GitHub token is not set. Please set GITHUB_TOKEN in your
              environment variables.
            </div>
          )}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontWeight: 500 }}>Aggregation Options:</span>
            <div>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  cursor: "pointer",
                }}
              >
                <input
                  type="checkbox"
                  checked={includeIssues}
                  onChange={(e) => setIncludeIssues(e.target.checked)}
                  disabled={!githubToken}
                />
                <span>Include Issues for LLMs Context (Might take longer time if many repos are selected)</span>
              </label>
            </div>
          </div>
        </div>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ width: 36, borderBottom: "1px solid #ccc" }}>
                <input
                  ref={checkAllRef}
                  type="checkbox"
                  checked={allChecked}
                  onChange={handleCheckAll}
                  title="Check all filtered"
                />
              </th>
              <th
                style={{
                  minWidth: 260,
                  width: "auto",
                  borderBottom: "1px solid #ccc",
                  textAlign: "left",
                }}
              >
                Title
              </th>
              <th style={{ borderBottom: "1px solid #ccc", textAlign: "left" }}>
                Description
              </th>
              <th
                style={{
                  width: 230,
                  borderBottom: "1px solid #ccc",
                  textAlign: "left",
                }}
              >
                Tags
              </th>
              <th
                style={{
                  width: 100,
                  borderBottom: "1px solid #ccc",
                  textAlign: "left",
                }}
              >
                LLMs
              </th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((item) => (
              <React.Fragment key={item.title}>
                <tr>
                  <td style={{ width: 36 }}>
                    <input
                      type="checkbox"
                      checked={checked.includes(item.title)}
                      onChange={() => handleCheck(item.title)}
                      disabled={
                        !(
                          item.repo ||
                          (item.link &&
                            item.link.startsWith("https://github.com/"))
                        )
                      }
                    />
                  </td>
                  <td style={{ minWidth: 260, width: "auto" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      {item.link &&
                        (typeof item.favicon === "string" &&
                        item.favicon.length === 2 &&
                        /\p{Emoji}/u.test(item.favicon) ? (
                          <span
                            style={{
                              width: 16,
                              height: 16,
                              marginRight: 6,
                              fontSize: 16,
                              display: "inline-flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            {item.favicon}
                          </span>
                        ) : (
                          <img
                            src={
                              item.favicon
                                ? item.favicon
                                : (() => {
                                    try {
                                      const url = new URL(item.link);
                                      return url.origin + "/favicon.ico";
                                    } catch {
                                      return "";
                                    }
                                  })()
                            }
                            alt="favicon"
                            style={{
                              width: 16,
                              height: 16,
                              marginRight: 6,
                              borderRadius: 3,
                              background: "#fff",
                              objectFit: "contain",
                            }}
                            loading="lazy"
                            referrerPolicy="no-referrer"
                          />
                        ))}
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.title}
                      </a>
                      {item.tag.includes("Outdated") && (
                        <TagBadge
                          tag="Outdated"
                          grayInactive={false}
                          style={{ marginLeft: 8 }}
                        />
                      )}
                    </div>
                    {(item.repo ||
                      (!item.repo &&
                        item.link &&
                        item.link.startsWith("https://github.com/"))) && (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          gap: 0,
                          marginTop: 6,
                          width: "fit-content",
                          position: "relative",
                          zIndex: 1,
                        }}
                      >
                        {item.repo && (
                          <>
                            <div
                              style={{
                                width: 100,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                padding: 0,
                                margin: 0,
                              }}
                            >
                              <a
                                href={item.repo}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="View on GitHub"
                                style={{
                                  verticalAlign: "middle",
                                  flexShrink: 0,
                                  display: "block",
                                  padding: 0,
                                  margin: 0,
                                }}
                              >
                                {(() => {
                                  try {
                                    const match = item.repo.match(
                                      /^https:\/\/github.com\/([^\/]+)\/([^\/]+)(?:$|\/|#|\?)/
                                    );
                                    if (!match) throw new Error();
                                    const owner = match[1];
                                    const repo = match[2];
                                    const badgeUrl = `https://img.shields.io/github/stars/${owner}/${repo}`;
                                    return (
                                      <img
                                        src={badgeUrl}
                                        alt="GitHub Stars"
                                        style={{
                                          height: 20,
                                          verticalAlign: "middle",
                                          flexShrink: 0,
                                          display: "block",
                                          padding: 0,
                                          margin: 0,
                                        }}
                                      />
                                    );
                                  } catch {
                                    return (
                                      <img
                                        src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"
                                        alt="GitHub"
                                        style={{
                                          height: 20,
                                          verticalAlign: "middle",
                                          flexShrink: 0,
                                          display: "block",
                                          padding: 0,
                                          margin: 0,
                                        }}
                                      />
                                    );
                                  }
                                })()}
                              </a>
                            </div>
                            <DeepwikiBadge githubUrl={item.repo} />
                          </>
                        )}
                        {!item.repo &&
                          item.link &&
                          item.link.startsWith("https://github.com/") && (
                            <>
                              <div
                                style={{
                                  width: 100,
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "flex-start",
                                  padding: 0,
                                  margin: 0,
                                }}
                              >
                                <a
                                  href={item.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  title="View on GitHub"
                                  style={{
                                    verticalAlign: "middle",
                                    flexShrink: 0,
                                    display: "block",
                                    padding: 0,
                                    margin: 0,
                                  }}
                                >
                                  {(() => {
                                    try {
                                      const match = item.link.match(
                                        /^https:\/\/github.com\/([^\/]+)\/([^\/]+)(?:$|\/|#|\?)/
                                      );
                                      if (!match) throw new Error();
                                      const owner = match[1];
                                      const repo = match[2];
                                      const badgeUrl = `https://img.shields.io/github/stars/${owner}/${repo}`;
                                      return (
                                        <img
                                          src={badgeUrl}
                                          alt="GitHub Stars"
                                          style={{
                                            height: 20,
                                            verticalAlign: "middle",
                                            flexShrink: 0,
                                            display: "block",
                                            padding: 0,
                                            margin: 0,
                                          }}
                                        />
                                      );
                                    } catch {
                                      return (
                                        <img
                                          src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"
                                          alt="GitHub"
                                          style={{
                                            height: 20,
                                            verticalAlign: "middle",
                                            flexShrink: 0,
                                            display: "block",
                                            padding: 0,
                                            margin: 0,
                                          }}
                                        />
                                      );
                                    }
                                  })()}
                                </a>
                              </div>
                              <DeepwikiBadge githubUrl={item.link} />
                            </>
                          )}
                      </div>
                    )}
                  </td>
                  <td>{item.description}</td>
                  <td style={{ width: 230 }}>
                    {item.tag.map((tag) => (
                      <TagBadge
                        key={tag}
                        tag={tag}
                        selected={selectedTags.includes(tag)}
                        onClick={() => toggleTag(tag)}
                        style={{ marginRight: 2, marginBottom: 2 }}
                        grayInactive={false}
                      />
                    ))}
                  </td>
                  <td style={{ width: 100 }}>
                    {item.repo ||
                    (item.link &&
                      item.link.startsWith("https://github.com/")) ? (
                      <LLMsActions
                        llms={item.llms}
                        title={item.title}
                        repo={
                          item.repo ||
                          (item.link &&
                          item.link.startsWith("https://github.com/")
                            ? item.link
                            : undefined)
                        }
                      />
                    ) : null}
                  </td>
                </tr>
                {item.children &&
                  item.children.map((child) => (
                    <tr key={child.title} style={{ background: "#fafbfc" }}>
                      <td style={{ width: 36 }}>
                        <input
                          type="checkbox"
                          checked={checked.includes(child.title)}
                          onChange={() => handleCheck(child.title)}
                          disabled={
                            !(
                              child.repo ||
                              (child.link &&
                                child.link.startsWith("https://github.com/"))
                            )
                          }
                        />
                      </td>
                      <td
                        style={{
                          minWidth: 260,
                          width: "auto",
                          paddingLeft: 32,
                          borderLeft: "3px solid #eee",
                          position: "relative",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            left: 12,
                            top: 0,
                            bottom: 0,
                            width: 0,
                            borderLeft: "2px solid #e0e0e0",
                            zIndex: 0,
                          }}
                        />
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            position: "relative",
                            zIndex: 1,
                          }}
                        >
                          {child.link &&
                            (typeof child.favicon === "string" &&
                            child.favicon.length === 2 &&
                            /\p{Emoji}/u.test(child.favicon) ? (
                              <span
                                style={{
                                  width: 16,
                                  height: 16,
                                  marginRight: 6,
                                  fontSize: 16,
                                  display: "inline-flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                {child.favicon}
                              </span>
                            ) : (
                              <img
                                src={
                                  child.favicon
                                    ? child.favicon
                                    : (() => {
                                        try {
                                          const url = new URL(child.link);
                                          return url.origin + "/favicon.ico";
                                        } catch {
                                          return "";
                                        }
                                      })()
                                }
                                alt="favicon"
                                style={{
                                  width: 16,
                                  height: 16,
                                  marginRight: 6,
                                  borderRadius: 3,
                                  background: "#fff",
                                  objectFit: "contain",
                                }}
                                loading="lazy"
                                referrerPolicy="no-referrer"
                              />
                            ))}
                          <a
                            href={child.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {child.title}
                          </a>
                          {child.tag && child.tag.includes("Outdated") && (
                            <TagBadge
                              tag="Outdated"
                              grayInactive={false}
                              style={{ marginLeft: 8 }}
                            />
                          )}
                        </div>
                        {(child.repo ||
                          (!child.repo &&
                            child.link &&
                            child.link.startsWith("https://github.com/"))) && (
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              gap: 0,
                              marginTop: 6,
                              width: "fit-content",
                            }}
                          >
                            {child.repo && (
                              <>
                                <div
                                  style={{
                                    width: 100,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "flex-start",
                                    padding: 0,
                                    margin: 0,
                                  }}
                                >
                                  <a
                                    href={child.repo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="View on GitHub"
                                    style={{
                                      verticalAlign: "middle",
                                      flexShrink: 0,
                                      display: "block",
                                      padding: 0,
                                      margin: 0,
                                    }}
                                  >
                                    {(() => {
                                      try {
                                        const match = child.repo.match(
                                          /^https:\/\/github.com\/([^\/]+)\/([^\/]+)(?:$|\/|#|\?)/
                                        );
                                        if (!match) throw new Error();
                                        const owner = match[1];
                                        const repo = match[2];
                                        const badgeUrl = `https://img.shields.io/github/stars/${owner}/${repo}`;
                                        return (
                                          <img
                                            src={badgeUrl}
                                            alt="GitHub Stars"
                                            style={{
                                              height: 20,
                                              verticalAlign: "middle",
                                              flexShrink: 0,
                                              display: "block",
                                              padding: 0,
                                              margin: 0,
                                            }}
                                          />
                                        );
                                      } catch {
                                        return (
                                          <img
                                            src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"
                                            alt="GitHub"
                                            style={{
                                              height: 20,
                                              verticalAlign: "middle",
                                              flexShrink: 0,
                                              display: "block",
                                              padding: 0,
                                              margin: 0,
                                            }}
                                          />
                                        );
                                      }
                                    })()}
                                  </a>
                                </div>
                                <DeepwikiBadge githubUrl={child.repo} />
                              </>
                            )}
                            {!child.repo &&
                              child.link &&
                              child.link.startsWith("https://github.com/") && (
                                <>
                                  <div
                                    style={{
                                      width: 100,
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "flex-start",
                                      padding: 0,
                                      margin: 0,
                                    }}
                                  >
                                    <a
                                      href={child.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      title="View on GitHub"
                                      style={{
                                        verticalAlign: "middle",
                                        flexShrink: 0,
                                        display: "block",
                                        padding: 0,
                                        margin: 0,
                                      }}
                                    >
                                      {(() => {
                                        try {
                                          const match = child.link.match(
                                            /^https:\/\/github.com\/([^\/]+)\/([^\/]+)(?:$|\/|#|\?)/
                                          );
                                          if (!match) throw new Error();
                                          const owner = match[1];
                                          const repo = match[2];
                                          const badgeUrl = `https://img.shields.io/github/stars/${owner}/${repo}`;
                                          return (
                                            <img
                                              src={badgeUrl}
                                              alt="GitHub Stars"
                                              style={{
                                                height: 20,
                                                verticalAlign: "middle",
                                                flexShrink: 0,
                                                display: "block",
                                                padding: 0,
                                                margin: 0,
                                              }}
                                            />
                                          );
                                        } catch {
                                          return (
                                            <img
                                              src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"
                                              alt="GitHub"
                                              style={{
                                                height: 20,
                                                verticalAlign: "middle",
                                                flexShrink: 0,
                                                display: "block",
                                                padding: 0,
                                                margin: 0,
                                              }}
                                            />
                                          );
                                        }
                                      })()}
                                    </a>
                                  </div>
                                  <DeepwikiBadge githubUrl={child.link} />
                                </>
                              )}
                          </div>
                        )}
                      </td>
                      <td>{child.description}</td>
                      <td style={{ width: 230 }}>
                        {child.tag.map((tag) => (
                          <TagBadge
                            key={tag}
                            tag={tag}
                            selected={selectedTags.includes(tag)}
                            onClick={() => toggleTag(tag)}
                            style={{ marginRight: 2, marginBottom: 2 }}
                            grayInactive={false}
                          />
                        ))}
                      </td>
                      <td style={{ width: 100 }}>
                        {child.repo ||
                        (child.link &&
                          child.link.startsWith("https://github.com/")) ? (
                          <LLMsActions
                            llms={child.llms}
                            title={child.title}
                            repo={
                              child.repo ||
                              (child.link &&
                              child.link.startsWith("https://github.com/")
                                ? child.link
                                : undefined)
                            }
                          />
                        ) : null}
                      </td>
                    </tr>
                  ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
        {checked.length > 0 && (
          <div
            style={{
              marginTop: 16,
              display: "flex",
              flexDirection: "column",
              gap: 12,
              alignItems: "flex-start",
            }}
          >
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <button onClick={handleCopyAggregateLink}>
                Copy aggregate link ({checked.length})
              </button>
              <button onClick={handleDownloadAggregated}>
                Download Aggregated llms.txt
              </button>
              {copyAggStatus && <span>{copyAggStatus}</span>}
            </div>
            <div style={{ marginTop: 8, width: "100%" }}>
              <div style={{ fontWeight: 500, marginBottom: 4 }}>
                Aggregated Preview:
              </div>
              <pre
                style={{
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word",
                  margin: 0,
                  border: "1px solid #eee",
                  background: "#fafbfc",
                  fontFamily: "inherit",
                  fontSize: "inherit",
                  padding: 8,
                  minHeight: 60,
                  maxHeight: 320,
                  overflow: "auto",
                }}
              >
                {aggLoading ? "Loading..." : aggPreview}
              </pre>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

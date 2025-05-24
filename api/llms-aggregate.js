import { AwesomeList } from "../src/data/awesome-list";

export default async function handler(req, res) {
  const { titles } = req.query;
  if (!titles) {
    res.status(400).send("Missing titles param");
    return;
  }
  const titleArr = titles.split(",").map(decodeURIComponent);
  const items = AwesomeList.filter(item => titleArr.includes(item.title));
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
  res.setHeader("Content-Type", "text/plain");
  res.status(200).send(texts.join("\n\n---\n\n"));
} 
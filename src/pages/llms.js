import React, { useState, useEffect } from "react";
import { useLocation } from '@docusaurus/router';
import { AwesomeList } from "../../data/awesome-list";

function parseTitlesFromQuery(search) {
  const params = new URLSearchParams(search);
  const titles = params.get('titles');
  if (!titles) return [];
  return titles.split(',').map(decodeURIComponent);
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

export default function Llms() {
  const location = useLocation();
  const [result, setResult] = useState("");
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const preset = params.get('preset');
    let titles = [];
    if (preset) {
      titles = getPresetTitles(preset);
    } else {
      titles = parseTitlesFromQuery(location.search);
    }
    const includeIssues = params.get('includeIssues') === 'true';
    if (titles.length > 0) {
      (async () => {
        setLoading(true);
        setResult("");
        setDone(false);
        try {
          const param = encodeURIComponent(titles.join(","));
          const url = `/api/llms-aggregate?titles=${param}&includeIssues=${includeIssues ? "true" : "false"}`;
          const res = await fetch(url);
          const text = await res.text();
          setResult(text);
        } catch {
          setResult("Failed to fetch aggregation result.");
        }
        setLoading(false);
        setDone(true);
      })();
    } else {
      setResult("");
      setDone(false);
      setLoading(false);
    }
  }, [location.search]);

  if (loading) {
    return null;
  }
  if (done) {
    return <pre style={{whiteSpace: 'pre-wrap', wordBreak: 'break-word', margin: 0, border: 'none', background: 'none', fontFamily: 'inherit', fontSize: 'inherit'}}>{result}</pre>;
  }
  return null;
} 
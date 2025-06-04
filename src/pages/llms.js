import React, { useState, useEffect } from "react";
import { useLocation } from '@docusaurus/router';

function parseTitlesFromQuery(search) {
  const params = new URLSearchParams(search);
  const titles = params.get('titles');
  if (!titles) return [];
  return titles.split(',').map(decodeURIComponent);
}

export default function Llms() {
  const location = useLocation();
  const [result, setResult] = useState("");
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const titles = parseTitlesFromQuery(location.search);
    if (titles.length > 0) {
      (async () => {
        setLoading(true);
        setResult("");
        setDone(false);
        try {
          const param = encodeURIComponent(titles.join(","));
          const res = await fetch(`/api/llms-aggregate?titles=${param}`);
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
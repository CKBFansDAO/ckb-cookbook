import React, { useState } from "react";
import { useHistory } from '@docusaurus/router';
import Layout from '@theme/Layout';

export const AwesomeList = [
  {
    title: "Nervos CKB Documentation",
    tag: [
      "dApp",
      "Script",
      "Wallet",
      "DOB",
      "UDT",
      "Infrastructure",
      "TypeScript",
      "JavaScript",
      "Rust",
    ],
    description: "Nervos CKB Documentation. Most comprehensive documentation for CKB.",
    link: "https://docs.nervos.org/",
    llms: "https://context7.com/nervosnetwork/docs.nervos.org/llms.txt?tokens=300000",
  },
  {
    title: "CCC - CKBers' Codebase",
    tag: [
      "dApp",
      "Wallet",
      "UDT",
      "DOB",
      "TypeScript",
      "JavaScript",
    ],
    description:
      "CCC - CKBers' Codebase is a one-stop solution for your CKB JS/TS ecosystem development.",
    link: "https://github.com/ckb-devrel/ccc",
    llms: "https://context7.com/ckb-devrel/ccc/llms.txt",
  },
  {
    title: "CKB JS VM",
    tag: [
      "Script",
      "TypeScript",
      "JavaScript",
      "VM",
    ],
    description:
      "CKB JS VM enables writing and testing on-chain scripts for Nervos CKB in TypeScript/JavaScript. It supports ESM, modern tooling, and provides a full workflow for building, testing, and deploying CKB scripts.",
    link: "https://github.com/nervosnetwork/ckb-js-vm",
    llms: "https://context7.com/nervosnetwork/ckb-js-vm/llms.txt"
  },
  {
    title: "OffCKB",
    tag: [
      "dApp",
      "Script",
      "TypeScript",
      "JavaScript",
      "Rust"
    ],
    description:
      "OffCKB is a local development network and toolkit for Nervos CKB. It provides full-stack dApp scaffolding, contract deployment, local devnet, REPL, and powerful CLI tools for rapid CKB development.",
    link: "https://github.com/ckb-devrel/offckb",
    llms: "https://context7.com/ckb-devrel/offckb/llms.txt"
  },
  {
    title: "Nervos CKB",
    tag: [
      "Rust",
      "Infrastructure"
    ],
    description:
      "Nervos CKB Core",
    link: "https://github.com/nervosnetwork/ckb",
    llms: "https://context7.com/nervosnetwork/ckb/llms.txt?tokens=100000"
  },
];

function getAllTags(list) {
  const all = Array.from(new Set(list.flatMap(item => item.tag)));
  const rest = all.filter(t => t !== 'dApp' && t !== 'Script').sort();
  return ['dApp', 'Script', ...rest];
}

// Simple color palette for tags
const TAG_COLORS = [
  '#e57373', '#64b5f6', '#81c784', '#ffd54f', '#ba68c8', '#4db6ac', '#ffb74d', '#a1887f', '#90a4ae', '#f06292',
  '#7986cb', '#aed581', '#fff176', '#9575cd', '#4fc3f7', '#ff8a65', '#dce775', '#b0bec5', '#ce93d8', '#ffb300'
];
function tagColor(tag) {
  // Deterministic color by tag name
  const idx = Math.abs([...tag].reduce((a, c) => a + c.charCodeAt(0), 0)) % TAG_COLORS.length;
  return TAG_COLORS[idx];
}

function isColorDark(hex) {
  // Remove # if present
  hex = hex.replace('#', '');
  // Convert to RGB
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  // Perceived brightness
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness < 140;
}

function TagBadge({ tag, selected, onClick, style, grayInactive }) {
  const color = tagColor(tag);
  const textColor = selected || !grayInactive ? (isColorDark(color) ? '#fff' : '#222') : (grayInactive ? '#333' : '#fff');
  return (
    <span
      onClick={onClick}
      style={{
        display: 'inline-block',
        padding: '2px 10px',
        margin: '2px 4px 2px 0',
        borderRadius: 12,
        background: selected ? color : (grayInactive ? '#f0f0f0' : color),
        color: textColor,
        border: selected ? `2px solid ${color}` : `1px solid #ccc`,
        cursor: onClick ? 'pointer' : 'default',
        fontWeight: selected ? 700 : 400,
        fontSize: 13,
        ...style,
      }}
    >
      {tag}
    </span>
  );
}

function RawIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 4, verticalAlign: 'middle' }}>
      <rect x={4} y={2} width={16} height={20} rx={2} ry={2} />
      <line x1={9} y1={9} x2={15} y2={9} />
      <line x1={9} y1={13} x2={15} y2={13} />
      <line x1={9} y1={17} x2={15} y2={17} />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 4, verticalAlign: 'middle' }}>
      <path d="M10 13a5 5 0 0 1 7 7l-3 3a5 5 0 0 1-7-7" />
      <path d="M14 11a5 5 0 0 0-7-7l-3 3a5 5 0 0 0 7 7" />
    </svg>
  );
}

function LLMsActions({ llms, title }) {
  const [copyStatus, setCopyStatus] = useState("");
  const [copyLinkStatus, setCopyLinkStatus] = useState("");

  // Copy may fail if the clipboard API is denied by the user, or if fetch fails (e.g., network error or CORS)
  const handleCopyContent = async () => {
    try {
      // Use proxy for context7.com URLs
      let url = llms;
      if (url.startsWith("https://context7.com/")) {
        url = "https://cors-proxy-inky-six.vercel.app/api/proxy?url=" + encodeURIComponent(url);
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, minWidth: 80, maxWidth: 90, width: '100%' }}>
      <a href={llms} target="_blank" rel="noopener noreferrer" title="Open LLMs plain text" style={{ width: '100%' }}>
        <button type="button" style={{ padding: '2px 8px', width: '100%', maxWidth: 90, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4 }}>
          <RawIcon />
          <span style={{ display: 'inline-block', minWidth: 48, textAlign: 'left' }}>Raw</span>
        </button>
      </a>
      <button type="button" style={{ padding: '2px 8px', width: '100%', maxWidth: 90, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4 }} onClick={handleCopyContent} title="Copy LLMs content">
        <span style={{ display: 'inline-flex', alignItems: 'center' }} aria-label="Copy">
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
            style={{ marginRight: 4, verticalAlign: 'middle' }}
          >
            <rect width={8} height={4} x={8} y={2} rx={1} ry={1} />
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          </svg>
        </span>
        <span style={{ display: 'inline-block', minWidth: 48, textAlign: 'left' }}>{copyStatus ? copyStatus : "Copy"}</span>
      </button>
      <button type="button" style={{ padding: '2px 8px', width: '100%', maxWidth: 90, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4 }} onClick={handleCopyLink} title="Copy LLMs link">
        <LinkIcon />
        <span style={{ display: 'inline-block', minWidth: 48, textAlign: 'left' }}>{copyLinkStatus ? copyLinkStatus : "Link"}</span>
      </button>
    </div>
  );
}

export default function AwesomePage() {
  const [selectedTags, setSelectedTags] = useState([]);
  const [checked, setChecked] = useState([]);
  const tags = getAllTags(AwesomeList);
  const history = useHistory();
  const [copyAggStatus, setCopyAggStatus] = useState("");
  const [aggPreview, setAggPreview] = useState("");
  const [aggLoading, setAggLoading] = useState(false);

  // Only show items that include all selected tags
  const filtered = selectedTags.length === 0
    ? AwesomeList
    : AwesomeList.filter(item => selectedTags.every(tag => item.tag.includes(tag)));

  const allFilteredTitles = filtered.map(item => item.title);
  const allChecked = allFilteredTitles.length > 0 && allFilteredTitles.every(title => checked.includes(title));

  const handleCheck = (title) => {
    setChecked(prev =>
      prev.includes(title)
        ? prev.filter(t => t !== title)
        : [...prev, title]
    );
  };

  const handleAggregate = () => {
    if (checked.length > 0) {
      const param = encodeURIComponent(checked.join(","));
      history.push(`/llms?titles=${param}`);
    }
  };

  const toggleTag = (tag) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const handleCheckAll = (e) => {
    if (e.target.checked) {
      setChecked(prev => Array.from(new Set([...prev, ...allFilteredTitles])));
    } else {
      setChecked(prev => prev.filter(title => !allFilteredTitles.includes(title)));
    }
  };

  const aggregateUrl = `/llms?titles=${encodeURIComponent(checked.join(","))}`;
  const apiAggregateUrl = `/api/llms-aggregate?titles=${encodeURIComponent(checked.join(","))}`;

  const handleCopyAggregateLink = async () => {
    try {
      const apiAggregateUrl = `/api/llms-aggregate?titles=${encodeURIComponent(checked.join(","))}`;
      const url = window.location.origin + apiAggregateUrl;
      const proxyUrl = "https://cors-proxy-inky-six.vercel.app/api/proxy?url=" + encodeURIComponent(url);
      await navigator.clipboard.writeText(proxyUrl);
      setCopyAggStatus("Copied!");
      setTimeout(() => setCopyAggStatus(""), 1200);
    } catch {
      setCopyAggStatus("Failed");
      setTimeout(() => setCopyAggStatus(""), 1200);
    }
  };

  // Fetch aggregation preview when checked changes
  React.useEffect(() => {
    if (checked.length > 0) {
      setAggLoading(true);
      setAggPreview("");
      fetch(apiAggregateUrl)
        .then(res => res.text())
        .then(text => setAggPreview(text))
        .catch(() => setAggPreview("Failed to fetch aggregation result."))
        .finally(() => setAggLoading(false));
    } else {
      setAggPreview("");
      setAggLoading(false);
    }
  }, [apiAggregateUrl, checked.length]);

  const handleDownloadAggregated = async () => {
    try {
      const res = await fetch(apiAggregateUrl);
      const text = await res.text();
      const blob = new Blob([text], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'llms.txt';
      document.body.appendChild(a);
      a.click();
      setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }, 100);
    } catch {
      alert('Failed to download aggregated llms.txt');
    }
  };

  return (
    <Layout title="Awesome Nervos CKB Ecosystem" description="Curated list of CKB ecosystem resources, filterable by tag.">
      <div className="container margin-vert--lg">
        <h1>Awesome Nervos CKB Ecosystem</h1>
        <div style={{ marginBottom: 16, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ marginRight: 8, fontWeight: 500 }}>Filter by tags:</span>
          {tags.map(tag => (
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
              style={{ marginLeft: 16, padding: '2px 10px', borderRadius: 12, border: '1px solid #ccc', background: '#fff', cursor: 'pointer' }}
              onClick={() => setSelectedTags([])}
            >
              Clear
            </button>
          )}
        </div>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  checked={allChecked}
                  onChange={handleCheckAll}
                  indeterminate={checked.length > 0 && !allChecked}
                  title="Check all filtered"
                />
              </th>
              <th style={{ borderBottom: "1px solid #ccc", textAlign: "left" }}>Title</th>
              <th style={{ borderBottom: "1px solid #ccc", textAlign: "left" }}>Description</th>
              <th style={{ borderBottom: "1px solid #ccc", textAlign: "left" }}>Tags</th>
              <th style={{ borderBottom: "1px solid #ccc", textAlign: "left", width: 110 }}>LLMs</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(item => (
              <tr key={item.title}>
                <td>
                  <input
                    type="checkbox"
                    checked={checked.includes(item.title)}
                    onChange={() => handleCheck(item.title)}
                  />
                </td>
                <td>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>
                </td>
                <td>{item.description}</td>
                <td>
                  {item.tag.map(tag => (
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
                <td>
                  <LLMsActions llms={item.llms} title={item.title} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {checked.length > 0 && (
          <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <button onClick={handleCopyAggregateLink}>
                Copy aggregate link ({checked.length})
              </button>
              <button onClick={handleDownloadAggregated}>
                Download Aggregated llms.txt
              </button>
              {copyAggStatus && <span>{copyAggStatus}</span>}
            </div>
            <div style={{ marginTop: 8, width: '100%' }}>
              <div style={{ fontWeight: 500, marginBottom: 4 }}>Aggregated Preview:</div>
              <pre style={{whiteSpace: 'pre-wrap', wordBreak: 'break-word', margin: 0, border: '1px solid #eee', background: '#fafbfc', fontFamily: 'inherit', fontSize: 'inherit', padding: 8, minHeight: 60, maxHeight: 320, overflow: 'auto'}}>
                {aggLoading ? 'Loading...' : aggPreview}
              </pre>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

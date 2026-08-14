import { useState } from "react";
import styled from "styled-components";

// The fixed-purpose Python tokenizer from the Centauri research page:
// comments, strings, a handful of keywords, numeric/boolean constants.
// Everything else renders plain.
const TOKEN_RE =
  /(#[^\n]*)|(f?"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')|\b(import|from|with|for|in)\b|\b(-?\d+(?:\.\d+)?|False|None|True)\b/g;

const highlight = (code) => {
  const nodes = [];
  let last = 0;
  let m;
  let i = 0;
  while ((m = TOKEN_RE.exec(code)) !== null) {
    if (m.index > last) nodes.push(code.slice(last, m.index));
    const [, comment, string, keyword, number] = m;
    if (comment !== undefined) nodes.push(<CodeC key={i}>{comment}</CodeC>);
    else if (string !== undefined) nodes.push(<CodeS key={i}>{string}</CodeS>);
    else if (keyword !== undefined) nodes.push(<CodeK key={i}>{keyword}</CodeK>);
    else nodes.push(<CodeN key={i}>{number}</CodeN>);
    last = m.index + m[0].length;
    i += 1;
  }
  if (last < code.length) nodes.push(code.slice(last));
  return nodes;
};

// Code block in the house style introduced on the Centauri research page:
// a mist card with quiet token colours and a copy pill.
const CodeSnippet = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <CodeCard>
      <Pre>{highlight(code)}</Pre>
      <CopyBtn type="button" onClick={copy}>
        {copied ? "Copied" : "Copy"}
      </CopyBtn>
    </CodeCard>
  );
};

export default CodeSnippet;

const INK = "#1c1c1e";
const MIST = "#f1f0ef";

export const CodeCard = styled.div`
  position: relative;
`;

export const Pre = styled.pre`
  background: ${MIST};
  border-radius: 20px;
  padding: 24px;
  font-family: ui-monospace, "Cascadia Mono", Consolas, monospace;
  font-size: 13.5px;
  line-height: 1.55;
  overflow-x: auto;
  color: ${INK};
`;

export const CodeC = styled.span`
  color: #8f8983;
  font-style: italic;
`;
export const CodeK = styled.span`
  color: #6355a8;
`;
export const CodeS = styled.span`
  color: #23619f;
`;
export const CodeN = styled.span`
  color: #b0406f;
`;

export const CopyBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  font-family: "GeneralSans";
  font-weight: 500;
  font-size: 13px;
  padding: 8px 14px;
  border: none;
  border-radius: 40px;
  background: white;
  color: ${INK};
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.45;
  }
`;

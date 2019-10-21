import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';

function JsonHighlighter(props) {
  const syntaxHighlighterProps = {
    codeTagProps: {
      className: 'hljs-code',
    },
    language: 'json',
    useInlineStyles: false,
  };

  return <SyntaxHighlighter {...syntaxHighlighterProps}>{props.children}</SyntaxHighlighter>;
}

export default JsonHighlighter;

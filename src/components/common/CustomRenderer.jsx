import { ChevronUp, Ellipsis } from 'lucide-react';
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import remarkGfm from 'remark-gfm';

const CustomRenderer = ({ content, maxLength = 300 }) => {
  const [expanded, setExpanded] = useState(false);
  const shouldTruncate = content.length > maxLength;
  const displayContent = expanded ? content : content.slice(0, maxLength);

  const toggleExpanded = () => setExpanded(!expanded);

  return (
    <div>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter
                style={atomDark}
                language={match[1]}
                PreTag="div"
                {...props}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
          h1: ({ node, ...props }) => <h1 className="text-xl font-bold my-4" {...props} />,
          h2: ({ node, ...props }) => <h2 className="text-xl font-bold my-3" {...props} />,
          h3: ({ node, ...props }) => <h3 className="text-xl font-bold my-2" {...props} />,
          h4: ({ node, ...props }) => <h4 className="text-lg font-bold my-2" {...props} />,
          h5: ({ node, ...props }) => <h5 className="text-base font-bold my-1" {...props} />,
          h6: ({ node, ...props }) => <h6 className="text-sm font-bold my-1" {...props} />,
          p: ({ node, ...props }) => <p className="my-2" {...props} />,
          ul: ({ node, ...props }) => <ul className="list-disc list-inside my-2" {...props} />,
          ol: ({ node, ...props }) => <ol className="list-decimal list-inside my-2" {...props} />,
          li: ({ node, ...props }) => <li className="my-1" {...props} />,
          a: ({ node, ...props }) => <a className="text-blue-500 hover:underline" {...props} />,
          blockquote: ({ node, ...props }) => <blockquote className="border-l-4 border-gray-300 pl-4 my-2 italic" {...props} />,
          table: ({ node, ...props }) => <table className="border-collapse table-auto w-full my-2" {...props} />,
          th: ({ node, ...props }) => <th className="border border-gray-300 px-4 py-2 text-left font-bold" {...props} />,
          td: ({ node, ...props }) => <td className="border border-gray-300 px-4 py-2" {...props} />,
        }}
      >
        {displayContent}
      </ReactMarkdown>
      {shouldTruncate && (
        <div
          onClick={toggleExpanded}
          className="custom-glass-2 px-2 py-1 flex justify-center items-center rounded-xl w-11"
        >
          {expanded ? <ChevronUp/> : <Ellipsis/>}
        </div>
      )}
    </div>
  );
};

export default CustomRenderer;
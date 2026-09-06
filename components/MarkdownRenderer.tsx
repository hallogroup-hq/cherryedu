'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownRendererProps {
  content: string;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  return (
    <div className="editorial-prose">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-roast-950 mt-8 mb-4 pb-2 border-b border-paper-300 tracking-tight">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-roast-950 mt-8 mb-3 tracking-tight flex items-center gap-2">
              <span className="w-1.5 h-5 bg-cherry-700 inline-block rounded-xs shrink-0"></span>
              <span>{children}</span>
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="font-serif text-lg font-bold text-roast-900 mt-6 mb-2.5 tracking-tight">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="font-mono text-xs uppercase tracking-wider text-cherry-700 font-bold mt-5 mb-2">
              [ {children} ]
            </h4>
          ),
          p: ({ children }) => (
            <p className="font-sans text-sm sm:text-[15px] text-roast-800 leading-relaxed mb-4">
              {children}
            </p>
          ),
          strong: ({ children }) => (
            <strong className="font-bold text-roast-950 bg-paper-100 px-1 py-0.5 rounded-xs border border-paper-300/60">
              {children}
            </strong>
          ),
          em: ({ children }) => (
            <em className="font-serif italic text-roast-900 font-medium">
              {children}
            </em>
          ),
          ul: ({ children }) => (
            <ul className="my-4 space-y-2 pl-4 list-disc marker:text-cherry-700 text-sm text-roast-800 leading-relaxed font-sans">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="my-4 space-y-2 pl-5 list-decimal marker:font-mono marker:font-bold marker:text-cherry-700 text-sm text-roast-800 leading-relaxed font-sans">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="pl-1">{children}</li>
          ),
          blockquote: ({ children }) => (
            <blockquote className="my-6 p-4 sm:p-5 border-l-4 border-l-cherry-700 bg-paper-100 text-roast-900 italic font-serif text-sm sm:text-base leading-relaxed shadow-xs">
              {children}
            </blockquote>
          ),
          table: ({ children }) => (
            <div className="my-6 overflow-x-auto border border-paper-300 shadow-xs">
              <table className="w-full border-collapse text-xs sm:text-sm text-left">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-paper-200 font-mono text-[11px] uppercase tracking-wider text-roast-950 border-b border-paper-300">
              {children}
            </thead>
          ),
          th: ({ children }) => (
            <th className="p-3 sm:p-3.5 font-bold border border-paper-300 text-roast-950">
              {children}
            </th>
          ),
          tbody: ({ children }) => (
            <tbody className="divide-y divide-paper-200 bg-paper-50">
              {children}
            </tbody>
          ),
          tr: ({ children }) => (
            <tr className="hover:bg-paper-100/70 transition-colors">
              {children}
            </tr>
          ),
          td: ({ children }) => (
            <td className="p-3 sm:p-3.5 border border-paper-300 text-roast-800 font-sans align-top">
              {children}
            </td>
          ),
          hr: () => <hr className="my-8 border-t border-paper-300" />,
          code: ({ children }) => (
            <code className="font-mono text-xs bg-paper-200 text-roast-950 px-1.5 py-0.5 rounded border border-paper-300 font-semibold">
              {children}
            </code>
          ),
          pre: ({ children }) => (
            <pre className="my-6 p-4 bg-roast-950 text-paper-100 font-mono text-xs overflow-x-auto border border-roast-900 rounded">
              {children}
            </pre>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

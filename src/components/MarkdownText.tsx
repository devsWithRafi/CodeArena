import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

const MarkdownText = ({ text }: { text: string }) => {
  return (
    <div className="markdown-body [&_.katex]:text-white [&_.katex]:py-5">
      <Markdown
        // remarkPlugins={[remarkGfm]}
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={{
          code: ({ className, children }) => {
            const match = /language-(\w+)/.exec(className || '');
            return match ? (
              <SyntaxHighlighter
                PreTag="div"
                language={match[1]}
                style={okaidia as any}
              >
                {String(children)}
              </SyntaxHighlighter>
            ) : (
              <code className="bg-[#424242] text-zinc-300 px-[5px] py-[1px] rounded font-normal text-sm">
                {children}
              </code>
            );
          },
          li: ({ children }) => (
            <li className="text-xs text-muted-foreground font-space list-disc list-inside mb-1">
              {children}
            </li>
          ),
          h2: ({ children }) => (
            <h2 className="text-[15px] my-2 font-semibold">{children}</h2>
          ),
          h1: ({ children }) => (
            <h1 className="text-[16px] my-2 font-bold">{children}</h1>
          ),

          table: ({ children }) => (
            <table className="border-collapse w-full border border-white/30 my-5">
              {children}
            </table>
          ),
          th: ({ children }) => (
            <th className="border text-sm border-white/30 px-3 font-medium py-2 bg-zinc-800">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border text-xs text-zinc-300 font-normal border-white/20 px-3 py-2">
              {children}
            </td>
          ),

          hr: () => <hr className="border-white/10 my-4" />,
          p: ({ children }) => (
            <p className="text-xs text-muted-foreground mb-2">{children}</p>
          ),
        }}
      >
        {text}
      </Markdown>
    </div>
  );
};

export default MarkdownText;

import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const MarkdownText = ({ text }: { text: string }) => {
  return <Markdown remarkPlugins={[remarkGfm]}>{text}</Markdown>;
};

export default MarkdownText;

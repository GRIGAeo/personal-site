import ReactMarkdown from 'react-markdown'

interface MarkdownBlockProps {
  /** Готовый markdown-текст, импортированный из src/content через ?raw. */
  content: string
}

export function MarkdownBlock({ content }: MarkdownBlockProps) {
  return (
    <div className="markdown">
      {/* Заголовки markdown — это подразделы внутри секции, поэтому h2 -> h3 */}
      <ReactMarkdown components={{ h2: 'h3', h3: 'h4' }}>{content}</ReactMarkdown>
    </div>
  )
}

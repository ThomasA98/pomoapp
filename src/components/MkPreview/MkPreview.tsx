import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export type MkPreviewProps = {
	markdown: string
}

export const MkPreview: React.FC<MkPreviewProps> = ({ markdown }) => {
	return (
		<Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
	)
}
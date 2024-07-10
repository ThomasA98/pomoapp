import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export type MkPreviewProps = {
	markdown: string
}

export const MkPreview: React.FC<MkPreviewProps> = ({ markdown }) => {
	return (
		<div
			className="w-full min-h-96 bg-black text-white rounded p-2"
		>
			<Markdown
				remarkPlugins={[remarkGfm]}
			>
				{markdown}
			</Markdown>
		</div>
	)
}
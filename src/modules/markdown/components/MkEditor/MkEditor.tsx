export interface MkEditorProps {
	handler: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
	text: string
}

export const MkEditor: React.FC<MkEditorProps>  = ({ handler, text }) => {
	return (
		<form>
			<textarea
				className="w-full min-h-96 bg-black text-white rounded p-2"
				onChange={ handler }
				value={ text }
				placeholder='Markdown mode'
			/>
		</form>
	)
}
export interface MkEditorProps {
	handler: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
	text: string
}

export const MkEditor: React.FC<MkEditorProps>  = ({ handler, text }) => {
	return (
		<form className="">
            <textarea className="" onChange={ handler } value={ text } placeholder='Markdown mode' />
        </form>
	)
}
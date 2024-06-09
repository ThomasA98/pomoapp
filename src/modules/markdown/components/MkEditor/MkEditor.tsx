import styles from './MkEditor.module.css';

export interface MkEditorProps {
	handler: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
	text: string
}

export const MkEditor: React.FC<MkEditorProps>  = ({ handler, text }) => {
	return (
		<form className={ styles.mkeditor }>
            <textarea className={ styles.mkeditor__input_text } onChange={ handler } value={ text } placeholder='Markdown mode' />
        </form>
	)
}
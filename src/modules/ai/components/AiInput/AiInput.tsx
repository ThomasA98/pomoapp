import { useContext } from "react"
import { MkContext } from "../../../markdown"
import { AiContext } from "../../aiContext"
import { useInput } from "../../../../hooks"
import styles from './AiInput.module.css'

export const AiInput = () => {

    const mk = useContext(MkContext)
    const ai = useContext(AiContext)

    const { handlerSubmit, input, inputDisable, onChangeInput } = useInput()

    const onSubmit = (value: string) => {
        ai.sendToLLM(value)
    }

    const sendToMarkdown = () => {
        const response = ai.getResponse()
        const oldText = mk.getText()
        mk.updateText(oldText + response)
    }

    const sendToMarkdownWithInputUser = () => {
        const response = ai.getResponseWithInputUser()
        const oldText = mk.getText()
        mk.updateText(oldText + response)
    }

    const clear = () => {
        ai.aiClear()
    }

    return (
        <form onSubmit={e => handlerSubmit(e, onSubmit)} className={styles.aiview__form_container}>
            <input
                className={styles.aiview__form_input}
                type='text'
                placeholder='Question me!!'
                disabled={inputDisable}
                onChange={onChangeInput}
                value={input}
            />
            <div className={styles.aiview__options_container}>
                <button type='submit' className={styles.aiview__options}>submit</button>
                <button type='button' onClick={sendToMarkdown} className={styles.aiview__options} >send MK</button>
                <button type='button' onClick={sendToMarkdownWithInputUser} className={styles.aiview__options} >send MK</button>
                <button type='reset' onClick={clear} className={styles.aiview__options}>clear</button>
            </div>
        </form>
    )
}
import { useContext } from "react"
import { MkContext } from "../../../markdown"
import { AiContext } from "../../aiContext"
import { useInput } from "../../../../hooks"

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
        <form onSubmit={e => handlerSubmit(e, onSubmit)} className="">
            <input
                className=""
                type='text'
                placeholder='Question me!!'
                disabled={inputDisable}
                onChange={onChangeInput}
                value={input}
            />
            <div className="">
                <button type='submit' className="">submit</button>
                <button type='button' onClick={sendToMarkdown} className="" >send MK</button>
                <button type='button' onClick={sendToMarkdownWithInputUser} className="" >send MK</button>
                <button type='reset' onClick={clear} className="">clear</button>
            </div>
        </form>
    )
}
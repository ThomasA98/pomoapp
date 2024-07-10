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
        <form onSubmit={e => handlerSubmit(e, onSubmit)} className="flex flex-col gap-2">
            <input
                className="bg-black text-white rounded p-2 w-full font-bold"
                type='text'
                placeholder='Question me!!'
                disabled={inputDisable}
                onChange={onChangeInput}
                value={input}
            />
            <div className="flex gap-2 justify-between">
                <button type='submit' className="bg-red-400 shadow shadow-slate-800 p-2 rounded text-center capitalize flex-1">submit</button>
                <button type='button' onClick={sendToMarkdown} className="bg-red-400 shadow shadow-slate-800 p-2 rounded text-center capitalize flex-1" >send MK</button>
                <button type='button' onClick={sendToMarkdownWithInputUser} className="bg-red-400 shadow shadow-slate-800 p-2 rounded text-center capitalize flex-1" >send MK</button>
                <button type='reset' onClick={clear} className="bg-red-400 shadow shadow-slate-800 p-2 rounded text-center capitalize flex-1">clear</button>
            </div>
        </form>
    )
}

import { viewTransitionStateless } from '../lib_viewTransition/useViewTransition'
import { ShareTransitions } from '../transitions/transitions'
import styles from '../styles/view/AiView.module.css'
import { useContext, useState } from 'react'
import { AiContext, MkContext } from '../context'

const AiView = () => {

    const { register } = viewTransitionStateless<ShareTransitions>()
    const [ input, setInput ] = useState<string>('')
    const [ inputDisable, setInputDisable ] = useState<boolean>(false)

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value)
    }

    const ai = useContext(AiContext)
    const mk = useContext(MkContext)

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setInputDisable(true)
        if (!input || input === '' ) return
        console.log(input)
        ai.sendToLLM(input)
        console.log(ai.userInput)
        setInput('')
        setInputDisable(false)
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
        <section style={{ viewTransitionName: register(ShareTransitions.containerTransition) }} className='view'>
            <div className={ styles.aiview__container } >
                <div className={ styles.aiview__responses_container }>
                    <div className={ styles.aiview__response_item }>
                        { ai.textAi }
                    </div>
                </div>
                <form onSubmit={onSubmit} className={ styles.aiview__form_container }>
                    <input type='text' placeholder='Question me!!' disabled={ inputDisable } onChange={ onChangeInput } name='input' id='input' value={ input } className={ styles.aiview__form_input } />
                    <div className={ styles.aiview__options_container }>
                        <button type='submit' className={ styles.aiview__options }>submit</button>
                        <button type='button' onClick={ sendToMarkdown } className={ styles.aiview__options } >send MK</button>
                        <button type='button' onClick={ sendToMarkdownWithInputUser } className={ styles.aiview__options } >send MK</button>
                        <button type='reset' onClick={ clear } className={ styles.aiview__options }>clear</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default AiView
import { useState } from "react"

export const useInput = () => {
    const [ input, setInput ] = useState<string>('')
    const [ inputDisable, setInputDisable ] = useState<boolean>(false)

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value)
    }

    const handlerSubmit = (event: React.FormEvent<HTMLFormElement>, action: (value: string) => void) => {
        event.preventDefault()
        setInputDisable(true)
        action(input)
        setInput('')
        setInputDisable(false)
    }

    return {
        input,
        inputDisable,

        onChangeInput,
        handlerSubmit,
    }
}
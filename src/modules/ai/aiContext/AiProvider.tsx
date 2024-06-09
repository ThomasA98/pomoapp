import { useCallback, useEffect, useReducer } from 'react'
import useLLM from 'usellm'
import {
    AiContext,
    AiReducer,
    type AiState,
    AI_API_LOCALSTORAGE,
    AI_TOKEN_LOCALSTORAGE,
    AI_API,
} from '.'

export interface AiProviderProps {
    children: React.ReactNode
}

const initialState: AiState = {
    token: '',
    textAi: '',
    userInput: '',
}

export const AiProvider: React.FC<AiProviderProps> = ({ children }) => {

    const [state, dispatcher] = useReducer(AiReducer, initialState)

    const { chat } = useLLM({
        serviceUrl: AI_API
    })

    useEffect(
        () => {
            const apiLocalstorage = localStorage.getItem(AI_API_LOCALSTORAGE) ?? ''
            const tokenLocalstorage = localStorage.getItem(AI_TOKEN_LOCALSTORAGE) ?? ''

            dispatcher({
                type: '[ai] add token and api from localstorage',
                payload: {
                    API: apiLocalstorage,
                    token: tokenLocalstorage
                }
            })
        },
        []
    )

    const changeToken = (token: string) => {
        dispatcher({
            type: '[ai] change token',
            payload: { token }
        })
    }

    const getResponse = () => {
        return `\n\n---\n\n${state.textAi}`
    }

    const getResponseWithInputUser = () => {
        return `\n\n---\n\n### Question: ${state.userInput}\n\nAnswer:\n\n${state.textAi}`
    }

    const setInput = (userInput: string) => {
        dispatcher({
            type: '[ai] change user input',
            payload: { userInput }
        })
    }

    const aiClear = () => {
        dispatcher({
            type: '[ai] clear response'
        })
    }

    const sendToLLM = useCallback(async (userInput: string) => {
        setInput(userInput)
        await chat({
            messages: [{ role: 'user', content: userInput }],
            stream: true,
            onStream: ({ message }) => {
                dispatcher({
                    type: '[ai] add text from ia',
                    payload: {
                        textAi: message.content
                    }
                })
            }
        })
    },
    [chat]
    )

    return (
        <AiContext.Provider value={{
            ...state,
            changeToken,
            getResponse,
            getResponseWithInputUser,
            setInput,
            aiClear,
            sendToLLM,
        }}>
            {children}
        </AiContext.Provider>
    )

}
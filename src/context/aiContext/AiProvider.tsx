import { useCallback, useEffect, useReducer } from 'react'
import { AiContext } from './AiContext'
import { AiReducer, type AiState } from './aiReducer'
import { AI_API_LOCALSTORAGE, AI_TOKEN_LOCALSTORAGE, DEFAULT_API } from './constants'
import useLLM from 'usellm'

export interface AiProviderProps {
    children: React.ReactNode
}

const initialState: AiState = {
    API: DEFAULT_API,
    token: '',
    textAi: '',
    userInput: '',
}

export const AiProvider: React.FC<AiProviderProps> = ({ children }) => {

    const [state, dispatcher] = useReducer(AiReducer, initialState)

    const llm = useLLM({
        serviceUrl: DEFAULT_API
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

    const changeAPI = (api: string) => {
        dispatcher({
            type: '[ai] change api',
            payload: { api }
        })
    }

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
        await llm.chat({
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
        [ llm ]
    )

    return (
        <AiContext.Provider value={{
            ...state,
            changeAPI,
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
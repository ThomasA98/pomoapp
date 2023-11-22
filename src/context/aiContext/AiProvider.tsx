import { useEffect, useReducer } from 'react'
import { AiContext } from './AiContext'
import { AiReducer, type AiState } from './aiReducer'
import { AI_API_LOCALSTORAGE, AI_TOKEN_LOCALSTORAGE, DEFAULT_API } from './constants'

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

    const [state, dispacher] = useReducer(AiReducer, initialState)

    useEffect(
        () => {
            const apiLocalstorage = localStorage.getItem(AI_API_LOCALSTORAGE) ?? ''
            const tokenLocalstorage = localStorage.getItem(AI_TOKEN_LOCALSTORAGE) ?? ''

            dispacher({
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
        dispacher({
            type: '[ai] change api',
            payload: { api }
        })
    }

    const changeToken = (token: string) => {
        dispacher({
            type: '[ai] change token',
            payload: { token }
        })
    }

    const getResponse = () => {
        return state.textAi
    }

    const getResponseWithInputUser = () => {
        return `
        """${state.userInput}"""

        ---

        [${state.textAi}]
        `
    }

    const setInput = (userInput: string) => {
        dispacher({
            type: '[ai] change user input',
            payload: { userInput }
        })
    }


    return (
        <AiContext.Provider value={{
            ...state,
            changeAPI,
            changeToken,
            getResponse,
            getResponseWithInputUser,
            setInput,
        }}>
            {children}
        </AiContext.Provider>
    )

}
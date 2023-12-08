import React, { useEffect, useReducer } from 'react'
import { MkState, mkReducer } from './mkReducer'
import { MkContext } from './MkContext'
import { MK_LOCALSTORAGE } from './constants'

export interface MkProviderProps {
    children: React.ReactNode
}

const initialState: MkState = {
    text: ''
}

export const MkProvider: React.FC<MkProviderProps> = ({ children }) => {

    const [ state, dispatcher ] = useReducer(mkReducer, initialState)

    useEffect(
        () => {
            const mkFromLocalstorage = localStorage.getItem(MK_LOCALSTORAGE) ?? ''

            dispatcher({
                type: '[mk] update text from localstorage',
                payload: {
                    text: mkFromLocalstorage
                }
            })
        },
        []
    )

    const getText = () => {
        return state.text
    }

    const updateText = (text: string) => {
        dispatcher({
            type: '[mk] update text',
            payload: {
                text
            }
        })
    }

    const reset = () => {
        dispatcher({
            type: '[mk] reset',
        })
    }

    return (
        <MkContext.Provider value={{
            ...state,
            getText,
            reset,
            updateText
        }}>
            { children }
        </MkContext.Provider>
    )

}
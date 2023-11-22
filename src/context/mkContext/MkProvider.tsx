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

    const [ state, dispacher ] = useReducer(mkReducer, initialState)

    useEffect(
        () => {
            const mkFromLocalstorage = localStorage.getItem(MK_LOCALSTORAGE) ?? ''

            dispacher({
                type: '[mk] undate text from localstorage',
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
        dispacher({
            type: '[mk] undate text',
            payload: {
                text
            }
        })
    }

    const reset = () => {
        dispacher({
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
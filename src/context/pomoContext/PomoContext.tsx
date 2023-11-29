import { createContext } from 'react'
import { PomoState } from './pomoReducer'

export interface PomoExhibitor extends PomoState {
    saveConfig          : (newConfig: PomoState) => void
    counter             : number
    isStarted           : boolean
    start               : () => void
    pause               : () => void
    setTimeInFocus      : () => void
    setTimeInBreak      : () => void
    setTimeInLongBreak  : () => void
}

export const PomoContext = createContext<PomoExhibitor>({} as PomoExhibitor)
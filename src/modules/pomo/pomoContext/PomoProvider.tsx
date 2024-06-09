import { useEffect, useReducer } from 'react'
import { PomoContext } from './PomoContext'
import { type PomoState, pomoReducer } from './pomoReducer'
import { minutesToSeconds } from '../../../utils'
import {
    DEFAULT_TIME_BREAK,
    DEFAULT_TIME_FOCUS,
    DEFAULT_TIME_LONG_BREAK,
    DEFAULT_BREAKS_AFTER_LONG_BREAK,
    POMO_CONFIG_TIMES_LOCALSTORAGE,
    DEFAULT_MODE,
} from './constants'
import { useTimer } from '../hooks/useTimer'

export interface PomoProviderProps {
    children: React.ReactNode
}

const initialState: PomoState = {
    timeLongBreak       : minutesToSeconds(DEFAULT_TIME_LONG_BREAK),
    timeFocus           : minutesToSeconds(DEFAULT_TIME_FOCUS),
    timeBreak           : minutesToSeconds(DEFAULT_TIME_BREAK),
    breaksAfterLongBreak: DEFAULT_BREAKS_AFTER_LONG_BREAK,
    mode                : DEFAULT_MODE,
}

export const PomoProvider: React.FC<PomoProviderProps> = ({ children }) => {

    const [ state, dispatcher ] = useReducer(pomoReducer, initialState)

    const { counter, setTime, pause, start, isStarted } = useTimer()

    useEffect(
        () => {
            const pomoConfigTimesFromLocalstorage = localStorage.getItem(POMO_CONFIG_TIMES_LOCALSTORAGE)

            if (!pomoConfigTimesFromLocalstorage) return // queda con la configuracion de initialState

            const newPomoConfigTimes: PomoState = JSON.parse(pomoConfigTimesFromLocalstorage)

            dispatcher({
                type: '[pomo] update times from localstorage',
                payload: newPomoConfigTimes
            })
        },
        []
    )

    useEffect(
        () => {
            switch (state.mode) {
                case 'timeBreak'    : return setTime(state.timeBreak)
                case 'timeLongBreak': return setTime(state.timeLongBreak)
                case 'timeFocus'    :
                default             : return setTime(state.timeFocus)
            }
        },
        [ state.mode, state.timeBreak, state.timeFocus, state.timeLongBreak, setTime ]
    )

    const saveConfig = (newConfig: PomoState) => {
        localStorage.setItem(POMO_CONFIG_TIMES_LOCALSTORAGE, JSON.stringify(newConfig))
        dispatcher({
            type: '[pomo] update times',
            payload: newConfig
        })
    }

    const setTimeInFocus = () => {
        pause()
        setTime(state.timeFocus)
    }

    const setTimeInBreak = () => {
        pause()
        setTime(state.timeBreak)
    }

    const setTimeInLongBreak = () => {
        pause()
        setTime(state.timeLongBreak)
    }

    return (
        <PomoContext.Provider value={{
            ...state,

            saveConfig,

            counter, pause, start, isStarted,

            setTimeInFocus,
            setTimeInBreak,
            setTimeInLongBreak,
        }}>
            { children }
        </PomoContext.Provider>
    )

}
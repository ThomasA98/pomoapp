import { useEffect, useReducer } from 'react'
import { PomoConfigContext } from './PomoConfigContext'
import { type PomoConfigState, pomoConfigReducer } from './pomoConfigReducer'
import { minutesToSeconds } from '../../utils'
import {
    DEFAULT_TIME_BREAK,
    DEFAULT_TIME_FOCUS,
    DEFAULT_TIME_LONG_BREAK,
    DEFAULT_BREAKS_AFTER_LONG_BREAK,
    POMO_CONFIG_TIMES_LOCALSTORAGE,
} from './constants'

export interface PomoConfigProviderProps {
    children: React.ReactNode
}

const initialState: PomoConfigState = {
    timeLongBreak       : minutesToSeconds(DEFAULT_TIME_LONG_BREAK),
    timeFocus           : minutesToSeconds(DEFAULT_TIME_FOCUS),
    timeBreak           : minutesToSeconds(DEFAULT_TIME_BREAK),
    breaksAfterLongBreak: DEFAULT_BREAKS_AFTER_LONG_BREAK,
}

export const PomoConfigProvider: React.FC<PomoConfigProviderProps> = ({ children }) => {

    const [ state, dispacher ] = useReducer(pomoConfigReducer, initialState)

    useEffect(
        () => {
            const pomoConfigTimesFromLocalstorage = localStorage.getItem(POMO_CONFIG_TIMES_LOCALSTORAGE)

            if (!pomoConfigTimesFromLocalstorage) return // queda con la configuracion de initialState

            const newPomoConfigTimes: PomoConfigState = JSON.parse(pomoConfigTimesFromLocalstorage)

            dispacher({
                type: '[pomo] update times from localstorage',
                payload: newPomoConfigTimes
            })
        },
        []
    )

    const saveConfig = (newConfig: PomoConfigState) => {
        localStorage.setItem(POMO_CONFIG_TIMES_LOCALSTORAGE, JSON.stringify(newConfig))
        dispacher({
            type: '[pomo] update times',
            payload: newConfig
        })
    }

    return (
        <PomoConfigContext.Provider value={{
            ...state,
            saveConfig
        }}>
            { children }
        </PomoConfigContext.Provider>
    )

}
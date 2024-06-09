import { POMO_MODES } from '.'

export type Modes = typeof POMO_MODES[number]

export interface PomoState {
    timeLongBreak       : number
    timeFocus           : number
    timeBreak           : number
    breaksAfterLongBreak: number
    mode                : Modes
}

export type TimeTypes = keyof Omit<PomoState, 'breaksAfterLongBreak'>

export type PomoAction
    = {
        type:
            | '[pomo] update times from localstorage'
            | '[pomo] update times'
            | '[pomo] reset times to default',
        payload: PomoState
    }

export const pomoReducer = (state: PomoState, action: PomoAction): PomoState => {

    switch (action.type) {
        case '[pomo] update times':
        case '[pomo] reset times to default':
        case '[pomo] update times from localstorage':
            return {
                ...state,
                ...action.payload
            }
        default: return state
    }

}
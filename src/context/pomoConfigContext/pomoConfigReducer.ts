export interface PomoConfigState {
    timeLongBreak       : number
    timeFocus           : number
    timeBreak           : number
    breaksAfterLongBreak: number
}

export type TimeTypes = keyof Omit<PomoConfigState, 'breaksAfterLongBreak'>

export type PomoConfigAction
    = {
        type:
            | '[pomo] update times from localstorage'
            | '[pomo] update times'
            | '[pomo] reset times to default',
        payload: PomoConfigState
    }

export const pomoConfigReducer = (state: PomoConfigState, action: PomoConfigAction): PomoConfigState => {

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
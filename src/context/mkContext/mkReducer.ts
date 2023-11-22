export interface MkState {
    text: string
}

export type MkAction
    = {
        type: '[mk] undate text' | '[mk] undate text from localstorage',
        payload: MkState
    }
    | {
        type: '[mk] reset'
    }

export const mkReducer = (state: MkState, action: MkAction): MkState => {

    switch (action.type) {
        case '[mk] undate text':
        case '[mk] undate text from localstorage':
            return {
                ...state,
                text: action.payload.text
            }
        case '[mk] reset':
            return {
                ...state,
                text: ''
            }
        default: return state
    }

}
export interface MkState {
    text: string
}

export type MkAction
    = {
        type: '[mk] update text' | '[mk] update text from localstorage',
        payload: MkState
    }
    | {
        type: '[mk] reset'
    }

export const mkReducer = (state: MkState, action: MkAction): MkState => {

    switch (action.type) {
        case '[mk] update text':
            return {
                ...state,
                text: action.payload.text
            }
        case '[mk] update text from localstorage':
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
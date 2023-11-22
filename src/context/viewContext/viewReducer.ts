import { VALID_TYPES_VIEW } from './constants';

export type TypeView = typeof VALID_TYPES_VIEW[number]

export interface ViewState {
    currentView: TypeView
}

export type ViewAction
    = {
        type: '[view] update current view' | '[view] charge view from localstorage',
        payload: TypeView
    }

export const viewReducer = (state: ViewState, action: ViewAction): ViewState => {

    switch (action.type) {
        case '[view] update current view':
        case '[view] charge view from localstorage':
            return {
                ...state,
                currentView: action.payload
            }
        default: return state
    }

}
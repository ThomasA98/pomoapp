export interface AiState {
    token: string
    API: string
    userInput: string
    textAi: string
}

export type AiAction
    = {
        type: '[ai] add token' | '[ai] change token',
        payload: { token: string }
    }
    | {
        type: '[ai] add api' | '[ai] change api',
        payload: { api: string }
    }
    | {
        type: '[ai] add token and api from localstorage',
        payload: {
            token: string,
            API: string,
        }
    }
    | {
        type: '[ai] delete token'
    }
    | {
        type: '[ai] add text from ia',
        payload: { textAi: string }
    }
    | {
        type: '[ai] change user input',
        payload: { userInput: string }
    }
    | {
        type: '[ai] clear response'
    }

export const AiReducer = (state: AiState, action: AiAction): AiState => {

    switch (action.type) {
        case '[ai] add token':
        case '[ai] change token':
            return {
                ...state,
                token: action.payload.token
            }
        case '[ai] add api':
        case '[ai] change api':
            return {
                ...state,
                API: action.payload.api
            }
        case '[ai] delete token':
            return {
                ...state,
                token: ''
            }
        case '[ai] add text from ia':
            return {
                ...state,
                textAi: action.payload.textAi
            }
        case '[ai] change user input':
            return {
                ...state,
                userInput: action.payload.userInput
            }
        case '[ai] add token and api from localstorage':
            return {
                ...state,
                ...action.payload
            }
        case '[ai] clear response':
            return {
                ...state,
                textAi: ''
            }
        default: return state
    }

}
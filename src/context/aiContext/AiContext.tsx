import { createContext } from 'react';
import { AiState } from './aiReducer';

export interface AiExhibitor extends AiState {
    setInput: (userInput: string) => void
    getResponse: () => string
    getResponseWithInputUser: () => string
    changeToken: (token: string) => void
    changeAPI: (api: string) => void
}

export const AiContext = createContext<AiExhibitor>({} as AiExhibitor)
import { createContext } from 'react';
import { MkState } from './mkReducer';

export interface MkExhibitor extends MkState {
    getText: () => string
    reset: () => void
    updateText: (text: string) => void
}

export const MkContext = createContext<MkExhibitor>({} as MkExhibitor)
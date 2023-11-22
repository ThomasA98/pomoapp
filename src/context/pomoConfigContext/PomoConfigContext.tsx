import { createContext } from 'react';
import { PomoConfigState } from './pomoConfigReducer';

export interface PomoConfigExhibitor extends PomoConfigState {
    saveConfig: (newConfig: PomoConfigState) => void
}

export const PomoConfigContext = createContext<PomoConfigExhibitor>({} as PomoConfigExhibitor)
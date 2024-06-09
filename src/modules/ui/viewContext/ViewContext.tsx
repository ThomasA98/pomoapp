
import { createContext } from 'react'
import { TypeView, ViewState } from './viewReducer'

export interface ViewExhibitor extends ViewState {
    changeView: (viewToChange: TypeView) => void
}

export const ViewContext = createContext<ViewExhibitor>({} as ViewExhibitor)
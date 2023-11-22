import { useEffect, useReducer } from 'react'
import { ViewContext } from './ViewContext'
import { type TypeView, viewReducer, type ViewState } from './viewReducer'
import { DEFAULT_VIEW, VALID_TYPES_VIEW, VIEW_LOCALSTORAGE } from './constants'

export interface ViewProviderProps {
    children: React.ReactNode
}

const initialState: ViewState = {
    currentView: DEFAULT_VIEW
}

export const ViewProvider: React.FC<ViewProviderProps> = ({ children }) => {

    const [ state, dispacher ] = useReducer(viewReducer, initialState)

    useEffect(
        () => {
            const viewLocalStorage = localStorage.getItem(VIEW_LOCALSTORAGE)

            if (!VALID_TYPES_VIEW.includes(viewLocalStorage as TypeView)) return

            dispacher({
                type: '[view] charge view from localstorage',
                payload: viewLocalStorage as TypeView
            })
        },
        []
    )

    const changeView = (viewToChange: TypeView) => {
        localStorage.setItem(VIEW_LOCALSTORAGE, viewToChange)
        dispacher({
            type: '[view] update current view',
            payload: viewToChange
        })
    }

    return (
        <ViewContext.Provider value={{
            ...state,
            changeView,
        }}>
            { children }
        </ViewContext.Provider>
    )

}
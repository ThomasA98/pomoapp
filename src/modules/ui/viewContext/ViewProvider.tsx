import { useEffect, useReducer } from 'react'
import {
    type TypeView,
    type ViewState,
    ViewContext,
    viewReducer,
    VALID_TYPES_VIEW,
    VIEW_LOCALSTORAGE
} from '.'

export interface ViewProviderProps {
    children: React.ReactNode
}

const initialState: ViewState = {
    currentView: 'pomoView'
}

export const ViewProvider: React.FC<ViewProviderProps> = ({ children }) => {

    const [ state, dispatcher ] = useReducer(viewReducer, initialState)

    useEffect(
        () => {
            const viewLocalStorage = localStorage.getItem(VIEW_LOCALSTORAGE)

            if (!VALID_TYPES_VIEW.includes(viewLocalStorage as TypeView)) return

            dispatcher({
                type: '[view] charge view from localstorage',
                payload: viewLocalStorage as TypeView
            })
        },
        []
    )

    const changeView = (viewToChange: TypeView) => {
        localStorage.setItem(VIEW_LOCALSTORAGE, viewToChange)
        dispatcher({
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
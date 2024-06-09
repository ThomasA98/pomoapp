import { useContext } from "react"
import { viewTransitionStateless } from "../lib_viewTransition"
import { ShareTransitions, TypeView, ViewContext } from "../modules/ui"

export const useTransition = () => {
    const view = useContext(ViewContext)

    const {
        viewTransitionHandler,
    } = viewTransitionStateless<ShareTransitions>()

    const transition = (viewSelected: TypeView, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        viewTransitionHandler(event, () => {
            view.changeView(viewSelected)
        })
    }

    return {
        transition,
        view,
        viewTransitionHandler,
    }
}
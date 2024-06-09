import { useTransition } from "../../hooks"
import { ViewTransition } from "../../lib_viewTransition"
import { viewTransitionStateless } from "../../lib_viewTransition/useViewTransition"
import { ShareTransitions, TransitionButton } from "../ui"
import { TimeCounter } from "./"


export const PomoView = () => {

  const { register } = viewTransitionStateless<ShareTransitions>([])
  const { transition, view } = useTransition()

  return (
    <ViewTransition
      change={view.currentView === 'pomoView'}
      initial={
        <TransitionButton onClick={event => transition('pomoView', event)} />
      }
      final={
        <section style={{ viewTransitionName: register(ShareTransitions.containerTransition) }} className='view'>
          <TimeCounter />
        </section>
      }
    />
  )
}
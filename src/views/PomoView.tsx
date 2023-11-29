import { TimeCounter } from '../components/TimeCounter'
import { viewTransitionStateless } from '../lib_viewTransition/useViewTransition'
import { ShareTransitions } from '../transitions/transitions'

const PomoView = () => {

  const { register } = viewTransitionStateless<ShareTransitions>([])

  return (
    <section style={{ viewTransitionName: register(ShareTransitions.containerTransition) }} className='view'>
        <TimeCounter />
    </section>
  )
}

export default PomoView
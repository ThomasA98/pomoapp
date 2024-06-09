import { useContext } from 'react'

import { AiContext } from './aiContext'
import { ViewTransition, viewTransitionStateless } from '../../lib_viewTransition'
import { ShareTransitions, TransitionButton } from '../ui'
import { useTransition } from '../../hooks'
import { AiInput } from './components/AiInput/AiInput'
import styles from './AiView.module.css'

export const AiView = () => {

    const { register } = viewTransitionStateless<ShareTransitions>()

    const ai = useContext(AiContext)

    const { view, transition } = useTransition()

    return (
        <ViewTransition
            change={view.currentView === 'iaView'}
            initial={
                <TransitionButton onClick={event => transition('iaView', event)} />
            }
            final={
                <section style={{ viewTransitionName: register(ShareTransitions.containerTransition) }} className='view'>
                    <div className={styles.aiview__container}>
                        <div className={styles.aiview__responses_container}>
                            <div className={styles.aiview__response_item}>
                                {ai.textAi}
                            </div>
                        </div>
                        <AiInput />
                    </div>
                </section>
            }
        />
    )
}
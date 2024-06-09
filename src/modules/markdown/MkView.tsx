import { useContext, useState } from 'react'

import { ViewTransition, viewTransitionStateless } from '../../lib_viewTransition'
import { MkEditor, MkPreview, MkSettings } from './'
import { MkContext } from './mkContext'
import { ShareTransitions, TransitionButton } from '../ui'
import styles from './MkView.module.css'
import { useTransition } from '../../hooks'

export type MkMode = 'edit' | 'preview'

export const MkView = () => {

    const mk = useContext(MkContext)
    const { view, transition } = useTransition()
    const { register } = viewTransitionStateless<ShareTransitions>()

    const [ mkMode, setMkMode ] = useState<MkMode>('edit')

    const toggleMode = () => {
        if (mkMode === 'edit') return setMkMode('preview')
        if (mkMode === 'preview') return setMkMode('edit')
        setMkMode('edit')
    }

    const textHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        mk.updateText(event.target.value)
    }

    return (
        <ViewTransition
        change={view.currentView === 'mkView'}
        initial={
            <TransitionButton onClick={event => transition('mkView', event)} />
        }
        final={
            <section style={{ viewTransitionName: register(ShareTransitions.containerTransition) }} className='view'>
            <div className={styles.mklayout}>
                <div className={styles.markdown}>
                    {
                        mkMode === 'edit' && <MkEditor text={mk.getText()} handler={textHandler} />
                    }
                    {
                        mkMode === 'preview' && <MkPreview markdown={mk.getText()} />
                    }
                </div>
                <MkSettings layout={styles.settings} onToggle={toggleMode} mode={ mkMode } />
            </div>
        </section>
        }
      />
    )

}
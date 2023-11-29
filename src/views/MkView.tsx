import { useContext, useState } from 'react'
import { viewTransitionStateless } from '../lib_viewTransition/useViewTransition'
import { ShareTransitions } from '../transitions/transitions'
import { MkContext } from '../context'
import { MkEditor, MkPreview, MkSettings } from '../components'

import styles from '../styles/view/MkView.module.css'

export type MkMode = 'edit' | 'preview'

const MkView = () => {

    const mk = useContext(MkContext)
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
        <section style={{ viewTransitionName: register(ShareTransitions.containerTransition) }} className='view'>
            <div className={styles.mklayout}>
                <div className={styles.markdown}>
                    {/* mk editor */}
                    {
                        mkMode === 'edit' && <MkEditor text={mk.getText()} handler={textHandler} />
                    }
                    {/* mk preview */}
                    {
                        mkMode === 'preview' && <MkPreview markdown={mk.getText()} />
                    }
                </div>
                {/* settings */}
                <MkSettings layout={styles.settings} onToggle={toggleMode} mode={ mkMode } />
            </div>
        </section>
    )

}

export default MkView
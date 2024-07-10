import { useContext, useState } from 'react'

import { MkEditor, MkPreview, MkSettings } from './'
import { MkContext } from './mkContext'
import { ViewContext } from '../ui'

export type MkMode = 'edit' | 'preview'

export const MkView = () => {

    const mk = useContext(MkContext)
    const { currentView } = useContext(ViewContext)

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
        <section className="p-4" hidden={ currentView !== 'mkView' }>
            <div className="flex gap-2 flex-col bg-red-500 rounded p-2">
                <div className="">
                    {
                        mkMode === 'edit' && <MkEditor text={mk.getText()} handler={textHandler} />
                    }
                    {
                        mkMode === 'preview' && <MkPreview markdown={mk.getText()} />
                    }
                </div>
                <MkSettings onToggle={toggleMode} mode={ mkMode } />
            </div>
        </section>
    )

}
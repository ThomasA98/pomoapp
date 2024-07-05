import { useContext, useState } from 'react'

import { MkEditor, MkPreview, MkSettings } from './'
import { MkContext } from './mkContext'

export type MkMode = 'edit' | 'preview'

export const MkView = () => {

    const mk = useContext(MkContext)

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
            <section>
            <div className="">
                <div className="">
                    {
                        mkMode === 'edit' && <MkEditor text={mk.getText()} handler={textHandler} />
                    }
                    {
                        mkMode === 'preview' && <MkPreview markdown={mk.getText()} />
                    }
                </div>
                <MkSettings layout="" onToggle={toggleMode} mode={ mkMode } />
            </div>
        </section>
    )

}
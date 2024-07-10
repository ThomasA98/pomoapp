import { useContext } from 'react'

import { AiContext } from './aiContext'
import { AiInput } from './components/AiInput/AiInput'
import { ViewContext } from '../ui'

export const AiView = () => {

    const { textAi } = useContext(AiContext)
    const { currentView } = useContext(ViewContext)

    return (
        <section className="p-4" hidden={ currentView !== 'iaView' }>
            <div className="flex gap-2 flex-col bg-red-500 rounded p-2">
                <div className='min-h-96 border rounded border-red-950'>
                    {textAi}
                </div>
                <AiInput />
            </div>
        </section>
    )
}
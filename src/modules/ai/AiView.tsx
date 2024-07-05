import { useContext } from 'react'

import { AiContext } from './aiContext'
import { AiInput } from './components/AiInput/AiInput'

export const AiView = () => {

    const ai = useContext(AiContext)

    return (
        <section>
            <div className="">
                <div className="">
                    <div className="">
                        {ai.textAi}
                    </div>
                </div>
                <AiInput />
            </div>
        </section>
    )
}
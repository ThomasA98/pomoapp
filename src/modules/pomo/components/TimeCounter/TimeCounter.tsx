import { useContext } from 'react'
import { PomoContext } from '../../pomoContext'
import { minuteTimerBySeconds } from '../../../../utils'

export const TimeCounter = () => {

    const pomo = useContext(PomoContext)

    return (
        <div className="">
            <div className="">
                <button className="" onClick={pomo.setTimeInFocus} >focus</button>
                <button className="" onClick={pomo.setTimeInBreak} >break</button>
                <button className="" onClick={pomo.setTimeInLongBreak} >long</button>
            </div>
            <div className="">{minuteTimerBySeconds(pomo.counter)}</div>
            <div className="">
                {
                    pomo.isStarted
                    ? <button className="" onClick={pomo.pause}>pause</button>
                    : <button className="" onClick={pomo.start}>start</button>
                }
            </div>
        </div>
    )
}

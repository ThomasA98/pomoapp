import { useContext } from 'react'
import { PomoContext } from '../../pomoContext'
import { minuteTimerBySeconds } from '../../../../utils'

export const TimeCounter = () => {

    const pomo = useContext(PomoContext)

    return (
        <div className="flex flex-col justify-center items-center w-full gap-10">
            <div className="flex justify-between gap-2 w-full">
                <button className="bg-red-400 shadow shadow-slate-800 p-2 rounded text-center capitalize flex-1" onClick={pomo.setTimeInFocus} >focus</button>
                <button className="bg-red-400 shadow shadow-slate-800 p-2 rounded text-center capitalize flex-1" onClick={pomo.setTimeInBreak} >break</button>
                <button className="bg-red-400 shadow shadow-slate-800 p-2 rounded text-center capitalize flex-1" onClick={pomo.setTimeInLongBreak} >long</button>
            </div>
            <div className="font-bold text-9xl text-red-500">{minuteTimerBySeconds(pomo.counter)}</div>
            <div className="">
                {
                    pomo.isStarted
                    ? <button className="bg-red-400 w-20 shadow shadow-slate-800 p-2 rounded text-center capitalize flex-1" onClick={pomo.pause}>pause</button>
                    : <button className="bg-red-400 w-20 shadow shadow-slate-800 p-2 rounded text-center capitalize flex-1" onClick={pomo.start}>start</button>
                }
            </div>
        </div>
    )
}

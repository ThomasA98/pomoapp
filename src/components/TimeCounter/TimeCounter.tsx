import { useContext } from 'react'
import { PomoContext } from '../../context'
import { minuteTimerBySeconds } from '../../utils'

import styles from './TimeCounter.module.css'

export const TimeCounter = () => {

    const pomo = useContext(PomoContext)

    return (
        <div className={ styles.timer__contaier }>
            <div className={ styles['timer__container-actions'] }>
                <button className={ styles.timer__button } onClick={pomo.setTimeInFocus} >focus</button>
                <button className={ styles.timer__button } onClick={pomo.setTimeInBreak} >break</button>
                <button className={ styles.timer__button } onClick={pomo.setTimeInLongBreak} >long</button>
            </div>
            <div className={ styles.timer__view }>{minuteTimerBySeconds(pomo.counter)}</div>
            <div className={ styles['timer__container-actions'] }>
                {
                    pomo.isStarted
                    ? <button className={ styles.timer__button } onClick={pomo.pause}>pause</button>
                    : <button className={ styles.timer__button } onClick={pomo.start}>start</button>
                }
            </div>
        </div>
    )
}

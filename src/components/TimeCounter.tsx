import { useContext } from 'react'
import { PomoConfigContext } from '../context'
import { minuteTimerBySeconds } from '../utils'
import { useTimer } from '../hooks/useTimer'

import styles from './TimeCounter.module.css'

export const TimeCounter = () => {

    const pomo = useContext(PomoConfigContext)

    const { counter, pause, start } = useTimer({ initialTime: pomo.timeBreak })

    return (
        <div className={ styles.timer__contaier }>
            <div className={ styles.timer__view }>{minuteTimerBySeconds(counter)}</div>
            <div className={ styles['timer__container-actions'] }>
                <button className={ `${ styles.timer__button } ${ styles['timer__button--secoundary'] }` } onClick={start}>start</button>
                <button className={ `${ styles.timer__button } ${ styles['timer__button--primary'] }` } onClick={pause}>pause</button>
            </div>
        </div>
    )
}

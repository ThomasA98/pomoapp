import { useState } from 'react'
import { secondToMiliseconds } from '../utils'

export interface UseTimerProps {
    initialTime: number
}

export const useTimer = ({ initialTime }: UseTimerProps) => {

    const [ counter, setCounter ] = useState<number>(initialTime)
    const [ intervalId, setIntervalId ] = useState<number | null>(null)
    const [ isStarted, setIsStarted ] = useState<boolean>(false)

    const start = () => {
        if (isStarted) return
        const interval = setInterval(() => {
            setCounter((prev) => {
                if (prev > 0) return prev - 1
                clearInterval(interval)
                return 0
            })
        }, secondToMiliseconds(1))
        setIntervalId(interval)
        setIsStarted(true)
    }

    const pause = () => {
        if (!intervalId) return
        clearInterval(intervalId)
        setIntervalId(null)
        setIsStarted(false)
    }

    return {
        counter,

        start,
        pause,
    }

}
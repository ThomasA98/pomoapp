import { useMemo, useState } from 'react'
import { secondToMilliseconds } from '../../../utils'

export interface UseTimerProps {
    initialTime: number
}

export const useTimer = () => {

    const [counter, setCounter] = useState<number>(0)
    const [intervalId, setIntervalId] = useState<number | null>(null)
    const [isStarted, setIsStarted] = useState<boolean>(false)

    const start = () => {
        if (isStarted) return
        const interval = setInterval(() => {
            setCounter((prev) => {
                if (prev > 0) return prev - 1
                clearInterval(interval)
                return 0
            })
        }, secondToMilliseconds(1))
        setIntervalId(interval)
        setIsStarted(true)
    }

    const pause = () => {
        if (!intervalId) return
        clearInterval(intervalId)
        setIntervalId(null)
        setIsStarted(false)
    }

    const setTime = useMemo(
        () => (time: number) => setCounter(time),
        []
    )

    return {
        counter,
        isStarted,

        start,
        pause,
        setTime,
    }

}
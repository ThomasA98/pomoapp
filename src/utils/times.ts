export const SECOND = 1_000 // miliseconds
export const SECONDS_IN_MINUTE: number = 60
export const MINUTES_IN_HOUR: number = 60
export const HOUR_IN_DAY: number = 24

export const minutesToSeconds = (minutes: number) => minutes * SECONDS_IN_MINUTE

export const minuteTimerBySeconds = (seconds: number) => {
    const minutes = Math.floor(seconds / SECONDS_IN_MINUTE)
    const resSeconds = seconds % SECONDS_IN_MINUTE
    return `${ minutes }:${ resSeconds }`
}

export const secondToMiliseconds = (seconds: number) => seconds * SECOND

//- minutes * SECONDS_IN_MINUTE
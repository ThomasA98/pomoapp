import { useState } from 'react'
import { flushSync } from 'react-dom'

interface DocumentVT extends Document {
    startViewTransition: (action: () => void) => Promise<void>
}

const canSupportVT = (document: unknown): document is DocumentVT => {
    return Boolean((document as DocumentVT)['startViewTransition'])
}

export const viewTransitionStateless = <T>(viewTypes: T[] = []) => ({

    register: (identifier: typeof viewTypes[number]): string => {
        return `${ identifier }`
    },

    viewTransitionHandler: <E extends { preventDefault: () => void }>(event: E, action: () => void) => {
        event.preventDefault()
        canSupportVT(document)
            ? document.startViewTransition(() => {
                flushSync(() => {
                    action()
                })
            })
            : action()
    },

})

export const useViewTransition = <T>(viewTypes: T[] = []) => {

    const [state, setState] = useState<T[]>([])
    const { register, viewTransitionHandler } = viewTransitionStateless(viewTypes)

    return {

        register: (identifier: typeof viewTypes[number]): string => {

            !state.includes(identifier) && setState(prev => [...prev, identifier])

            return register(identifier)
        },

        transitionsList: (): T[] => state,

        transitionsListUrlMode: (url: string): string => `${url}?transitions=${state.join(',')}`,

        viewTransitionHandler,

    }

}
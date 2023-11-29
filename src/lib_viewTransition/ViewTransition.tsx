export interface ViewTransitionProps {
  initial: React.ReactNode
  final: React.ReactNode
  change: boolean
}

export const ViewTransition: React.FC<ViewTransitionProps> = (
  { change, final, initial }
) => <>{ change ? final : initial }</>

// // forma 1
// // without validations, autocomplete and SOLID
// export const HelloWithArray = () => {
//   const { register, viewTransitionHandler } = useViewTransition()
//   const [ isChange, setIsChange ] = useState<boolean>(false)

//   const change = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
//       viewTransitionHandler(event, () => {
//           setIsChange(prev => !prev)
//       })
//   }

// return (
//   <ViewTransition
//       change={ isChange }

//       initial={
//       <>
//       <div onClick={ change } style={{ viewTransitionName: register('hello') } /* no validations */ }>mira como me veo1</div>
//       </>
//       }

//       final={
//           <div onClick={ change } style={{ viewTransitionName: register('hello') }}>mira como me veo2</div>
//       }
//   />
// )
// }


// // forma 2
// // with validations and autocomplete, but not SOLID
// const TRANSITIONS = ['hello', 'bye'] as const

// export const HelloWithArrayAndValidation = () => {
//   const { register, viewTransitionHandler } = useViewTransition([...TRANSITIONS])
//   const [ isChange, setIsChange ] = useState<boolean>(false)

//   const change = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
//       viewTransitionHandler(event, () => {
//           setIsChange(prev => !prev)
//       })
//   }

// return (
//   <ViewTransition
//       change={ isChange }

//       initial={
//       <>
//       <div onClick={ change } style={{ viewTransitionName: register('hello') } }>mira como me veo1</div>
//       </>
//       }

//       final={
//           <div onClick={ change } style={{ viewTransitionName: register('hello') }}>mira como me veo2</div>
//       }
//   />
// )
// }

// // forma 3
// // with autocomplete and validations, but SOLID is not complete
// const POMO_TRANSITIONS = ['hello', 'bye'] as const
// type PomoTransitionsType = typeof POMO_TRANSITIONS[number]

// export const HelloWithArrayAndType = () => {
//   const { register, viewTransitionHandler } = useViewTransition<PomoTransitionsType>()
//   const [ isChange, setIsChange ] = useState<boolean>(false)

//   const change = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
//       viewTransitionHandler(event, () => {
//           setIsChange(prev => !prev)
//       })
//   }

// return (
//   <ViewTransition
//       change={ isChange }

//       initial={
//       <>
//       <div onClick={ change } style={{ viewTransitionName: register('hello')/* register have autocomplete */ }}>mira como me veo1</div>
//       </>
//       }

//       final={
//           <div onClick={ change } style={{ viewTransitionName: register('hello') }}>mira como me veo2</div>
//       }
//   />
// )
// }

// // forma 4
// enum PomoTransitions {
//   hello = 'hello',
//   bye = 'bye',
// }

// export const HelloWithEnum = () => {
//     const { register, viewTransitionHandler } = useViewTransition<PomoTransitions>()
//     const [ isChange, setIsChange ] = useState<boolean>(false)

//     const change = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
//         viewTransitionHandler(event, () => {
//             setIsChange(prev => !prev)
//         })
//     }

//   return (
//     <ViewTransition
//         change={ isChange }

//         initial={
//         <>
//         <div onClick={ change } style={{ viewTransitionName: register(PomoTransitions.hello) }}>mira como me veo1</div>
//         </>
//         }

//         final={
//             <div onClick={ change } style={{ viewTransitionName: register(PomoTransitions.hello) }}>mira como me veo2</div>
//         }
//     />
//   )
// }

// // other
// // accept autocomplete in register and validations with enum
// // but repeat content in POMO_TRANSITIONS_OTHER (array const) and PomoTransitionsOther (enum)
// const POMO_TRANSITIONS_OTHER = ['hello', 'bye'] as const
// enum PomoTransitionsOther {
//   hello = 'hello',
//   bye = 'bye',
// }

// export const HelloOther = () => {
//     const { register, viewTransitionHandler } = useViewTransition([...POMO_TRANSITIONS_OTHER])
//     const [ isChange, setIsChange ] = useState<boolean>(false)

//     const change = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
//         viewTransitionHandler(event, () => {
//             setIsChange(prev => !prev)
//         })
//     }

//   return (
//     <ViewTransition
//         change={ isChange }

//         initial={
//         <>
//         <div onClick={ change } style={{ viewTransitionName: register(PomoTransitionsOther.hello) }}>mira como me veo1</div>
//         </>
//         }

//         final={
//             <div onClick={ change } style={{ viewTransitionName: register('hello') }}>mira como me veo2</div>
//         }
//     />
//   )
// }
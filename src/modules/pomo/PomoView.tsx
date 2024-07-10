import { useContext } from "react"
import { TimeCounter } from "./"
import { ViewContext } from "../ui"

export const PomoView = () => {
  const { currentView } = useContext(ViewContext)
  return (
    <section className="p-4" hidden={ currentView !== 'pomoView' }>
      <TimeCounter />
    </section>
  )
}
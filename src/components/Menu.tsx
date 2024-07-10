import { useContext } from "react"
import { ViewContext } from "../modules/ui"

export const Menu = () => {

    const { changeView } = useContext(ViewContext)

  return (
    <nav className="grid grid-cols-3 md:flex md:justify-center gap-2 bg-red-200 p-2">
        <div onClick={ () => changeView('iaView') } className="text-center min-w-20 bg-red-300 hover:bg-red-400 p-2 rounded hover:shadow hover:shadow-slate-800 cursor-pointer" >
            IA
        </div>
        <div onClick={ () => changeView('mkView') } className="text-center min-w-20 bg-red-300 hover:bg-red-400 p-2 rounded hover:shadow hover:shadow-slate-800 cursor-pointer" >
            MK
        </div>
        <div onClick={ () => changeView('pomoView') } className="text-center min-w-20 bg-red-300 hover:bg-red-400 p-2 rounded hover:shadow hover:shadow-slate-800 cursor-pointer" >
            PM
        </div>
    </nav>
  )
}
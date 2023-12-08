import { useContext } from 'react'

import { viewTransitionStateless } from './lib_viewTransition/useViewTransition'
import { ViewTransition } from './lib_viewTransition/ViewTransition'

import { TypeView, ViewContext } from './context'
import PomoView from './views/PomoView'
import MkView from './views/MkView'

import { ShareTransitions } from './transitions/transitions'
import { TransitionButton, Header } from './components'

import pomoIcon from './assets/pomo_icon.svg'
import iaIcon from './assets/ia_icon.svg'
import mkIcon from './assets/mk_icon.svg'

import './App.css'
import AiView from './views/AiView'

function App() {

  const view = useContext(ViewContext)

  const {
    viewTransitionHandler,
  } = viewTransitionStateless<ShareTransitions>()

  const transition = (viewSelected: TypeView, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    viewTransitionHandler(event, () => {
      view.changeView(viewSelected)
    })
  }

  return (
    <div className='grid-layout'>
      <Header />

      <main className='main'>
        <div className='accordion'>
          <ViewTransition
            change={view.currentView === 'iaView'}
            initial={<TransitionButton onClick={event => transition('iaView', event)} src={iaIcon} />}
            final={ <AiView /> }
          />
        </div>

        <div className='accordion'>
          <ViewTransition
            change={view.currentView === 'mkView'}
            initial={<TransitionButton onClick={event => transition('mkView', event)} src={mkIcon} />}
            final={<MkView />}
          />
        </div>

        <div className='accordion' >
          <ViewTransition
            change={view.currentView === 'pomoView'}
            initial={<TransitionButton onClick={event => transition('pomoView', event)} src={pomoIcon} />}
            final={<PomoView />}
          />
        </div>
      </main>

      <footer className='footer'>footer</footer>
    </div>
  )
}

export default App
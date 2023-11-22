// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useContext } from 'react'

import PomoView from './views/PomoView'

import { AiProvider, MkProvider, PomoConfigProvider, ViewContext } from './context'

import tomato from './assets/tomato.svg'
import pomoIcon from './assets/pomo_icon.svg'
import iaIcon from './assets/ia_icon.svg'
import mkIcon from './assets/mk_icon.svg'

import './App.css'

function App() {

  const view = useContext(ViewContext)

  return (
    <div className='grid-layout'>
      <header className='header header__container'>
        <div>
          <img className='header__icon' src={tomato} alt='icon_tomato' />
        </div>
        <h1 className='header__title'>Pomoapp</h1>
      </header>

      <main className='main'>
        <AiProvider>
          <div className='accordion'>
            {
              view.currentView === 'iaView'
                ? <div className='view'>IA</div>
                : <button className='toggle_button' onClick={() => view.changeView('iaView')}>
                  <img className='toggle_button__icon' src={iaIcon} alt='ia_icon' />
                </button>
            }
          </div>
          <MkProvider>
            <div className='accordion'>
              {
                view.currentView === 'mkView'
                  ? <div className='view'>MK</div>
                  : <button className='toggle_button' onClick={() => view.changeView('mkView')}>
                    <img className='toggle_button__icon' src={mkIcon} alt='mk_icon' />
                  </button>
              }
            </div>
          </MkProvider>
        </AiProvider>

        <PomoConfigProvider>
          <div className='accordion' >
            {
              (view.currentView !== 'pomoView')
              && <button className='toggle_button' onClick={() => view.changeView('pomoView')}>
                  <img className='toggle_button__icon' src={pomoIcon} alt='pomo_icon' />
                </button>
            }
            <PomoView isVisible={ view.currentView === 'pomoView' } />
          </div>
        </PomoConfigProvider>
      </main>

      <footer className='footer'>footer</footer>
    </div>
  )
}

export default App

import { Menu } from './components/Menu'
import { AiView } from './modules/ai'
import { MkView } from './modules/markdown'
import { PomoView } from './modules/pomo'

function App () {
  return (
    <div className='min-h-screen bg-red-200' style={{
      display: 'grid',
      gridTemplateRows: '1fr 3rem',
      paddingBottom: '1rem',
    }}>
      <AiView />
      <MkView />
      <PomoView />
      <Menu />
    </div>
  )
}

export default App
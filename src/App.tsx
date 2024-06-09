import { AiView } from './modules/ai'
import { MkView } from './modules/markdown'
import { PomoView } from './modules/pomo'

function App () {
  return (
    <div>
      <AiView />
      <MkView />
      <PomoView />
    </div>
  )
}

export default App
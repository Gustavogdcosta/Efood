import { BrowserRouter } from 'react-router-dom'

import { GlobalCSS } from './styleGlobal'
import Rotas from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalCSS />
      <Rotas />
    </BrowserRouter>
  )
}

export default App

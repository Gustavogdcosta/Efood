import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Hioki from './Pages/Hioki Sushi'
import Trattoria from './Pages/Trattoria'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="Hioki_Sushi" element={<Hioki />} />
    <Route path="Trattoria" element={<Trattoria />} />
  </Routes>
)

export default Rotas

import { useEffect, useState } from 'react'

import HeroCabecalho from '../../components/1-HomeComponents/1-Hero'
import MenuList from '../../components/1-HomeComponents/3-menuList'
import Footer from '../../components/Footer'

export type RestauranteAPI = {
  id: number
  titulo: string
  destacado?: boolean
  avaliacao: string
  tipo: string
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }
}

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<RestauranteAPI[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])

  return (
    <>
      <HeroCabecalho />
      <MenuList prato={restaurantes} />
      <Footer />
    </>
  )
}

export default Home

import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import HeaderTrattoria from '../../components/2-TrattoriaComponents/2.1-Header/Index'
import MenuTrattoria from '../../components/2-TrattoriaComponents/2.3-CardListCardapio'
import Footer from '../../components/Footer'

import { Cardapio, RestauranteAPI } from '../Home'

const Trattoria = () => {
  const { id } = useParams()

  const [tratoriaHead, setTratoriaHead] = useState<RestauranteAPI>()
  const [restaurantes, setRestaurantes] = useState<Cardapio[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setTratoriaHead(res))
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurantes(res?.cardapio))
  }, [id])

  if (!tratoriaHead) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <HeaderTrattoria heroTratoria={tratoriaHead} />
      <MenuTrattoria opcoesRestaurate={restaurantes} />
      <Footer />
    </>
  )
}

export default Trattoria

import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import HeaderTrattoria from '../../components/2-TrattoriaComponents/2.1-Header/Index'
import MenuTrattoria from '../../components/2-TrattoriaComponents/2.3-CardListCardapio'
import Footer from '../../components/Footer'

import { Cardapio, RestauranteAPI } from '../Home'
import { useGetHeaderQuery, useGetMenuQuery } from '../../services/api'
import Cart from '../../components/2-TrattoriaComponents/2.4-Cart'

const Trattoria = () => {
  const { id } = useParams()
  const { data: tratoriaHead } = useGetHeaderQuery(id!)
  const { data: restaurantes } = useGetMenuQuery(id!)

  // const [tratoriaHead, setTratoriaHead] = useState<RestauranteAPI>()
  // const [restaurantes, setRestaurantes] = useState<Cardapio[]>([])

  //   fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
  //     .then((res) => res.json())
  //     .then((res) => setTratoriaHead(res))
  // useEffect(() => {
  //   fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
  //     .then((res) => res.json())
  //     .then((res) => setRestaurantes(res?.cardapio))
  // }, [id])

  if (tratoriaHead && restaurantes) {
    return (
      <>
        <HeaderTrattoria heroTratoria={tratoriaHead} />
        <MenuTrattoria opcoesRestaurate={restaurantes} />
        <Cart />
        <Footer />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Trattoria

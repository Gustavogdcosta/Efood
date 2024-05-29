import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import HeaderTrattoria from '../../components/2-TrattoriaComponents/2.1-Header/Index'
import MenuTrattoria from '../../components/2-TrattoriaComponents/2.3-CardListCardapio'
import Footer from '../../components/Footer'

import { RestauranteAPI } from '../Home'

// const menuTrattoria: CardModelTrattoria[] = [
//   {
//     id: 1,
//     image: pizzaImage,
//     title: 'Pizza Marguerita',
//     description:
//       'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//     to: '#'
//   },
//   {
//     id: 2,
//     image: pizzaImage,
//     title: 'Pizza Marguerita',
//     description:
//       'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//     to: '#'
//   },
//   {
//     id: 3,
//     image: pizzaImage,
//     title: 'Pizza Marguerita',
//     description:
//       'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//     to: '#'
//   },
//   {
//     id: 4,
//     image: pizzaImage,
//     title: 'Pizza Marguerita',
//     description:
//       'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//     to: '#'
//   },
//   {
//     id: 5,
//     image: pizzaImage,
//     title: 'Pizza Marguerita',
//     description:
//       'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//     to: '#'
//   },
//   {
//     id: 6,
//     image: pizzaImage,
//     title: 'Pizza Marguerita',
//     description:
//       'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
//     to: '#'
//   }
// ]
// Ficou obsoleto (era o mock)

const Trattoria = () => {
  const { id } = useParams()

  const [tratoriaHead, setTratoriaHead] = useState<RestauranteAPI>()
  const [trattoriaMenu, setTrattoriaMenu] = useState<RestauranteAPI[]>([])

  useEffect(() => {
    fetch(
      `https://fake-api-tau.vercel.app/api/efood/restaurantes/trattoria/${id}`
    )
      .then((res) => res.json())
      .then((res) => setTratoriaHead(res))
    fetch(
      `https://fake-api-tau.vercel.app/api/efood/restaurantes/trattoria/${id}`
    )
      .then((res) => res.json())
      .then((res) => setTrattoriaMenu(res))
  }, [id])

  if (!tratoriaHead) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <HeaderTrattoria heroTratoria={tratoriaHead} />
      <MenuTrattoria cardTrattoria={trattoriaMenu} />
      <Footer />
    </>
  )
}

export default Trattoria

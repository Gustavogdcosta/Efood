import HeaderTrattoria from '../../components/2-TrattoriaComponents/2.1-Header/Index'
import CardModelTrattoria from '../../models/2-CardTrattoria'
import pizzaImage from '../../assets/images/PizzaMarguerita.png'
import MenuTrattoria from '../../components/2-TrattoriaComponents/2.3-CardListCardapio'
import Footer from '../../components/Footer'

const menuTrattoria: CardModelTrattoria[] = [
  {
    id: 1,
    image: pizzaImage,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    to: '#'
  },
  {
    id: 2,
    image: pizzaImage,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    to: '#'
  },
  {
    id: 3,
    image: pizzaImage,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    to: '#'
  },
  {
    id: 4,
    image: pizzaImage,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    to: '#'
  },
  {
    id: 5,
    image: pizzaImage,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    to: '#'
  },
  {
    id: 6,
    image: pizzaImage,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    to: '#'
  }
]

const Trattoria = () => (
  <>
    <HeaderTrattoria />
    <MenuTrattoria cardTrattoria={menuTrattoria} />
    <Footer />
  </>
)

export default Trattoria

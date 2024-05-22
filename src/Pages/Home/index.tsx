import HeroCabecalho from '../../components/1-HomeComponents/1-Hero'
import MenuList from '../../components/1-HomeComponents/3-menuList'
import PratoMenu from '../../models/1-CardHome'

import sushi from '../../assets/images/sushi.png'
import macarrao from '../../assets/images/macarrao.png'
import Footer from '../../components/Footer'

const menuPrincipal: PratoMenu[] = [
  {
    id: 1,
    image: sushi,
    categories: ['Destaque da semana', 'Japonesa'],
    title: 'Hioki Sushi',
    grade: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    to: 'Hioki_Sushi'
  },
  {
    id: 2,
    image: macarrao,
    categories: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    grade: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    to: 'Trattoria'
  },
  {
    id: 2,
    image: macarrao,
    categories: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    grade: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    to: 'Trattoria'
  },
  {
    id: 2,
    image: macarrao,
    categories: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    grade: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    to: 'Trattoria'
  },
  {
    id: 2,
    image: macarrao,
    categories: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    grade: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    to: 'Trattoria'
  },
  {
    id: 2,
    image: macarrao,
    categories: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    grade: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    to: 'Trattoria'
  }
]

const Home = () => (
  <>
    <HeroCabecalho />
    <MenuList prato={menuPrincipal} />
    <Footer />
  </>
)

export default Home

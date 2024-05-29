import { Container } from '../../../styleGlobal'

import { RestauranteAPI } from '../../../Pages/Home'

import imagemdeFundo from '../../../assets/images/fundo_cabecalho.png'
import efoodLogo from '../../../assets/images/logo.png'
import {
  BackgroundHeader,
  TituloCabecalho,
  ImagemHeroTratoria,
  UlHeader,
  DivAfter
} from './stylesHeader'
import { Link } from 'react-router-dom'

export type Props = {
  heroTratoria: RestauranteAPI
}

const HeaderTrattoria = ({ heroTratoria }: Props) => {
  return (
    <div>
      <BackgroundHeader style={{ backgroundImage: `url(${imagemdeFundo})` }}>
        <Container>
          <UlHeader>
            <Link to="/">
              <TituloCabecalho>Restaurantes</TituloCabecalho>
              <img src={efoodLogo} />
            </Link>
            <TituloCabecalho> 0 Produto(s) no carrinho </TituloCabecalho>
          </UlHeader>
        </Container>
      </BackgroundHeader>
      <ImagemHeroTratoria
        style={{ backgroundImage: `url(${heroTratoria.capa})` }}
      >
        <Container>
          <DivAfter>
            <h2>{heroTratoria.tipo}</h2>
            <h1>{heroTratoria.titulo}</h1>
          </DivAfter>
        </Container>
      </ImagemHeroTratoria>
    </div>
  )
}

export default HeaderTrattoria

import { Container } from '../../../styleGlobal'
import imagemdeFundo from '../../../assets/images/fundo_cabecalho.png'
import imagemTratoria from '../../../assets/images/image2.png'
import efoodLogo from '../../../assets/images/logo.png'
import {
  BackgroundHeader,
  TituloCabecalho,
  ImagemHeroTratoria,
  UlHeader,
  DivAfter
} from './stylesHeader'
import { Link } from 'react-router-dom'

const HeaderTrattoria = () => (
  <div>
    <BackgroundHeader style={{ backgroundImage: `url(${imagemdeFundo})` }}>
      <Container>
        <UlHeader>
          <TituloCabecalho>Restaurantes</TituloCabecalho>
          <Link to="/">
            <img src={efoodLogo} />
          </Link>
          <TituloCabecalho> 0 Produto(s) no carrinho </TituloCabecalho>
        </UlHeader>
      </Container>
    </BackgroundHeader>
    <ImagemHeroTratoria style={{ backgroundImage: `url(${imagemTratoria})` }}>
      <Container>
        <DivAfter>
          <h2>Italiana</h2>
          <h1>La Dolce Vita Trattoria</h1>
        </DivAfter>
      </Container>
    </ImagemHeroTratoria>
  </div>
)

export default HeaderTrattoria

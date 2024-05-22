import CardModelTrattoria from '../../../models/2-CardTrattoria'
import { Container } from '../../../styleGlobal'
import CardapioTrattoria from '../2.2-CardCardapio'
import { TrattoriaList } from './stylesCardList'

export type Props = {
  cardTrattoria: CardModelTrattoria[]
}

const MenuTrattoria = ({ cardTrattoria }: Props) => (
  <Container>
    <TrattoriaList>
      {cardTrattoria.map((itemdomenu) => (
        <CardapioTrattoria
          key={itemdomenu.id}
          image={itemdomenu.image}
          title={itemdomenu.title}
          description={itemdomenu.description}
          to={itemdomenu.to}
        />
      ))}
    </TrattoriaList>
  </Container>
)

export default MenuTrattoria

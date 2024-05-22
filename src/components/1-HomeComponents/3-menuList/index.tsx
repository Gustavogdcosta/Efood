import PratoMenu from '../../../models/1-CardHome'
import { Container } from '../../../styleGlobal'
import MenuItem from '../2-menuItem'
import { List } from './styleMenuList'

export type Props = {
  prato: PratoMenu[]
}

const MenuList = ({ prato }: Props) => (
  <Container>
    <List>
      {prato.map((pratoapedir) => (
        <MenuItem
          key={pratoapedir.id}
          image={pratoapedir.image}
          categories={pratoapedir.categories}
          description={pratoapedir.description}
          grade={pratoapedir.grade}
          title={pratoapedir.title}
          to={pratoapedir.to}
        />
      ))}
    </List>
  </Container>
)

export default MenuList

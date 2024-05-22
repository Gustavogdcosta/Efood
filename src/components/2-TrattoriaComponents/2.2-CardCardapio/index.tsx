import { AddButton, CardTrattoria } from './stylesCardCardapio'

type Props = {
  image: string
  title: string
  description: string
  to: string
}

export const CardapioTrattoria = ({ image, title, description, to }: Props) => (
  <CardTrattoria>
    <img src={image} alt={title} />
    <h1>{title}</h1>
    <p>{description}</p>
    <a href={to}>
      <AddButton>Adicionar ao Carrinho</AddButton>
    </a>
  </CardTrattoria>
)

export default CardapioTrattoria

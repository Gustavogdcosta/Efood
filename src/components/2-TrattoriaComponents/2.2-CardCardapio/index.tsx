import { AddButton, CardTrattoria } from './stylesCardCardapio'

type Props = {
  image: string
  title: string
  description: string
  id: number
}

export const CardapioTrattoria = ({ image, title, description }: Props) => {
  return (
    <CardTrattoria>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <p>{description}</p>
      <AddButton>Adicionar ao Carrinho</AddButton>
    </CardTrattoria>
  )
}

export default CardapioTrattoria

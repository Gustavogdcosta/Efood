import starIcon from '../../../assets/images/Estrela_nota.png'
import { Paragrafo, Titulo2 } from '../../../styleGlobal'
import {
  BotesCard,
  Card,
  CardImg,
  DivBotoesCard,
  SaibaMais,
  TituloCard
} from './stylesMenuItem'

type Props = {
  image: string
  categories: string[]
  title: string
  grade: string
  description: string
  to: string
}

export const MenuItem = ({
  image,
  categories,
  description,
  grade,
  title,
  to
}: Props) => (
  <Card>
    <CardImg src={image} alt={title} />
    <DivBotoesCard>
      {categories.map((info) => (
        <BotesCard key={info}>{info}</BotesCard>
      ))}
    </DivBotoesCard>
    <TituloCard>
      <Titulo2>{title}</Titulo2>
      <div>
        <Titulo2>{grade}</Titulo2>
        <img src={starIcon} alt="Estrela Dourada" />
      </div>
    </TituloCard>
    <Paragrafo>{description}</Paragrafo>
    <SaibaMais to={to}>Saiba Mais</SaibaMais>
  </Card>
)

export default MenuItem

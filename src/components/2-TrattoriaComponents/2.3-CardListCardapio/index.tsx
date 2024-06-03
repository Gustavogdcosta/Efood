import { useState } from 'react'
import { Container } from '../../../styleGlobal'
import CardapioTrattoria from '../2.2-CardCardapio'
import {
  TrattoriaList,
  AddButtonModal,
  ModalCard,
  ModalContent,
  ModelContainer
} from './stylesCardList'
import { RestauranteAPI } from '../../../Pages/Home'

import closeIcon from '../../../assets/images/fechar.png'
import PizzaImg from '../../../assets/images/PizzaMarguerita.png'

type Props = {
  cardTrattoria: RestauranteAPI[]
}

export interface ModalState {
  isVisible: boolean
}

const MenuTrattoria = ({ cardTrattoria }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false
  })

  return (
    <Container>
      <TrattoriaList
        onClick={() => {
          setModal({ isVisible: true })
        }}
      >
        {cardTrattoria.map((itemdomenu) => (
          <CardapioTrattoria
            key={itemdomenu.id}
            id={itemdomenu.id}
            image={itemdomenu.cardapio.foto}
            title={itemdomenu.cardapio.nome}
            description={itemdomenu.cardapio.descricao}
          />
        ))}
      </TrattoriaList>

      <ModalCard className={modal.isVisible ? 'visivel' : ''}>
        <ModelContainer>
          <img
            src={closeIcon}
            alt="fechar"
            onClick={() => {
              setModal({ isVisible: false })
            }}
          ></img>
          <ModalContent>
            <img src={PizzaImg} alt="Pizza de Marguerita"></img>
            <div>
              <h2>Pizza Marguerita</h2>
              <p>
                A pizza Margherita é uma pizza clássica da culinária italiana,
                reconhecida por sua simplicidade e sabor inigualável. Ela é
                feita com uma base de massa fina e crocante, coberta com molho
                de tomate fresco, queijo mussarela de alta qualidade, manjericão
                fresco e azeite de oliva extra-virgem. A combinação de sabores é
                perfeita, com o molho de tomate suculento e ligeiramente ácido,
                o queijo derretido e cremoso e as folhas de manjericão frescas,
                que adicionam um toque de sabor herbáceo. É uma pizza simples,
                mas deliciosa, que agrada a todos os paladares e é uma ótima
                opção para qualquer ocasião.
                <br />
                <br />
                Serve: de 2 a 3 pessoas.
              </p>
              <AddButtonModal>Adicionar ao carrinho - R$ 60,90</AddButtonModal>
            </div>
          </ModalContent>
        </ModelContainer>
        <div
          className="overlay"
          onClick={() => {
            setModal({ isVisible: false })
          }}
        ></div>
      </ModalCard>
    </Container>
  )
}

export default MenuTrattoria

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
import { Cardapio } from '../../../Pages/Home'

import closeIcon from '../../../assets/images/fechar.png'

export interface ModalState {
  isVisible: boolean
  selectedItem: Cardapio | null
}

export type Props = {
  opcoesRestaurate: Cardapio[]
}

const MenuTrattoria = ({ opcoesRestaurate }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    selectedItem: null
  })

  const itemClicado = (item: Cardapio) => {
    setModal({
      isVisible: true,
      selectedItem: item
    })
  }

  const formataPreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }
  return (
    <Container>
      <TrattoriaList>
        {opcoesRestaurate.map((itemdomenu) => (
          <CardapioTrattoria
            key={itemdomenu.id}
            image={itemdomenu.foto}
            title={itemdomenu.nome}
            description={itemdomenu.descricao}
            id={itemdomenu.id}
            onClick={() => itemClicado(itemdomenu)}
          />
        ))}
      </TrattoriaList>

      {modal.isVisible && modal.selectedItem && (
        <ModalCard className={modal.isVisible ? 'visivel' : ''}>
          <ModelContainer>
            <img
              src={closeIcon}
              alt="fechar"
              onClick={() => {
                setModal({ isVisible: false, selectedItem: null })
              }}
            ></img>
            <ModalContent>
              <img
                src={modal.selectedItem.foto}
                alt={modal.selectedItem.nome}
              ></img>
              <div>
                <h2>{modal.selectedItem.nome}</h2>
                <p>
                  {modal.selectedItem.descricao}
                  <br />
                  <br />
                </p>
                <p>{modal.selectedItem.porcao}</p>
                <AddButtonModal>
                  Adicionar ao carrinho -
                  {formataPreco(modal.selectedItem.preco)}
                </AddButtonModal>
              </div>
            </ModalContent>
          </ModelContainer>
          <div
            className="overlay"
            onClick={() => {
              setModal({ isVisible: false, selectedItem: null })
            }}
          ></div>
        </ModalCard>
      )}
    </Container>
  )
}

export default MenuTrattoria

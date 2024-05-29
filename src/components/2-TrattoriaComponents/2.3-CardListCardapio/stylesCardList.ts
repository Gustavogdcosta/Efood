import styled from 'styled-components'
import { cores } from '../../../styleGlobal'
import { AddButton } from '../2.2-CardCardapio/stylesCardCardapio'

export const TrattoriaList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  margin-top: 56px;
`
export const ModalCard = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModelContainer = styled.div`
  display: block;
  position: relative;
  z-index: 1;

  > img {
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
  }
`

export const ModalContent = styled.div`
  background-color: ${cores.rosa};
  width: 1024px;
  height: 344px;
  display: flex;
  color: ${cores.branca};

    img {
      height: 280px;
      width: 280px;
      object-fit: cover;
      margin: 32px 24px 32px 32px;
    }

    div {
      margin-top: 32px;
      margin-right: 32px;

      p {
        margin: 16px 0;
        text-align: justify;
      }
    }
  }
`

export const AddButtonModal = styled(AddButton)`
  width: 218px;
  border-radius: 0;
`

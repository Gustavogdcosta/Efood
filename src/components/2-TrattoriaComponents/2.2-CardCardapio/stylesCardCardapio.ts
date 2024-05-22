import styled from 'styled-components'
import { cores } from '../../../styleGlobal'

export const CardTrattoria = styled.div`
  height: 338px;
  background-color: ${cores.rosa};
  color: ${cores.branca};

  img {
    margin: 8px;
  }

  h1 {
    font-size: 16px;
    font-weight: 900;
    margin-left: 8px;
  }

  p {
    margin: 8px;
    text-align: justify;
  }
`

export const AddButton = styled.button`
  background-color: ${cores.amareloFooter};
  border: none;
  margin: 8px;
  width: 95%;
  color: ${cores.rosa};
  font-size: 14px;
  font-weight: bold;
  height: 24px;
  cursor: pointer;
`

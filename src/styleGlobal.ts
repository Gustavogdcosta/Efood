import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#eee',
  rosa: '#E66767',
  amareloFooter: '#FFEBD9',
  preto: '#000'
}

export const GlobalCSS = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`

export const Titulo2 = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: ${cores.rosa};
  margin: 8px;
`
export const Paragrafo = styled.p`
  font-size: 14px;
  color: ${cores.rosa};
  text-align: justify;
  margin: 8px;
`

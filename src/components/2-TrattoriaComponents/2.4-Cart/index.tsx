import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../../store'
import { close, remove } from '../../../store/reducer/cart'
import { formataPreco } from '../2.3-CardListCardapio'

import {
  CardContainer,
  Overlay,
  SideBar,
  OrderContainer,
  PriceContainer,
  ContinueButton
} from './stylesCart'
import trashIcon from '../../../assets/images/trashIcon.png'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, selectedItem) => {
      return (acumulador += selectedItem.preco!)
    }, 0)
  }

  return (
    <CardContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        {items.map((item) => (
          <OrderContainer key={item.id}>
            <div>
              <img src={item.foto} />
              <div>
                <h4>{item.nome}</h4>
                <p>{formataPreco(item.preco)}</p>
              </div>
            </div>
            <img src={trashIcon} onClick={() => removeItem(item.id)} />
          </OrderContainer>
        ))}
        <PriceContainer>
          <h5>Valor Total</h5>
          <h5>{formataPreco(getTotalPrice())}</h5>
        </PriceContainer>
        <ContinueButton>Continuar com a entrega</ContinueButton>
      </SideBar>
    </CardContainer>
  )
}

export default Cart

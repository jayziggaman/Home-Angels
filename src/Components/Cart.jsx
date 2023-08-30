import React, { useContext } from 'react'
import { productsContext } from '../App'
import CartItem from './CartItem'


const Cart = () => {
  const { cartItems } = useContext(productsContext)
  
  const cartTotalArr = cartItems?.map( item => {
    return item.amt * item.price
  })
  const cartTotal = cartTotalArr?.reduce((a, b) => {
    return a + b
  }, 0 )

  if (cartItems) {
    return (
      <main className='cartitem-main'>
        <header className='cart-header'>
          <div>
            <p> You have <span className='cart-header-amount'>{cartItems?.length}</span> items in your cart !</p>
            <p>
              Your total is <span className='cart-total-span'>$ { cartTotal?.toFixed(2) }</span> 
            </p>
          </div>
        </header>
        <div className='cartitem-main-overlay'>
          {cartItems.map(item => {
            const { name, id, price, imgUrl, amt, isSaved } = item
            return <CartItem key={id} name={name} id={id} price={price} img={imgUrl} total={price * amt} amt={amt} isSaved={isSaved} />
          })}
          {cartItems.length === 0 && <div className='cart-item-message-div'>
          <h2 className='cart-item-message'>
            You have nothing in your cart !
          </h2>
        </div>  }
       </div>
      </main>
    )
  }
}

export default Cart
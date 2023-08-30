import React, { useContext } from 'react'
import { productsContext } from '../App'
import { FaMinus, FaPlus, FaRegBookmark, FaBookmark } from 'react-icons/fa'

const CartItem = ({name,price,isSaved,img,total,amt,id }) => {
  const {increaseCart, decreaseCart, saveFunction, openModal} = useContext(productsContext)



  return (
    <div className='cartitem-div'>
      <div className='cartitem-img-div' onClick={ () => {openModal(id)} }>
        <img src={img} alt="" className='cartitem-img'/>
      </div>

      <div className='cartitem-name-price'>
        <h3 className='cartitem-name'>{name}</h3>
        <div className='cartitem-price'>
          <p className='price'>$ {price}</p>
          <div className='save-div' role='button' onClick={() => {
            saveFunction(id)
          } }>
            { isSaved ? <FaBookmark /> : <FaRegBookmark />}
          </div>
        </div>

        <div className='cartitem-btn-amt-total'>
          <div className='cartitem-btn-amt'>
            <button onClick={ () => decreaseCart(id) }>
              <FaMinus />
            </button>
            <span>
              {amt}
            </span>
            <button onClick={() => {
              increaseCart(id)
            }} >
              <FaPlus />
            </button>
          </div>
          <div className='cart-item-total'>$ {total.toFixed(2)} </div>
        </div>
        
        
      </div>
    </div>
  )
}

export default CartItem
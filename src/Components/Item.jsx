import React, { useContext } from 'react'
import { FaMinus, FaPlus, FaRegBookmark, FaBookmark } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { productsContext } from '../App'


const Item = ({name, price, info, img, id, amt, isSaved}) => {
  const {
    saveFunction, increaseCart, decreaseCart, saveRef, openModal
  } = useContext(productsContext)


  return (
    <div className='item'>
      <div className='item-img-div' onClick={ () => {openModal(id)} }>
        <img src={img} alt={name} className='item-img' />
      </div>

      <div>
        <div className='item-name-price-info'>
          <Link to={id}>
            <div>
              <h3 className='item-name'>{name} </h3>
              <p className='item-info'>{info?.slice(0,27)}...</p>
              <p className='item-price price'>$ {price} </p>
            </div>
          </Link>
          
              

          <div className='btn-amount-bookmark'>
            <div className='btn-amount'>
              <button className='btn decrease' 
                onClick={() => {
                  decreaseCart(id)
                }}
              >
                <FaMinus />
              </button>
              <span className='item-amount'>
                {amt}
              </span>
              <button className='btn increase' 
                onClick={() => {
                  increaseCart(id)
                }}>
                <FaPlus />
              </button>
            </div>
            <div className='save-btn-div' ref={saveRef} id={id} role='button' onClick={() => {
              saveFunction(id)
            }}>
              <div>
                { isSaved ? <FaBookmark /> : <FaRegBookmark />}
              </div>
              
            </div>
          </div>
              
        </div>
      </div>
    </div>
  )
}

export default Item
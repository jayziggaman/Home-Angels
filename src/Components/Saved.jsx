import React, { useContext } from 'react'
import { productsContext } from '../App'
import Item from './Item'

const Saved = () => {
  const { saved } = useContext(productsContext)

  
  return (
    <main className='saved-main'>
      <div className='saved-overlay'>
        {saved.map(save => {
        const { name, id, price, amt, imgUrl, isSaved, info } = save
          return <Item key={id} name={name} price={price} img={imgUrl}
            id={id} amt={amt} isSaved={isSaved} info={info}
          />
        })}
        {saved.length === 0 && <div className='cart-item-message-div'>
          <h2 className='cart-item-message'>
            You have nothing saved yet !
          </h2>
        </div>  }
      </div>
    </main> 
  )
}

export default Saved;
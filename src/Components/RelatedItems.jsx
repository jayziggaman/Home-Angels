import React, { useContext } from 'react'
import { productsContext } from '../App'
import Item from './Item'

const RelatedItems = ({ id, cat }) => {
  const { products } = useContext(productsContext)
  const items = products.filter(prod => prod.cat === cat)
  const displayItems = items.filter(item => item.id !== id)
  console.log(displayItems)
  return (
    <div className='related-items-div'>
      <div className="related-items-header">
        <h3>related items...</h3>
      </div>
      <div className="related-items">
        {displayItems.map(item => {
          const { name, id, price, amt, imgUrl, isSaved, info } = item
            return <Item key={id} name={name} price={price} img={imgUrl}
              id={id} amt={amt} isSaved={isSaved} info={info}
            />
          })}
      </div>
    </div>
  )
}

export default RelatedItems
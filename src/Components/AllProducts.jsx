import React, { useContext, useState, useEffect } from 'react'
import { productsContext } from '../App'
import Item from './Item'


const AllProducts = ({ loading }) => {
  const { products } = useContext(productsContext)


  if (loading) {
    <h3>loading...</h3>
  } else {
    return (
      <main className='home-main'>
        <div className='home-overlay' >
          {products.map( item => {
            const {name,price,imgUrl,info,id,amt,isSaved} = item
            return (
              <Item key={id} name={name} 
                price={price} img={imgUrl} amt={amt}
                info={info} id={id} isSaved={isSaved}
              />)
          } )}
        </div>
      </main>
    )
  }
}

export default AllProducts
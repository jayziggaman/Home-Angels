import React, { useContext, useEffect, useState } from 'react'
import { FaMinus, FaPlus, FaRegBookmark, FaBookmark } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
import { productsContext } from '../App'
import RelatedItems from './RelatedItems'

const ItemView = () => {
  const [pts, setPts] = useState()
  console.log(pts)
  const {itemId} = useParams()
  const {
    products, saveFunction, decreaseCart, increaseCart, openModal
  } = useContext(productsContext)


  useEffect(() => {
    let mounted = true
    if (mounted) {
      setPts(products.find(product => product.id === itemId))
    }
    return () => mounted =  false
  }, [itemId, products])

  
  if (pts !== undefined) {
    return (
      <main className="itemview-main">
        <div className='itemview-main-content'>
          <div className='itemview-img-div' onClick={ () => {openModal(pts?.id)} }>
            <img src={pts?.imgUrl} alt="" className='itemview-img'/>
          </div>
    
          <div className='itemview-name-price'>
            <h2 className='itemview-name'>{pts?.name}</h2>
            <p className='itemview-price price'>$ {pts?.price}</p>
            <div className='save-btns'>
              <div className='btn-amount'>
                <button className='btn decrease'  onClick={() => {
                    decreaseCart(itemId)
                  }}>
                  <FaMinus />
                </button>
                <span className='item-amount'> {pts?.amt} </span>
                <button className='btn increase' onClick={() => {
                    increaseCart(itemId)
                  }}>
                  <FaPlus />
                </button>
              </div>
              <div className='save-div' onClick={() => {
                saveFunction(itemId)
              }}>
                { pts?.isSaved === true ? <FaBookmark /> : <FaRegBookmark />}
              </div>
            </div>
            
            <p className='itemview-info'>
              {pts?.info}
            </p>
          </div>
        </div>
        <RelatedItems cat={pts.cat} id={pts.id} />
        <div className='all-link'>
          <Link to='/allproducts'>
            go to all
          </Link>
        </div>
      </main>
    )
  }
}

export default ItemView
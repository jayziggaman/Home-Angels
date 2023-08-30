import React from 'react'
import { Link } from 'react-router-dom'

const Lostpage = () => {
  return (
    <div className='lost-page-main'>
      <h3>Oops nothing to see here.</h3>
      <p>
        <Link to='/allproducts'>
          back to products
        </Link>
      </p>
    </div>
  )
}

export default Lostpage
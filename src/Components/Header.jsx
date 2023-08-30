import React, { useContext } from 'react'
import { FaBars, FaShoppingCart, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { productsContext } from '../App'

const Header = ({showNav, setShowNav}) => {
  const { cartItems } = useContext(productsContext)

  
  return (
    <header className='home-header'>
      <div className='header-cart' role='button'onClick={() => setShowNav(false)}>
        <div className='header-cart-upper'>
          <div className='page-name-div'>
            <h1>
              <Link to='/'>Home Angels</Link>
            </h1>
            <p>quality furniture you can trust...</p>
          </div>
          <div className='header-cart-icon-div'>
            <Link to='cart'>
              <FaShoppingCart className='header-cart-icon' />
              <span className='cart-icon-amt'>
                {cartItems.length}
              </span>
            </Link>
          </div>
        </div>

        {/* <div className='location'>
          {location.pathname}
        </div> */}
      </div>
      
      <button className='nav-toggle'>
        {!showNav ? <FaBars role='button' onClick={() => setShowNav(true)} className='nav-bars'/>
          : <FaTimes role='button' onClick={() => setShowNav(false)} className='nav-remove'/>
        }
      </button>
    </header>
  )
}

export default Header
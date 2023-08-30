import React, { useEffect } from 'react'
import {  FaEnvelope, FaHome, FaInfoCircle, FaObjectGroup, FaBookmark, FaChair } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Nav = ({ showNav, setShowNav }) => {
  useEffect(() => {
    const navLinks = document.querySelectorAll('.nav-option')
    navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        navLinks.forEach( item => item.classList.remove('active-navlink') )
        e.currentTarget.classList.add('active-navlink')
      })
    })
    
  }, [] )
  return (
    <nav className={showNav ? 'show-nav' : null}>
      <section className='main-nav-section'>
        <div>
          <Link to='/'>
            <div id='home' className='nav-option'>
              <FaHome /> <h3>Home</h3>
            </div>
          </Link>

          <Link to='allproducts'>
            <div id='allproducts' className='nav-option'>
              <FaChair /> <h3>All Products</h3>
            </div>
          </Link>

          <Link to='products'>
            <div id='products' className='nav-option'>
              <FaObjectGroup /> <h3>Categories</h3>
            </div>
          </Link>

          <Link to='about'>
            <div id='about' className='nav-option'>
              <FaInfoCircle /> <h3>About</h3>
            </div>
          </Link>

          <Link to='saved'>
            <div id='saved' className='nav-option'>
              <FaBookmark /> <h3>Saved</h3>
            </div>
          </Link>
          
        </div>

        <div className='nav-email'>
          <a href="mailto:michaelchisom700@gmail.com">
            <FaEnvelope  /> Email me
          </a>
        </div>
      </section>

      <section className='sec-nav-section' 
        onClick={() => setShowNav(false)}>
      </section>
      
      
    </nav>
  )
}

export default Nav
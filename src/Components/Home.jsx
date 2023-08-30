import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  useEffect(() => {
    const main = document.querySelector('.landing-main')
    main.classList.add('show-landing-main')
  }, [] )

  return (
    <main className='landing-main'>
      <div className="landing-overlay">
        <h1>
          Home Angels
        </h1>
        <p className='landing-text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, aut possimus. Assumenda iste itaque optio eius sed vero, esse enim exercitationem officia eos in voluptatum blanditiis nam nobis repellendus cumque id repudiandae unde. Quisquam, placeat recusandae asperiores enim quasi omnis porro impedit. Deserunt quasi molestiae sapiente dolor obcaecati eveniet possimus est beatae ducimus fugit aut doloribus tempora, consectetur voluptas asperiores labore accusantium voluptatibus harum et odit eaque explicabo sed illum.
        </p>
        
        <div className="landing-links">
          <Link to='/allproducts'>All Products</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
        </div>
      </div>
    </main>
  )
}

export default Home
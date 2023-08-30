import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { productsContext } from '../App'

const Products = () => {
  const [move, setMove] = useState(false)
  const { 
    chairs, tables, curtains, dinings, innerDoors, outerDoors, tvStands, chandeliers, wallArts, wardrobes, bedFrames, kitchenCabinets 
   } = useContext(productsContext)

  useEffect(() => {
    const products = document.querySelectorAll('.products')

    products.forEach(product => {
      const content = product.querySelector('.move-div')
      product.addEventListener('mouseover', function () {
        content.classList.add('move')
        setMove(true)
      })
      product.addEventListener('mouseout', function () {
        content.classList.remove('move')
        setMove(false)
      } )
    } )
  }, [])
  

  return (
    <main className="products-main">
      <div className="products-overlay">
      
        <section className="chairs products">
          <Link className='link' to={chairs[0]?.cat}>
            <div className='chair-img'></div>
            <div className="move-div"  style={{color: move ? null : 'black' }}>
              <p>Chairs</p>
              <span>From $199</span>
              <button>Buy now</button>
            </div>
          </Link>
        </section>
        
        <section className="tables products">
          <Link className='link' to={tables[0]?.cat}>
            <div data-id='tables'>
              <div className='tables-img'></div>
              <div className="move-div">
                <p>Tables</p>
                <span>From $199</span>
                <button>Buy now</button>
              </div>
            </div>
          </Link>
        </section>

        <section className="curtains products">
          <Link className='link' to={curtains[0]?.cat}>
            <div data-id='curtains'>
              <div className='curtains-img'></div>
              <div className="move-div">
                <p>Curtains</p>
                <span>From $199</span>
                <button>Buy now</button>
              </div>
            </div>
          </Link>
        </section>

        <section className="tv-stands products">
          <Link className='link' to={tvStands[0]?.cat}>
            <div data-id='tv-frames'>
              <div className='tv-stands-img'></div>
              <div className="move-div"  style={{color: move ? null : 'black' }}>
                <p>Tv Stands</p>
                <span>From $199</span>
                <button>Buy now</button>
              </div>
            </div>
          </Link>
        </section>

        <section className="chandeliers products">
          <Link className='link' to={chandeliers[0]?.cat}>
            <div data-id='chandeliers'>
              <div className='chandeliers-img'></div>
              <div className="move-div">
                <p>Chandeliers</p>
                <span>From $199</span>
                <button>Buy now</button>
              </div>
            </div>
          </Link>
        </section>

        <section className="bed-frames products">
          <Link className='link' to={bedFrames[0]?.cat}>
            <div data-id='bed-frames'>
              <div className='bed-frames-img'></div>
              <div className="move-div">
                <p>Bed frames</p>
                <span>From $199</span>
                <button>Buy now</button>
              </div>
            </div>
          </Link>
        </section>

        <section className="front-doors products">
          <Link className='link' to={outerDoors[0]?.cat}>
            <div data-id='front-doors'>
              <div className='front-doors-img'></div>
              <div className="move-div">
                <p>Front doors</p>
                <span>From $199</span>
                <button>Buy now</button>
              </div>
            </div>
          </Link>
        </section>

        <section className="wardrobes products">
          <Link className='link' to={wardrobes[0]?.cat}>
            <div data-id='wardrobes'>
              <div className='wardrobes-img'></div>
              <div className="move-div"  style={{color: move ? null : 'black' }}>
                <p>Wardrobes</p>
                <span>From $199</span>
                <button>Buy now</button>
              </div>
            </div>
          </Link>
        </section>

        <section className="inner-doors products">
          <Link className='link' to={innerDoors[0]?.cat}>
            <div data-id='inner-doors'>
              <div className='inner-doors-img'></div>
              <div className="move-div">
                <p>Inner doors</p>
                <span>From $199</span>
                <button>Buy now</button>
              </div>
            </div>
          </Link>
        </section>

        <section className="dinings products">
          <Link className='link' to={dinings[0]?.cat}> 
            <div data-id='dinings'>
              <div className='dinings-img'></div>
              <div className="move-div">
                <p>Dining Sets</p>
                <span>From $199</span>
                <button>Buy now</button>
              </div>
            </div>
          </Link>
        </section>

        <section className="kitchen-cabinets products">
          <Link className='link' to={kitchenCabinets[0]?.cat}>
            <div data-id='kitchen-cabinets'>
              <div className='cabinets-img'></div>
              <div className="move-div">
                <p>Kitchen Cabinets</p>
                <span>From $199</span>
                <button>Buy now</button>
              </div>
            </div>
          </Link>
        </section>

        <section className="wall-art products">
          <Link className='link' to={wallArts[0]?.cat}>
            <div data-id='wall-art'>
              <div className='wallart-img'></div>
              <div className="move-div"  style={{color: move ? null : 'black' }}>
                <p>Wall Art</p>
                <span>From $199</span>
                <button>Buy now</button>
              </div>
            </div>
          </Link>
        </section>
      </div>
    </main>
  )
}

export default Products
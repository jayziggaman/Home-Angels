import React, { useContext, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { productsContext } from '../App';
import Item from './Item';
import loadVideo from '../Videos/loadVideo.mp4'

const CategoryPage = () => {
  const {categoryName} = useParams()
  const { products } = useContext(productsContext)
  const [productSelected, setProductSelected] = useState([])
  const [ptd, setPtd]  = useState()
  const [index, setIndex] = useState(0)
  const initialRender = useRef(true)

  useEffect(() => {
    setProductSelected(products.filter(product => product.cat === categoryName))
  }, [products, categoryName])


  function increment() {
    if (index === productSelected?.length - 1) {
      setIndex(prev => prev -prev)
    } else {
      setIndex(index => index + 1)
    }
    //add functionality so the product with the correct index is displayed and the index increases every 10 seconds
    setPtd(productSelected[index])
  }

  useEffect(() => {
    setIndex(prev => prev - prev)
  }, [])
  
  useEffect(() => {
    let interval
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      interval = setInterval(() => {
        increment()
      }, 10000)
    }
    return () => clearInterval(interval)
  }, [index]);

  if (productSelected.length !== 0) {
    return (
      <main className='category-page-main'>
        <section className='category-display-section'>
          {ptd &&
            <>
            {productSelected.map((product, i) => {
              return (
                <div key={i}>
                  <img src={product.imgUrl} alt="" className='category-display-img'/>
                  <h4 className='fixed category-display-name'>{ptd.name}</h4>
                  <p className='fixed category-display-price price'>$ {ptd.price}</p>
                  <p className='fixed category-display-info'>{ptd.info}</p>
                </div>
                )
              })}
            </>
          }

          {ptd === undefined &&
            <video className='load-video' autoPlay muted src={loadVideo}></video>
          }
          
          <div className="category-display-overlay"></div>
        </section>
  
        <section className='category-page-main-items'>
          <div className='category-page-overlay'>
            {productSelected.map(product => {
              const {name, price, info, imgUrl, id, isSaved, amt} = product
              return <Item id={id} key={id} name={name} price={price}
                info={info} img={imgUrl} isSaved={isSaved} amt={amt}
              />
            } )}
          </div>
        </section>
      </main>
    );
  }
  
};

export default CategoryPage;
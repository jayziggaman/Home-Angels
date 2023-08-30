import React, { useEffect, useRef, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Header from './Components/Header'
import ItemView from './Components/ItemView'
import Nav from './Components/Nav'
import {
  chairRef, tableRef, curtainRef, diningRef, innerDoorRef, outerDoorRef, tvStandRef, chandelierRef, wallArtRef, wardrobeRef, bedFrameRef, kitchenCabinetRef, 
} from './firebase/config'
import {onSnapshot} from 'firebase/firestore'
import CategoryPage from './Components/CategoryPage'
import Products from './Components/Products'
import Lostpage from './Components/Lostpage'
import Saved from './Components/Saved'
import ItemModal from './Components/ItemModal'
import Cart from './Components/Cart'
import AllProducts from './Components/AllProducts'
import {FaAngleUp} from 'react-icons/fa'


export const productsContext = React.createContext()

const App = () => {
  const [loading, setLoading] = useState(true)
  const [showNav, setShowNav] = useState(false)
  const [modal, setModal] = useState()
  const [showModal, setShowModal] = useState(false)
  const saveRef = useRef()
  const [cartItems, setCartItems] = useState([])
  const [cartAdded, setCartAdded] = useState(true)
  const [saved, setSaved] = useState([])
  const [amt, setAmt] = useState(0)
  const [productsII, setProducts] = useState([])
  const tempProducts = JSON.parse(localStorage.getItem('newProducts'))
  let products = tempProducts || productsII
  const [chairs, setChairs] = useState([])
  const [tables, setTables] = useState([])
  const [chandeliers, setChandeliers] = useState([])
  const [curtains, setCurtains] = useState([])
  const [bedFrames, setBedFrames] = useState([])
  const [outerDoors, setOuterDoors] = useState([])
  const [innerDoors, setInnerDoors] = useState([])
  const [dinings, setDinings] = useState([])
  const [kitchenCabinets, setKitchenCabinets] = useState([])
  const [tvStands, setTvStands] = useState([])
  const [wardrobes, setWardrobes] = useState([])
  const [wallArts, setWallArts] = useState([])
  const initialRender = useRef(true);
  const initialRenderII = useRef(true);
  const initialRenderIII = useRef(true);
    
  useEffect(() => {
    let mounted = true
    if (mounted) {
      setLoading(false)
      const fetchData = async () => {
        try {
          onSnapshot(chairRef, (snapshot) => {
            snapshot.docs.forEach(chair => {
              chairs.push({ ...chair.data(), isSaved: false, amt: 0, })
            })
            setProducts(prev => [...prev, ...chairs])
          })
          onSnapshot(tableRef, (snap) => {
            snap.docs.forEach(table => {
              tables.push({ ...table.data(), isSaved: false, amt: 0 })
            })
            setProducts( prev => [...prev, ...tables] )
          })
          onSnapshot(curtainRef, (snap) => {
            snap.docs.forEach(curtain => {
              curtains.push({ ...curtain.data(), isSaved: false, amt: 0 })
            })
            setProducts( prev => [...prev, ...curtains] )
          })
          onSnapshot(diningRef, (snap) => {
            snap.docs.forEach(dining => {
              dinings.push({ ...dining.data(), isSaved: false, amt: 0 })
            })
            setProducts( prev => [...prev, ...dinings] )
          })
          onSnapshot(wallArtRef, (snap) => {
            snap.docs.forEach(wallArt => {
              wallArts.push({ ...wallArt.data(), isSaved: false, amt: 0 })
            })
            setProducts( prev => [...prev, ...wallArts] )
          })
          onSnapshot(wardrobeRef, (snap) => {
            snap.docs.forEach(wardrobe => {
              wardrobes.push({ ...wardrobe.data(), isSaved: false, amt: 0 })
            })
            setProducts( prev => [...prev, ...wardrobes] )
          })
          onSnapshot(outerDoorRef, (snap) => {
            snap.docs.forEach(outerDoor => {
              outerDoors.push({ ...outerDoor.data(), isSaved: false, amt: 0 })
            })
            setProducts( prev => [...prev, ...outerDoors] )
          })
          onSnapshot(innerDoorRef, (snap) => {
            snap.docs.forEach(innerDoor => {
              innerDoors.push({ ...innerDoor.data(), isSaved: false, amt: 0 })
            })
            setProducts( prev => [...prev, ...innerDoors] )
          })
          onSnapshot(kitchenCabinetRef, (snap) => {
            snap.docs.forEach(kitchenCabinet => {
              kitchenCabinets.push({ ...kitchenCabinet.data(), isSaved: false, amt: 0 })
            })
            setProducts( prev => [...prev, ...kitchenCabinets] )
          })
          onSnapshot(tvStandRef, (snap) => {
            snap.docs.forEach(tvStand => {
              tvStands.push({ ...tvStand.data(), isSaved: false, amt: 0 })
            })
            setProducts( prev => [...prev, ...tvStands] )
          })
          onSnapshot(bedFrameRef, (snap) => {
            snap.docs.forEach(bedFrame => {
              bedFrames.push({ ...bedFrame.data(), isSaved: false, amt: 0 })
            })
            setProducts( prev => [...prev, ...bedFrames] )
          })
          onSnapshot(chandelierRef, (snap) => {
            snap.docs.forEach(chandelier => {
              chandeliers.push({ ...chandelier.data(), isSaved: false, amt: 0 })
            })
            setProducts(prev => [...prev, ...chandeliers])
          })
        } catch (error) {
          console.log(error)
        }
      } 
      
      fetchData()
    }
    return () => mounted = false
  }, [])

  useEffect(() => {
    const tempCart = JSON.parse(localStorage.getItem('cartItems'))
    const tempSaved = JSON.parse(localStorage.getItem('saved'))
    tempCart && cartItems.splice(0, cartItems.length, ...tempCart)
    tempSaved && saved.splice(0, saved.length, ...tempSaved)
  }, [])
  


  const saveFunction = (id) => {
    let newSave = products.find(item => item.id === id)
    const productIndex = products.indexOf(newSave)
    const cartItem = cartItems.find(item => item.id === id)
    const cartIndex = cartItems.indexOf(cartItem)

    const condition = saved?.every(save => save.id !== id)
    if (condition) {
      newSave = { ...newSave, isSaved: true }
      setSaved( saved => [...saved, newSave] )
      
      cartIndex >= 0 ? cartItems[cartIndex] = newSave : cartItems[cartIndex] = newSave
      products[productIndex] = newSave
    } else {
      newSave = { ...newSave, isSaved: false }
      setSaved( prevSaved => prevSaved.filter(save => save.id !== id))

      cartIndex >= 0 ? cartItems[cartIndex] = newSave : cartItems[cartIndex] = newSave
      products[productIndex] = newSave
    }
    
    cartIndex >= 0 && localStorage.setItem('cartItems', JSON.stringify(cartItems))
    localStorage.setItem( 'newProducts', JSON.stringify(products) )
  }
  useEffect(() => {
    if (initialRenderII.current) {
      initialRenderII.current = false;
    } else {
      localStorage.setItem('saved', JSON.stringify(saved))
    }
  }, [saved]);
  

  const [sig, setSig] = useState(0)
  const increaseCart = (id) => {
    let selected = products.find(product => product.id === id)
    const cartItem = cartItems.find(item => item.id === id)
    const savedItem = saved.find(item => item.id === id)
    
    const productIndex = products.indexOf(selected)
    const savedIndex = saved.indexOf(savedItem)
    const cartIndex = cartItems.indexOf(cartItem)

    const condition = cartItems.every(item => item.id !== id)
    if (condition) {
      selected = { ...selected, amt: selected.amt + 1 }
      setCartItems(cartItems => [...cartItems, selected])

      savedIndex >= 0 ? saved[savedIndex] = selected : saved[savedIndex] = selected
      products[productIndex] = selected
      
    } else {
      
      selected = { ...selected, amt: selected.amt + 1 }
      cartItems[cartIndex] = selected

      savedIndex >= 0 ? saved[savedIndex] = selected : saved[savedIndex] = selected
      products[productIndex] = selected
    }
    setSig(selected.amt)
    savedIndex >= 0 && localStorage.setItem('saved', JSON.stringify(saved))
    localStorage.setItem( 'newProducts', JSON.stringify(products) )
    
  }

  const decreaseCart = (id) => {
    let selected = products.find(product => product.id === id)
    const cartItem = cartItems.find(item => item.id === id)
    const savedItem = saved.find(item => item.id === id)
    
    const productIndex = products.indexOf(selected)
    const savedIndex = saved.indexOf(savedItem)
    const cartIndex = cartItems.indexOf(cartItem)

    console.log(cartItems)
    console.log(selected.id)
    if (selected.amt > 0) {
      console.log(selected.amt)
      selected = { ...selected, amt: selected.amt - 1 }
      if (selected.amt < 1) {
        setCartItems(cartItems.filter(item => item.id !== id))
      }
    } else return


    cartItems[cartIndex] = selected
    setSig(selected.amt)
    savedIndex > 0 ? saved[savedIndex] = selected : saved[savedIndex] = selected
    products[productIndex] = selected
    savedIndex >= 0 && localStorage.setItem('saved', JSON.stringify(saved))
    localStorage.setItem( 'newProducts', JSON.stringify(products) )
  }
  useEffect(() => {
    if (initialRenderIII.current) {
      initialRenderIII.current = false;
    } else {
      setCartAdded(!cartAdded)
    }
  }, [sig]);
  
  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }
  }, [cartAdded]);

  const openModal = (id) => {
    const modalProduct = products.find(product => {
      return product.id === id
    })
    setModal(() => modalProduct)
    setShowModal(true)
  }

  useEffect(() => {
    const toTop = document.querySelector('.to-top-btn')
    function nav() {
      window.scrollTo({
        top: 0,
      })
    }
    toTop?.addEventListener('click', nav )

    const interval = setInterval(() => {
      toTop?.classList.toggle('active')
    }, 650)

    function show() {
      if (window.pageYOffset > 150) {
        toTop?.classList.add('show-to-top')
      } else {
        toTop?.classList.remove('show-to-top')
      }
    }

    window.addEventListener('scroll', show)
    
    return () => {
      clearInterval(interval)
      window.removeEventListener('scroll', show)
      toTop?.removeEventListener('click', nav)
    }
  }, [] )

  

  if (products.length !== 0) {
    return (
      <productsContext.Provider value={{
        openModal, showModal, setShowModal, modal, setModal, saved, setSaved, chairs, tables, curtains, chandeliers, outerDoors, innerDoors, dinings, bedFrames, tvStands, kitchenCabinets, wardrobes, wallArts, products, increaseCart, decreaseCart, cartItems, saveFunction, saveRef, amt
      }}>
        <div className='App'>
          <Header showNav={showNav} setShowNav={setShowNav} />
          <Nav showNav={showNav} setShowNav={setShowNav}/>
          <ItemModal />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route exact path='/allproducts' element={<AllProducts loading={loading} />} />
            <Route exact path='/cart' element={ <Cart /> } />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/products' element={<Products />} />
            <Route exact path='/saved' element={<Saved /> } />
            <Route path='/products/:categoryName' element={<CategoryPage />} />



            <Route path='/allproducts/:itemId' element={<ItemView />} />
            <Route path='/allproducts/:itemId/:itemId' element={<ItemView />} />
            <Route path='/allproducts/:itemId/:itemId/:itemId' element={<ItemView />} />
            <Route path='/allproducts/:itemId/:itemId/:itemId/:itemId' element={<ItemView />} />
            <Route path='/allproducts/:itemId/:itemId/:itemId/:itemId/:itemId' element={<ItemView />} />
            <Route path='/allproducts/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId' element={<ItemView />} />
            <Route path='/allproducts/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId' element={<ItemView />} />
            <Route path='/allproducts/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId' element={<ItemView />} />
            <Route path='/allproducts/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId' element={<ItemView />} />
            <Route path='/allproducts/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId' element={<ItemView />} />
            <Route path='/allproducts/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId' element={<ItemView />} />
            <Route path='/allproducts/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId' element={<ItemView />} />
            <Route path='/allproducts/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId' element={<ItemView />} />
            <Route path='/allproducts/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId' element={<ItemView />} />
            <Route path='/allproducts/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId' element={<ItemView />} />
            <Route path='/allproducts/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId' element={<ItemView />} />
            <Route path='/allproducts/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId' element={<ItemView />} />
            <Route path='/allproducts/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId' element={<ItemView />} />
            <Route path='/allproducts/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId' element={<ItemView />} />
            <Route path='/allproducts/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId' element={<ItemView />} />
            <Route path='/allproducts/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId' element={<ItemView />} />
            <Route path='/allproducts/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId' element={<ItemView />} />
            <Route path='/allproducts/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId' element={<ItemView />} />

            <Route path='/products/:categoryName/:itemId' element={<ItemView />} />
            <Route path='/products/:categoryName/:itemId/:itemId' element={<ItemView />} />
            <Route path='/products/:categoryName/:itemId/:itemId/:itemId' element={<ItemView />} />
            <Route path='/products/:categoryName/:itemId/:itemId/:itemId/:itemId' element={<ItemView />} />
            <Route path='/products/:categoryName/:itemId/:itemId/:itemId/:itemId/:itemId' element={<ItemView />} />
            <Route path='/products/:categoryName/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId' element={<ItemView />} />
            <Route path='/products/:categoryName/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId' element={<ItemView />} />
            <Route path='/products/:categoryName/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId' element={<ItemView />} />
            <Route path='/products/:categoryName/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId' element={<ItemView />} />
            <Route path='/products/:categoryName/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId' element={<ItemView />} />
            <Route path='/products/:categoryName/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId' element={<ItemView />} />
            <Route path='/products/:categoryName/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId' element={<ItemView />} />
            <Route path='/products/:categoryName/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId' element={<ItemView />} />
            <Route path='/products/:categoryName/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId' element={<ItemView />} />
            <Route path='/products/:categoryName/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId' element={<ItemView />} />
            <Route path='/products/:categoryName/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId' element={<ItemView />} />
            <Route path='/products/:categoryName/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId' element={<ItemView />} />
            <Route path='/products/:categoryName/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId' element={<ItemView />} />
            <Route path='/products/:categoryName/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId' element={<ItemView />} />
            <Route path='/products/:categoryName/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId' element={<ItemView />} />
            <Route path='/products/:categoryName/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId' element={<ItemView />} />
            <Route path='/products/:categoryName/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId' element={<ItemView />} />
            <Route path='/products/:categoryName/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId' element={<ItemView />} />


            <Route path='/saved/:itemId' element={<ItemView />} />
            <Route path='/saved/:itemId/:itemId' element={<ItemView />} />
            <Route path='/saved/:itemId/:itemId/:itemId' element={<ItemView />} />
            <Route path='/saved/:itemId/:itemId/:itemId/:itemId' element={<ItemView />} />
            <Route path='/saved/:itemId/:itemId/:itemId/:itemId/:itemId' element={<ItemView />} />
            <Route path='/saved/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId' element={<ItemView />} />
            <Route path='/saved/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId' element={<ItemView />} />
            <Route path='/saved/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId' element={<ItemView />} />
            <Route path='/saved/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId' element={<ItemView />} />
            <Route path='/saved/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId' element={<ItemView />} />
            <Route path='/saved/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId' element={<ItemView />} />
            <Route path='/saved/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId' element={<ItemView />} />
            <Route path='/saved/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId' element={<ItemView />} />
            <Route path='/saved/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId' element={<ItemView />} />
            <Route path='/saved/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId' element={<ItemView />} />
            <Route path='/saved/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId' element={<ItemView />} />
            <Route path='/saved/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId' element={<ItemView />} />
            <Route path='/saved/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId' element={<ItemView />} />
            <Route path='/saved/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId' element={<ItemView />} />
            <Route path='/saved/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId' element={<ItemView />} />
            <Route path='/saved/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId' element={<ItemView />} />
            <Route path='/saved/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId' element={<ItemView />} />
            <Route path='/saved/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId/:itemId' element={<ItemView />} />

            <Route path='*' element={<Lostpage />} />
          </Routes>
          <button className='to-top-btn'>
            <FaAngleUp />
          </button>
        </div>
      </productsContext.Provider>
    )
  }
}

export default App
import React, { useContext, useEffect, useState } from 'react'
import { productsContext } from '../App'
import {FaTimes} from 'react-icons/fa'

const ItemModal = () => {
  const { modal, showModal, setShowModal } = useContext(productsContext)

  useEffect(() => {
    let mounted = true
    if (mounted) {
      const main = document.querySelector('.item-modal-main')
      const remove = document.querySelector('.modal-remove')
      const imgDiv = document.querySelector('.item-modal-div')
      const img = document.querySelector('.modal-img')
      const imgHeight = img?.getBoundingClientRect().height
      const imgWidth = img?.getBoundingClientRect().width

      remove?.addEventListener('click', function (e) {
        main.classList.remove('show-item-modal')
        imgDiv.style.height = `${imgHeight}px`
        imgDiv.style.width = `${imgWidth}px`
        setShowModal(false)
      })
    }
    return () => mounted = false
  }, [modal] )

  

  if (modal !== undefined) {
    return (
      <main className={ showModal ? 'show-item-modal item-modal-main' : 'item-modal-main'}>
        <div>
          <FaTimes className='modal-remove'/>
        </div>
        <div className='item-modal-div' id='modal-content'>
          <img src={modal.imgUrl} alt="" className='modal-img'/>
        </div>
      </main>
    )
  }
}

export default ItemModal
import React from 'react'
import './mobileList.css'

const MobileList = () => {
  return (
    <div>
         <div className='mobile-main'>
        <img className='mobile-img' src='https://m.media-amazon.com/images/I/81oKOk65TgL._AC_UY218_.jpg'/>
        <div>
        <h2>Samsung Mobile</h2>
        <p className='price'>Price 15000</p>
        <button>Add to cart</button>
        </div>
    </div>
    </div>
  )
}

export default MobileList
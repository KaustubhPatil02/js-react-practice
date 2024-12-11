import React from 'react'
import MobileList from './MobileList'

const Mobile = () => {

    const addToCart = ()=>{
        alert('Added to cart')
    }

    const mobileData = {
        name: 'Samsung Mobile',
        price: 15000,
        imageUrl: 'https://m.media-amazon.com/images/I/81oKOk65TgL._AC_UY218_.jpg',
      };

    return (
        <>
        <MobileList {...mobileData} handleSubmit={addToCart}/>
        <MobileList />
        <MobileList />
        <MobileList />
        
      </>
    );
}

export default Mobile;

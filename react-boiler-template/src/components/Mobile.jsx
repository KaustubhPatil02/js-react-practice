import React from 'react'
import MobileList from './MobileList'

const Mobile = () => {

    const addToCart = () => {
        alert('Added to cart')
    }

    const mobileData = {
        name: 'Samsung Mobile',
        price: 15000,
        imageUrl: 'https://m.media-amazon.com/images/I/81oKOk65TgL._AC_UY218_.jpg',
    };

    const mobileData2 = {
        name: 'Apple Mobile',
        price: 150000,
        imageUrl: 'https://m.media-amazon.com/images/I/61VuVU94RnL._AC_UY218_.jpg',
    };

    return (
        <>
            <MobileList {...mobileData} handleSubmit={addToCart} />
            {/* individual props passing:
            name={mobileData.name} price={mobileData.price} imageUrl={mobileData.imageUrl} handleSubmit={addToCart}
        */}
            <MobileList  {...mobileData2} handleSubmit={addToCart} />
            <MobileList />
            <MobileList />

        </>
    );
}

export default Mobile;

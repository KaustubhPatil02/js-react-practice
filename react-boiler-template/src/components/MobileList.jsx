import React from 'react'
import './mobileList.css'

const MobileList = (props) => {
    
    return (
        <div>
        <div className='mobile-main'>
            {console.log(props)}
       <img className='mobile-img' src={props.imageUrl}/>
       <div>
       <h2>{props.name}</h2>
       <p className='price'>{props.price}</p>
       <button onClick={props.handleSubmit} >Add to Cart</button>
       </div>
   </div>
   </div>
    );
}

export default MobileList;


import React from 'react'
import "../styles/FoodItem.css"

const FoodItem = ({item_name,unit_price,onAddCart}) => {

    

    
  return (
    <div className='food-item'>
        <div className='food-details'>
            
            <p>Name:{item_name}</p>
            <p>Price:R{unit_price}</p>
        </div>

        <button onClick={onAddCart}>Add To Cart</button>


    </div>
  )
}

export default FoodItem
import React, { useEffect, useState } from 'react'
import FoodItem from "../pages/FoodItem"
import axios from "axios";
const Items = () => {

    const [items,setitems]=useState([])

    useEffect(()=>{
        

        fetch();

    },[])

    const fetch=async()=>{
        try{
            const res= await axios.get("http://localhost:3001/items");
            setitems(res.data);
        }catch(error){
            console.error("Error fetching items",error)
        }
    };

  return (

    <div>
        <h1>Food Items</h1>
        {
            items.map((item)=>(
                <FoodItem
                key={item.id}
                name={item.item_name}
                price={item.unit_price}
                />
            ))
        }


    </div>

   
  )
}

export default Items
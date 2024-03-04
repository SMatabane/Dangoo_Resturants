import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddItems() {
  let navigate = useNavigate();

  
  const [item_name, setname]= useState('');
    const [unit_price, setprice]= useState('');
    const [available_stock, setstock]= useState('');
   

    


    async function onSubmit(event) {
      event.preventDefault();

      try{

        
        const response=await axios.post("http://localhost:3001/items",{
                item_name:item_name,
                unit_price:unit_price,
                available_stock:available_stock,
                

        });

        console.log('Item added',response.data.message);
        alert("Item Created successuflly");
          navigate("/menus");

      }
      catch(err){
          if(err.response){
            alert(err.response.data.message);
          }else if(err.request){
            alert("No response recieved")
          }else{
            alert("error sending request")
          }
          console.error("Couldnt add item")
         
      }


      
    };

  

  

  

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Create new Item</h2>

          <form >
            <div className="mb-3">
              <label htmlFor="Name"  className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter item  name"
                name="name"
                value={item_name}
                onChange={(e) => setname(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Price"  className="form-label">
                Price
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter price Item"
                name="price"
                value={unit_price}
                onChange={(e) => setprice(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Stock" className="form-label">
                Avaiable Stock
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter available stcock"
                name="stock"
                value={available_stock}
                onChange={(e) => setstock(e.target.value)}
              />
            </div>

            
            <button type="submit" className="btn btn-outline-primary" onClick={onSubmit}>
              Submit
            </button>
           
          </form>
        </div>
      </div>
    </div>
  );
}
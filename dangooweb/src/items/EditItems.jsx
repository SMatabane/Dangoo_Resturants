import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditItems() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [item, setItem] = useState({
    item_name: "",
    unit_price: 0,
    available_stock: 0,
  });

  const { item_name, unit_price, available_stock } = item;

  const onInputChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  useEffect(() => {
  loadItem();
}, []);






const onSubmit = async () => {
  
  try{
    const response= await axios.patch(`http://localhost:3001/items/${id}/update`,item);

    console.log('Item updated',response.data.message);
      alert("Item updated successuflly");
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
      console.error("Couldnt update item")
     
  }

  }

  const loadItem = async () => {
    const result = await axios.get(`http://localhost:3001/items/${id}`);
    setItem(result.data);
  };
 



  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Item</h2>

          <form >

          <div className="mb-3">
              <label htmlFor="Name"  className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter item  name"
                name="item_name"
                value={item_name}
                onChange={(e) => onInputChange(e)}
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
                name="unit_price"
                value={unit_price}
                onChange= {(e) => onInputChange(e)}
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
                name="available_stock"
                value={available_stock}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" onClick={onSubmit} className="btn btn-outline-primary">
              Submit
            </button>
            
          </form>
        </div>
      </div>
      </div>
   
   
  );
  };
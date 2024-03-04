import React,{ useEffect, useState } from 'react'
import axios from "axios";
import '../styles/button.css'; 
import { Link, useParams } from "react-router-dom";
const Menus = () => {

  const [items, setItems] = useState([]);
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    const result = await axios.get("http://localhost:3001/items");
    setItems(result.data);
  };

  const deleteItem = async (id) => {
    await axios.delete(`http://localhost:3001/items/${id}/delete`);
    loadItems();
  };



  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
        
          <thead>
            <tr>
              <th scope="col">S.N</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Available Stock</th>
              <th scope="col">Amount Puchased</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{item.item_name}</td>
                <td>{item.unit_price}</td>
                <td>{item.available_stock}</td>
                <td>{item.amount_purchased}</td>

                <td>
                  <Link
                    className="btn btn-primary "
                    to={`/viewitems/${item.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary "
                    to={`/edititems/${item.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger "
                    
                    onClick={() => deleteItem(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <button type="submit" className="btn btn-outline-primary"><Link to="/additems" className="nav-link">Create Item</Link></button>
      </div>
    </div>
  )
}

export default Menus
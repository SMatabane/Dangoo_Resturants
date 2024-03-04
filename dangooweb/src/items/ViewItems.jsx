import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";


export default function ViewItems() {

    const { id } = useParams();
    const [item, setItem] = useState({
      item_name: "",
      unit_price: 0,
      available_stock: 0,
      });

  

  useEffect(() => {
    loadItem();
  }, []);

  const loadItem = async () => {
    const result = await axios.get(`http://localhost:3001/items/${id}`);
    setItem(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Item Details</h2>

          <div className="card">
            <div className="card-header">
              Details of item id : {item.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name:</b>
                  {item.item_name}
                </li>
                <li className="list-group-item">
                  <b>Price:</b>
                  {item.unit_price}
                </li>
                <li className="list-group-item">
                  <b>Avaiable stock:</b>
                  {item.available_stock}
                </li>
                <li className="list-group-item">
                  <b>Amount Purchased:</b>
                  {item.amount_purchased}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/menus"}>
            Back to Menus
          </Link>
        </div>
      </div>
    </div>
  );
}
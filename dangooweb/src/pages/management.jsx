import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function Management() {

    const [items, setItems] = useState([]);

    const { id } = useParams();
  
    useEffect(() => {
      loadItems();
    }, []);
  
    const loadItems = async () => {
      const result = await axios.get("http://localhost:8080/items");
      setItems(result.data);
    };
  
    const deleteItem = async (id) => {
      await axios.delete(`http://localhost:8080/item/${id}`);
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
                <th scope="col">Description</th>
                <th scope="col">Price</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr>
                  <th scope="row" key={index}>
                    {index + 1}
                  </th>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.price}</td>
                  <td>
                    <Link
                      className="btn btn-primary mx-2"
                      to={`/viewitems/${item.id}`}
                    >
                      View
                    </Link>
                    <Link
                      className="btn btn-outline-primary mx-2"
                      to={`/edititems/${item.id}`}
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-danger mx-2"
                      onClick={() => deleteItem(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
  
  
  
  
  
  );
    
}

export default Management;

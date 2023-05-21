import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link,useHistory } from "react-router-dom";

const Aplane = () => {
  const [aplane, setaplane] = useState([]);
  let history = useHistory();
  useEffect(() => {
    axios.get("http://localhost:8800/aplane").then((response) => {
       setaplane(response.data);
       console.log(aplane);
    });
 }, []);  

  console.log(aplane);

  const handleDelete = async (id) => {
    console.log(id);
    try { 
      await axios.delete(`http://localhost:8800/aplane/${id}`);
      history.push("/admin/plane");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
       <div className="headc"> 
      <h1>plane Database</h1>
      </div>
      <div className="aplane">
        {aplane.map((value,key) => (
          <div key={value.pid} className="book">
            <h2>{value.ptype}</h2>
            <p>{value.start}</p>
            <p>{value.end}</p>
            <p>{value.price}</p>
            <button className="btn btn-danger" onClick={() => handleDelete(value.pid)}>Delete</button>
          </div>
        ))}
      </div>

      <button className="addbutton">
        <Link className="addbutton" to="/admin/plane/add">
          Add new plane
        </Link>
      </button>
    </div>
  );
};

export default Aplane;
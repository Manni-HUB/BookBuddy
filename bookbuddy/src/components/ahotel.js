import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link,useHistory } from "react-router-dom";

const Ahotel = () => {
  const [ahotel, setahotel] = useState([]);
  let history = useHistory();
  useEffect(() => {
    axios.get("http://localhost:8800/ahotel").then((response) => {
       setahotel(response.data);
       console.log(ahotel);
    });
 }, []);  

  console.log(ahotel);

  const handleDelete = async (id) => {
    console.log(id);
    try { 
      await axios.delete(`http://localhost:8800/ahotel/${id}`);
      history.push("/admin/hotel");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
       <div className="headc"> 
      <h1>Hotel Database</h1>
      </div>
      <div className="ahotel">
        {ahotel.map((value,key) => (
          <div key={value.hid} className="book">
            <h2>{value.hname}</h2>
            <p>{value.hcity}</p>
            <p>{value.htype}</p>
            <button className="btn btn-danger" onClick={() => handleDelete(value.hid)}>Delete</button>
          </div>
        ))}
      </div>

      <button className="addbutton">
        <Link className="addbutton" to="/admin/hotel/add">
          Add new Hotel
        </Link>
      </button>
    </div>
  );
};

export default Ahotel;
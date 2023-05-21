import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link,useHistory } from "react-router-dom";

const Auser = () => {
  const [auser, setauser] = useState([]);
  let history = useHistory();
  useEffect(() => {
    axios.get("http://localhost:8800/ausers").then((response) => {
       setauser(response.data);
       console.log(auser);
    });
 }, []);  

  console.log(auser);

  const handleDelete = async (id) => {
    console.log(id);
    try { 
      await axios.delete(`http://localhost:8800/ausers/${id}`);
      history.push("/admin/user");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="headc">
      <h1>User Database</h1>
      </div>
      <div className="auser">
        {auser.map((value,key) => (
          <div key={value.idusers} className="book">
            <h2>{value.fname} {value.lname}</h2>
            <p>{value.email}</p>
            <button className="btn btn-danger" onClick={() => handleDelete(value.idusers)}>Delete</button>
          </div>
        ))}
      </div>

      <button className="btn btn-danger">
        <Link to="/admin/user/add" style={{ color: "inherit", textDecoration: "none" }}>
          Add new User
        </Link>
      </button>
    </div>
  );
};

export default Auser;
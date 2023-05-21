import axios from "axios";
import React from "react";
import { useState } from "react";
import postForm from "./postForm";
import { Link, useHistory } from "react-router-dom";

const Addp = () => {
    

    const [ptype,setptypeReg] = useState('')
    const [start,setstartReg] = useState('')
    const [end,setendReg] = useState('')
    const [price,setpriceReg] = useState('')
  const [error,setError] = useState(false)

  const history = useHistory();


  const handleClick = async (e) => {
    postForm("http://localhost:8800/aroom/add",{ptype,start,end,price}).then((data) => {console.log(data);});
  };

  return (
    <div className="form2">
      <h1>Add New Plane</h1>
      <div className="huz">

      <input
        type="text"
        placeholder="Plane Type "
        name="title"
        onChange={(e)=>{
            setptypeReg(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Departure City "
        name="desc"
        onChange={(e)=>{
            setstartReg(e.target.value);
        }}
      />
      <input
        type="end"
        placeholder="Arrival type "
        name="price"
        onChange={(e)=>{
            setendReg(e.target.value);
        }}
      />
      <input
        type="end"
        placeholder="Price : "
        name="price"
        onChange={(e)=>{
            setendReg(e.target.value);
        }}
      />
      <button onClick={handleClick}>Add</button>
      {error && "Something went wrong!"}
      <Link className="see" to="/admin/plane">See all planes</Link>
    </div>
    </div>
  );
};

export default Addp;
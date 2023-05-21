import axios from "axios";
import React from "react";
import { useState } from "react";
import postForm from "./postForm";
import { Link, useHistory } from "react-router-dom";

const Addh = () => {
    

    const [hname,sethnameReg] = useState('')
    const [hcity,sethcityReg] = useState('')
    const [htype,sethtypeReg] = useState('')
  const [error,setError] = useState(false)

  const history = useHistory();


  const handleClick = async (e) => {
    postForm("http://localhost:8800/ahotel/add",{hname,hcity,htype}).then((data) => {console.log(data);});
  };

  return (
    <div className="form2">
      <h1>Add New Hotel</h1>
      <div className="huz">

      <input
        type="text"
        placeholder="Hotel Name "
        name="title"
        onChange={(e)=>{
            sethnameReg(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Hotel City "
        name="desc"
        onChange={(e)=>{
            sethcityReg(e.target.value);
        }}
      />
      <input
        type="htype"
        placeholder="hotel type "
        name="price"
        onChange={(e)=>{
            sethtypeReg(e.target.value);
        }}
      />
      <button onClick={handleClick}>Add</button>
      {error && "Something went wrong!"}
      <Link className="see" to="/admin/hotel">See all hotels</Link>
    </div>
    </div>
  );
};

export default Addh;
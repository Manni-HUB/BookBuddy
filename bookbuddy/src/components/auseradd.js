import axios from "axios";
import React from "react";
import { useState } from "react";
import postForm from "./postForm";
import { Link, useHistory } from "react-router-dom";

const Add = () => {
    

    const [fname,setFnameReg] = useState('')
    const [lname,setLnameReg] = useState('')
    const [email,setEmailReg] = useState('')
  const [error,setError] = useState(false)

  const history = useHistory();


  const handleClick = async (e) => {
    postForm("http://localhost:8800/ausers/add",{fname,lname,email}).then((data) => {console.log(data);});
  };

  return (
    <div className="form2">
      <h1>Add New user</h1>
      <input
        type="text"
        placeholder="user first name"
        name="title"
        onChange={(e)=>{
            setFnameReg(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="user last name"
        name="desc"
        onChange={(e)=>{
            setLnameReg(e.target.value);
        }}
      />
      <input
        type="email"
        placeholder="user email"
        name="price"
        onChange={(e)=>{
            setEmailReg(e.target.value);
        }}
      />
      <button onClick={handleClick}>Add</button>
      {error && "Something went wrong!"}
      <Link to="/admin/user">See all users</Link>
    </div>
  );
};

export default Add;
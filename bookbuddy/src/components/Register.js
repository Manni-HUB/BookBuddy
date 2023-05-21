import React from 'react'
import { useState } from 'react';
import Axios from 'axios'
import postForm from './postForm';
import {useHistory} from 'react-router-dom'

export default function Register({error}) {
    let history = useHistory();
    const [fname,setFnameReg] = useState('')
    const [lname,setLnameReg] = useState('')
    const [email,setEmailReg] = useState('')
    const [password,setPasswordReg] = useState('')
    
    // const registeruser = () => {
    //     Axios.post("http://localhost:8800/users", {
    //         fname: fnameReg,
    //         lname: lnameReg,
    //         email: emailReg,
    //         password: passwordReg,
    //     }).then((response) => {
    //         console.log(response);
    //     });
    // };
    const registeruser = () => {
        postForm("http://localhost:8800/users",{fname,lname,email,password}).then((data) => {console.log(data);});
        history.push('/Login');
    }




  return (
<form className= "form" onSubmit={registeruser}>
        <div className = "form-inner" >
            <h2>Register</h2>
            {(error != "") ? (<div className="error">{error}</div>) : ""}
            <div className="form-group">
                <label htmlFor="name">First Name: </label>
                <input type="text" name="name" id="name" onChange={(e) => {
                    setFnameReg(e.target.value);
                }}/> 
            </div>
            <div className="form-group">
                <label htmlFor="name">Last Name: </label>
                <input type="text" name="name" id="name"  onChange={(e) => {
                    setLnameReg(e.target.value);
                }}/> 
            </div>
            <div className="form-group">
                <label htmlFor="email">Email Address: </label>
                <input type="email" name="email" id="email"  onChange={(e) => {
                    setEmailReg(e.target.value);
                }}/> 
            </div>
            <div className="form-group">
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" onChange={(e) => {
                    setPasswordReg(e.target.value);
                }}/> 
            </div>
            <input type="submit" value="Register" />
        </div>

    </form>  )
}

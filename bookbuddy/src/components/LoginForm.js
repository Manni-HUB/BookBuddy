import React from 'react'
import { useState } from 'react';
import Axios from 'axios'
import Auth from './Auth';
import {useHistory} from 'react-router-dom'


function LoginForm(props) {
    let history = useHistory();
    
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [loggedin,setLoggedin] = useState('')
    const[username,setUsername] = useState('')
    const[error,setError] = useState('');
    const loginuser = (e) => {
        Axios.post("http://localhost:8800/login", {
            email: email,
            password: password,
        }).then((response) => {
            console.log(response);
            if(response.data.length>0){
                setLoggedin("Yes");
                setUsername(response.data[0].fname+" "+response.data[0].lname);
             //   setUsername(response.data.map((val,key) => {<div>{val.name}</div>}))
                 Auth.loginauth(response.data[0].idusers);
                 console.log(response.data[0].idusers);
                    if(Auth.isadmin()){
                        history.push("/admin")        
                    }else{
                setTimeout(()=>{history.push("/")},3000);
                    }
                props.checklog();
                 
            }else{
                setError("Incorrect Email or Password !")
            }
        });
        e.preventDefault();
    };
    const Logout = details => {
        setEmail("");
        setPassword("");
        setLoggedin("")
        console.log("logged out");
    }    

    const handlereg = () =>{
        history.push("/register");
    }

  return (
    <div className='login'>
        {(loggedin !== "") ? (
              <div className = "Welcome">
                <h2 id="come" value="ok">Welcome, <span>{username}</span></h2>
              </div>
            ) : (
    
    <form className= "form" onSubmit={loginuser}>
        <div className = "form-inner" >
            <h2>Login</h2>
            {(error != "") ? (<div className="error" id="error" value="notok">{error}</div>) : ""}
            <div className="form-group">
                <label htmlFor="email">Email Address: </label>
                <input type="email" name="email" id="email"onChange={(e) => {
                    setEmail(e.target.value);
                }}/> 
            </div>
            <div className="form-group">
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" onChange={(e) => {
                    setPassword(e.target.value);
                }}/> 
            </div>
            <input id="loginn"type="submit" value="Log In"/>
            <button onClick={handlereg}>Register?</button>
            
        </div>

    </form>
                )}            

    </div>
  )
}

export default LoginForm;
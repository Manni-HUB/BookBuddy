import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import EachHotel from './components/EachHotel';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Carousel from './components/Carousel';
import LoginForm from './components/LoginForm';
import './index.css';
import Hotel from './components/Hotel';
import Airline from './components/Airline';
import Register from './components/Register';
import Auth from './components/Auth';
import Ticket from './components/Ticket'
import { Footer } from './components/Footer';

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "123"    
}
const [user, setUser] = useState({
    name: "",
    email: ""
});
const [error,setError] = useState("");
const Login = details => {
    console.log(details);
    if (details.email === adminUser.email && details.password === adminUser.password){ 
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email
      });
    }else{
      console.log("details do not match"); 
      setError("Details Do Not Match try again");
    }
}    
  const [inlog, setInlog] = useState('Login');

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const checklog = () =>{
    if(Auth.isAuthenticated()){
      setInlog('Log Out');
    }
    else{
      setInlog('Login');
    }
  }
  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type 
      });
      setTimeout(()=>{
        setAlert(null);
      }, 2000);
  }
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = 'dimgrey';
      document.body.style.color='white';
      showAlert("Dark Mode has been enabled", "success");

    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color='black';
      showAlert("Light Mode has been enabled", "success");
    }
  }

  return (
    <>
    <Router>
    <Navbar title = "Book Buddy" about = "Our Story" logstate ={inlog} checklog={checklog} mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
      <Switch>
          <Route exact path="/Airline">
          <Airline/>
          </Route>
          <Route path="/Hotel" exact component={Hotel}>
          </Route>
          <Route path="/Hotel/:id" exact component={EachHotel}></Route>
          <Route path="/Ticket" exact component={Ticket}></Route>
          <Route exact path="/about">            
          <About></About>
           </Route>
           <Route exact path="/register">
           <div className='register'>
            <Register/>
            </div>
           </Route>
           <Route path="/login" exact component={LoginForm}>
              <LoginForm Login={Login} error={error} checklog={checklog}/>
           </Route>
          <Route exact path="/">
          <Carousel/>
          </Route>
      </Switch>
      <Footer/>
    </Router>
    </>

    );
}

export default App;
  
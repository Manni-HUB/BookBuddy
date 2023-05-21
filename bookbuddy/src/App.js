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
import Confirmed from './components/Confirmed';
import { Footer } from './components/Footer';
import Account from './components/Account';
import Ticket2 from './components/Ticket2';
import Ticket3 from './components/Ticket3';
import Event from './components/Event';
import E404 from './components/E404';
import admin from './components/admin';
import Auser from './components/auser';
import Ahotel from './components/ahotel';
import Add from './components/auseradd';
import Addh from './components/ahoteladd';
import Aplane from './components/aplane';
import Addp from './components/aplaneadd';
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
  const [inlog2, setInlog2] = useState('');

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const checklog = () =>{
    if(Auth.isAuthenticated()){

      setInlog('Log Out');
      setInlog2('Account');
    }
    else{
      setInlog('Login');
      setInlog2('');
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
    <Navbar title = "Book Buddy" about = "Our Story" logstate ={inlog} logstate2 ={inlog2} checklog={checklog} mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
      <Switch>
          <Route exact path='/account/byid/:idusers' component={Account}></Route>
          <Route path="/Airline" exact component={Airline}>
          </Route>
          <Route path="/Hotel" exact component={Hotel}>
          </Route>
          <Route path="/Event" exact component={Event}>
          </Route>
          <Route path="/admin" exact component={admin}/>
          <Route path="/admin/user" exact component={Auser}/>
          <Route path="/admin/user/add" exact component={Add}/>
          <Route path="/admin/hotel" exact component={Ahotel}/>
          <Route path="/admin/hotel/add" exact component={Addh}/>
          <Route path="/admin/plane" exact component={Aplane}/>
          <Route path="/admin/plane/add" exact component={Addp}/>
          
          <Route path="/Hotel/:id" exact component={EachHotel}></Route>
          <Route path="/Ticket/h:hid/:id" exact component={Ticket}></Route>
          <Route path="/Ticket2/:pid" exact component={Ticket2}></Route>
          <Route path="/Ticket3/:eid" exact component={Ticket3}></Route>
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
           <Route path="/confirmed" exact component={Confirmed}></Route>
          <Route exact path="/">
          <Carousel/>
          </Route>
          <Route path="*" component={E404}/>
      </Switch>
    <Footer/>
    </Router>
    </>

    );
}

export default App;
  
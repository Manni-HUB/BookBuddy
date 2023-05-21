import React,{useState} from 'react'
import PropTypes from 'prop-types'
import {Link, useHistory} from 'react-router-dom' 
import Auth from './Auth'

export default function Navbar(props) {
  const [val,setVal] = useState('');
  let history = useHistory();

  const func1 =() => {
    Auth.logoutauth();
    props.checklog();

  }

  const f2 = async () =>{
   history.push(`/account/byid/${Auth.getid()}`);
  }


  return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-light`}>
    <Link className="navbar-brand" to="/"><img src="https://www.freeiconspng.com/thumbs/hd-tickets/black-and-white-blank-ticket-17.png" width="60" alt="..."/>BOOK BUDDY</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.about}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login" onClick={func1}>{props.logstate}</Link>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={f2}>{props.logstate2}</button>
        </li>
      </ul>
      
      <form className="form-inline my-auto">
            <div className="custom-control custom-switch text-light">
            <input type="checkbox" onClick={props.toggleMode} className="custom-control-input" id="customSwitch1"/>

            <label className="custom-control-label mx-2" for="customSwitch1" >Dark Mode</label>
        </div>
      </form>
    </div>
  </nav>
  )
}

Navbar.propTypes = {title: PropTypes.string,
                    about: PropTypes.string}
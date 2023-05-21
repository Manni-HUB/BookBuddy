import './acc.css'
import React,{useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import Auth from './Auth';

function Account() {
    const { idusers } = useParams();
     const [a, setA] = useState([]);
     let b = [ ];
     const [noreg, setnoreg] = useState(false);

    useEffect(() => {
      axios.get(`http://localhost:8800/account/byid/${idusers}`).then((response) => {
      b = response.data;
      setA(b);
      console.log(a);
      console.log(b);
      console.log(idusers);
      console.log(response);
      if(response.data.length>0){
        setnoreg = true;
      }          

      });

    }, [idusers]);


  return (
    
    <div className='wholeacc'>
      
        <div className="wrapper">
        
        <div className="left">
        <h4></h4>
         <p>{idusers}</p>
    </div>
    <div className="right">
        <div className="info">
        </div>
      
        <div className="projects">
            <h3>Registerations</h3>
          {noreg ? (
            <div className="data">
            <h4>No registrations</h4>
            </div>
          ) : (
            <div>
        {a.map((value, key) => (
            <div className="projects_data">
                 <div className="data">
                 <h4>Reg Number {value.resid}</h4>
                    <p>Hotel Bookings:  room : {value.rid}</p>
                   
                    <p>Plane Booking   flight: {value.pid}</p>
                    <p>Event Booking   event: {value.eid}</p>

              </div>
              
            </div>
            ))}
            </div>
            )}
        </div>

        <div className="social_media">
            <ul>
          </ul>
      </div>
    </div>
    
</div>

    </div>
  )
}

export default Account
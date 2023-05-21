import React,{useState, useEffect} from 'react'
import About from './About'
import AirlineBookingForm from './AirlineBookingForm'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import Auth from './Auth';




function Airline(){
    const [listofplanes,setlistofplanes] = useState([]);
    let history = useHistory()
 
    useEffect(() => {
       axios.get("http://localhost:8800/planes").then((response) => {
          setlistofplanes(response.data);
          console.log(listofplanes);
       });
    }, []);  
 
    return(
     <div className='inHotel'>
       {listofplanes.map((value, key) => {
       return( <div className="hotelitem" onClick= { () => {if(Auth.authenticated){
        history.push(`/Ticket2/${value.pid}`)  
      }
      else{
        history.push('/login')
      } } }> 
       <div className='title'>Plane No : {value.pid}</div> 
       <div className='body'>Plane Type : {value.ptype}</div> 
       <div className='body2'>Takeoff : {value.start}</div>
       <div className='footer'>Landing : {value.end}</div>  
       <div className='footer'>Price : {value.price}</div>  
       </div>)})}
     </div>
  )
 
   }

   export default Airline
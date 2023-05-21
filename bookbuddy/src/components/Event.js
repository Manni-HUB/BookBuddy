import React,{useState, useEffect} from 'react'
import About from './About'
import AirlineBookingForm from './AirlineBookingForm'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import Auth from './Auth';




function Event(){
    const [listofevents,setlistofevents] = useState([]);
    let history = useHistory()
 
    useEffect(() => {
       axios.get("http://localhost:8800/events").then((response) => {
          setlistofevents(response.data);
          console.log(listofevents);
       });
    }, []);  
 
    return(
     <div className='inHotel'>
       {listofevents.map((value, key) => {
       return( <div className="hotelitem" onClick= { () => {if(Auth.authenticated){
        history.push(`/Ticket3/${value.eid}`)  
      }
      else{
        history.push('/login')
      } } }> 
       <div className='title'>Event No : {value.eid}</div> 
       <div className='body'>Event Name : {value.ename}</div> 
       <div className='body2'>Event Type : {value.etype}</div>
       <div className='footer'>Event Price : {value.eprice}</div>  
       </div>)})}
     </div>
  )
 
   }

   export default Event
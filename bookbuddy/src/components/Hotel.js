import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import './hotelcss.css'
import {useHistory} from 'react-router-dom'
function Hotel(){
   const [listofhotels,setlistofhotels] = useState([]);
   let history = useHistory()

   useEffect(() => {
      axios.get("http://localhost:8800/hotel").then((response) => {
         setlistofhotels(response.data);
      });
   }, []);  

   return(
    <div className='inHotel'>
      {listofhotels.map((value, key) => {
      return( <div className="hotelitem" onClick={() => {history.push(`/Hotel/${value.hid}`)}}> 
      <div className='title'>Hotel No : {value.hid}</div> 
      <div className='body'>Hotel Name : {value.hname}</div> 
      <div className='body2'>Location : {value.hcity}</div>
      <div className='footer'>Type : {value.htype}</div>  
      </div>)})}
    </div>
 )

}

export default Hotel 
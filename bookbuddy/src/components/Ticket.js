import React from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import Auth from './Auth';
import postForm from './postForm';
import './TicketStyle.css'
function Ticket() {
  let history = useHistory();

  const { id } = useParams();
  const {hid} = useParams();
  const makeTickethotel = () => {
  postForm("http://localhost:8800/ticket/hotel",{ppid,id}).then((data) => {console.log(data);});
    
    
    axios.post("http://localhost:8800/ticket/room", {
       rid: id,
   }).then((response) => {
       console.log(response);
   });

    setTimeout(()=>{history.push("/confirmed")},1000);

}


    const ppid = Auth.getid();

  return (
    <div className='ticketworld'>
    <div className="ticket1">
      <div className="ticket2">Ticket for user {ppid} for room number {id} hotel {hid}</div>
      <button className="buttonTicket" onClick={makeTickethotel}>Confirm Ticket</button>
    </div>
    </div>


  )
}

export default Ticket
import React from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import Auth from './Auth';
import postForm from './postForm';
import './TicketStyle.css'
function Ticket3() {
  let history = useHistory();

  const { eid } = useParams();

  const makeTicketplane = () => {
  postForm("http://localhost:8800/ticket/event",{ppid,eid}).then((data) => {console.log(data);});
    
    
    setTimeout(()=>{history.push("/confirmed")},1000);

}


    const ppid = Auth.getid();

  return (
    <div className='ticketworld'>
    <div className="ticket1">
      <div className="ticket2">Ticket for user {ppid} for event number {eid}</div>
      <button className="buttonTicket" onClick={makeTicketplane}>Confirm Ticket</button>
    </div>
    </div>


  )
}

export default Ticket3
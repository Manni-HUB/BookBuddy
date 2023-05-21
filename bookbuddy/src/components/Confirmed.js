import React from 'react'
import {useHistory} from 'react-router-dom'


function Confirmed() {
    let history = useHistory();

  return (
    <div className="confirm">Confirmed
        <button className="button44" onClick={()=>{history.push("/")}}>Go Home</button>
    </div>
  )
}

export default Confirmed
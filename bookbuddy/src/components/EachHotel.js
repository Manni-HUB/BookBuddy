import React,{useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import Auth from './Auth';
import './eachhotel.css'


function EachHotel() {

    let { id } = useParams();
    const [roomObj,setRoomObj] = useState([]);
    const [filter,setFilter] = useState([]);
    const [query, setquery] = useState(0);
    const [query2, setquery2] = useState(0);

    let history = useHistory();

    useEffect(() => {
      axios.get(`http://localhost:8800/hotel/byID/${id}`).then((response) => {
        setRoomObj(response.data);
        setFilter(response.data);
        console.log(response);

      });


    }, [id]);

    const handlesearchbed=(event)=>{
      
      const getsearch = event.target.value;
      console.log(getsearch);
      setRoomObj(filter);
      if(getsearch > 0){
        console.log(roomObj);
        console.log(filter);
        const searchData = roomObj.filter( (item)=> item.bed >= getsearch);
        setRoomObj(searchData);
      } else {
        setRoomObj(filter);
      }
      setquery(getsearch);

    }
    const handlesearchprice=(event)=>{
      
      const getsearch = event.target.value;
      console.log(getsearch);
      setRoomObj(filter);
      if(getsearch > 0){
        console.log(roomObj);
        console.log(filter);
        const searchData = roomObj.filter( (item)=> item.price >= getsearch);
        setRoomObj(searchData);
      } else {
        setRoomObj(filter);
      }
      setquery2(getsearch);

    }
    const handlesearchtype = (event) => {
        const a = event.target.value;
        console.log(a);
        if(a === "All"){
          setRoomObj(filter);
        }
        else{
            const searchData = roomObj.filter( (item)=> item.rtype == a.toLowerCase());
            setRoomObj(searchData);          
        }
        // setTypes("luxury")
        
        // const searchData = roomObj.filter( (item)=> item.bed > getsearch);

    }


    
    // const handleRoom = () => {
    //   if(Auth.authenticated){
    //     history.push(`/Ticket/${value.rid}`);  
    //   }
    //   else{
    //     history.push('/login')
    //   }
      
    // }


    return (
      <div className='eachhotel1'>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
          <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Hotel NO {id}</label>
              <input placeholder="" type="text" />
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Minimum Beds <small></small>
                  </span>
                  
                  <input type="number" id="1" value={query} className="lsOptionInput" min="0" max="5"  onChange={(e) => handlesearchbed(e)} />

                  
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Price <small>for stay (min)</small>
                  </span>
                  <input type="number" value={query2} className="lsOptionInput" min="0" onChange={(e) => handlesearchprice(e)}/>
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Type <small>of room</small>
                  </span>
                  <select  name="" className="lsOptionInput" onChange={(e) => handlesearchtype(e)}>
                    <option>All</option>
                    <option>Normal</option>
                    <option>Luxury</option>
                  </select>
                  
                </div>
                </div>
              </div>
            <button >Search</button>
          </div>
            <div className='inRoom'>
          {roomObj.map((value, key) => {
             return( <div className="roomItem" onClick= { () => {if(Auth.authenticated){
              history.push(`/Ticket/h${id}/${value.rid}`)  
            }
            else{
              history.push('/login')
            } } }> 
                <div className='roomno'>Room No : {value.rid}</div>  
                <div className='type'>Room Type : {value.rtype}</div> 
                <div className='price'>Price For Stay : {value.price}</div> 
                <div className='bed'>No Of Beds : {value.bed}</div>
            </div>)})}
      </div>
      </div>
      </div>
      </div>

  )
}

export default EachHotel
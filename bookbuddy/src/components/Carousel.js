import React from 'react'
import {Link} from 'react-router-dom' 



function Carousel() {
  return (
    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://wallpaperaccess.com/full/254361.jpg" class="d-block w-100" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <h5>Book Your Holiday</h5>
          <p>
            Enjoy Air Travel With One Click Ticket And Avail The Cheapest Prices On The Market
          </p>
          <div className='slider-btn'>
          <Link className="slider-btn-hotel" to="/Airline">
               <button type="button" className="btn btn-outline-secondary">Book Now</button>
               </Link>
          </div>
        </div>        
      </div>
      <div class="carousel-item">
        <img src="https://images7.alphacoders.com/362/362619.jpg" class="d-block w-100" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <h5>Book Your<br></br> Hotel</h5>
          <p>Enjoy Your Dream Vacation Anywhere In The World By Booking The Hotel Of Your Dreams</p>
          <div className='slider-btn'>
          <Link className="slider-btn-hotel" to="/Hotel">
               <button type="button" className="btn btn-outline-secondary">Book Now</button>
          </Link>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29uY2VydHxlbnwwfHwwfHw%3D&w=1000&q=80" class="d-block w-100" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <h5>Book Your Concert</h5>
          <p>Enjoy The Music Raze At Some Of Your Favoutite Venues To Choose From No Matter Who Is Breaking Metal</p>
          <div className='slider-btn'>
            <Link className="slider-btn-hotel" to="/Event">
               <button type="button" className="btn btn-outline-secondary">Book Now</button>
               </Link>
          </div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </button>
  </div>


  )
}

export default Carousel
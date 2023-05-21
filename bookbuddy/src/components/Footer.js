import "./Footer.css"
import {Link, useHistory} from 'react-router-dom' 

export const Footer=()=>{
    return(
        <div>
            <div className="footer">
                <div className="footer-sub">
                    <div className="footer-Left">
                         <div>
                             <ul>
                                 <p>About BookBuddy</p>
                                 <li><a href="">About Us</a></li>
                                 <li><a href="">Contact Us</a></li>
                                 <li><a href="">Mobile Version</a></li>
                                 <li><a href="">BookBuddy on Mobile</a></li>
                                 <li><a href="">Sitemap</a></li>
                                 <li><a href="">Offers</a></li>
                                 <li><a href="">Careers</a></li>
                                 <li><a href="">Values</a></li>
                             </ul>
                         </div>
                         <div>
                             <ul>
                                 <p>About redBus</p>
                                 <li><a href="">T & C</a></li>
                                 <li><a href="">Privacy Policy</a></li>
                                 <li><a href="">FAQ</a></li>
                                 <li><a href="">Blog</a></li>
                                 <li><a href="">Insurance Partner</a></li>
                                 <li><a href="">User Agreement</a></li>
                             </ul>
                         </div>
                         <div>
                         </div>
                         <div>
                             <ul>
                                 <p>Our Partners</p>
                                 <li><a href="">Bookme.pk</a></li>
                                 <li><a href="">Booking.com</a></li>
                            
                            
                             </ul>
                         </div>
                         <div>
                             <ul>
                                 <p>Authorised Page</p>
                                 <li><Link to="/admin">Admin</Link></li>
                            
                            
                             </ul>
                         </div>
                    </div>
                    <div className="footer-Right">
                           <div>
                               <img className="num4" src="https://www.freeiconspng.com/thumbs/hd-tickets/black-and-white-blank-ticket-17.png" alt="logo" />
                           </div>
                           <div className="footer-right-details"></div>
                           <div>
                               
                                   <span ><img className="num1" src="https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg" alt="" /></span>
                               
                               
                                   <span  ><img className="num2" src="https://www.svgrepo.com/show/11841/twitter.svg" alt="" /></span>
                               
                           </div>
                           <div className="num3">
                               <span>Ⓒ</span>
                               <span>2022 BookBuddy All rights reserved</span>
                           </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
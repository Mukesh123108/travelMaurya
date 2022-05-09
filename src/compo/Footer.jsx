import React from "react";
import { NavLink } from "react-router-dom";
const Footer=()=>{
    return(
        <>
             <footer className=" ptb-80 bg-dark mt-5">
           <div className="container">
               <div className="row">
                  <div className="col-md-4">
                     <div className="footer-tb">
                        <h4>About Us</h4>
                        <p>Top Tour Operators and Travel Agency. We offering in total 793 tours and holidays throughout the world. Combined we have received 1532 customer reviews and an average rating of 5 out of 5 stars  1532 customer reviews and an average rating of 5 out of 5 stars  1532 customer reviews and an average rating of 5 out of 5 stars.</p>
                     </div>

                  </div>
                  <div className="col-md-1"></div>
                  <div className="col-md-3">
                     <div className="footer-tb">
                        <h4>Quick Link</h4>
                        <ul>
                           <li><NavLink to="/">Home</NavLink></li>
                           <li><NavLink to="/about">About Us</NavLink></li>
                           <li><NavLink to="/service">Service</NavLink></li>
                           <li><NavLink to="/blog">Blog</NavLink></li>
                           <li><NavLink to="/conatct">Contact</NavLink></li>
                        </ul>
                     </div>

                  </div>
                  <div className="col-md-4">
                     <div className="footer-tb">
                        <h4>Contact Us</h4>
                        <p><strong>Address: </strong> Nehru Nagar Naya Bajar Bharwari Kaushambi (UP)</p>
                        <p><strong>Phone No: </strong> 9450222938, 6386584511</p>
                        <p><strong>E-Mail: </strong> mukeshmaurya9460@gmail.com</p>
                     </div>

                  </div>
               </div>

           </div>
           
        </footer>
        <div className="container p-3">
               <div className="row">
                     <div className="col-md-12">
                     <p className="text-center m-0">
Copyright @ 2022 Maurya Travel Agency. Designed By
<a href="#" target="_blank"> Mukesh Kumar
</a>
</p>
                     </div>
               </div>
           </div>

        </>
    )
}
export default Footer
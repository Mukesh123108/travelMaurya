import React from "react";
import Bsdata from "./Bsdata";
import Cards from "./Cards";
import slider from "../img/s1.png";
import slider2 from "../img/s2.png";
import slider3 from "../img/s3.png";
import About from "../img/about.png";
import se from "../img/car.png";
import se2 from "../img/bus.png";
import se3 from "../img/rupee.png";
import ms1 from "../img/service-icon1.png";
import ms2 from "../img/service-icon2.png";
import ms3 from "../img/service-icon3.png";
import ms4 from "../img/service-icon4.png";
import ma1 from "../img/service1.png";
import ma2 from "../img/service2.png";
import ma3 from "../img/service3.png";
import ma4 from "../img/service6.png";
import blog from "../img/blog.jpg"
import blog1 from "../img/blog1.jpg";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
const Home =()=>{
return(
<>
<section>
   <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-inner">
         <div className="carousel-item active">
            <img src={slider} className="d-block w-100 "  alt="..." />
         </div>
         <div className="carousel-item">
            <img src={slider2} className="d-block w-100"   alt="..." />
         </div>
         <div className="carousel-item">
            <img src={slider3} className="d-block w-100"   alt="..." />
         </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
      </button>
   </div>
</section>
<section className="ptb-80 bg-light">
   <div className="container">
      <div className="row ">
         <div className="col-md-5">
            <div className="img">
               <img src={About}  alt="About" className="w-100"/>
            </div>
         </div>
         <div className="col-md-7">
            <div className="img-contnet ">
               <h1>Welcome to <br />
                  <span style={{color:"#fd3803"}}> Maurya Travel Agency</span>
               </h1>
               <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
               <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
               <NavLink to="/About" className="btn btn-danger">View More</NavLink>
            </div>
         </div>
      </div>
   </div>
</section>
<div className="our-awesome-services ptb-80 ">
   <div className="container">
      <div className="section-title text-center">
         <h2>Our Services</h2>
      </div>
      <div className="row align-items-center no-gutters service-bg-color mt-45">
         <div className="col-lg-7">
            <div className="tab-content" id="myTabContent">
               <div className="tab-pane fade show active" id="spa" role="tabpanel">
                  <div className="service-img img-fuul">
                     <img src={ma1} alt="" />
                  </div>
               </div>
               <div className="tab-pane fade" id="restaurent" role="tabpanel">
                  <div className="service-img img-fuul">
                     <img src={ma2} alt="" />
                  </div>
               </div>
               <div className="tab-pane fade" id="swimming" role="tabpanel">
                  <div className="service-img img-fuul">
                     <img src={ma3} alt="" />
                  </div>
               </div>
               <div className="tab-pane fade" id="conference" role="tabpanel">
                  <div className="service-img img-fuul">
                     <img src={ma4} alt="" />
                  </div>
               </div>
            </div>
         </div>
         <div className="col-lg-5 service-bg">
            <div className="service-menu-area">
               <ul className="nav">
                  <li>
                     <a className="active" data-bs-toggle="tab" href="#spa">
                     <span className="service-icon">
                     <img src={ms1} alt="" />
                     </span>
                     <span className="service-title">Spa, beauty & Health</span>
                     <span className="text"><span>Spa and beauty</span> luptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia </span>
                     </a>
                  </li>
                  <li>
                     <a className="" data-bs-toggle="tab" href="#restaurent">
                     <span className="service-icon">
                     <img src={ms2} alt="" />
                     </span>
                     <span className="service-title">Restaurant</span>
                     <span className="text"><span>Restaurant</span> lup provide grro tatem quia voluptas sit aspernatur aut odit aut fugit, sed quia  </span>
                     </a>
                  </li>
                  <li>
                     <a data-bs-toggle="tab" href="#swimming">
                     <span className="service-icon">
                     <img src={ms3} alt="" />
                     </span>
                     <span className="service-title">Swimming Pool</span>
                     <span className="text"><span>Swimming</span> pool luptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia </span>
                     </a>
                  </li>
                  <li>
                     <a data-bs-toggle="tab" href="#conference">
                     <span className="service-icon">
                     <img src={ms4} alt="" />
                     </span>
                     <span className="service-title">Conference Hall</span>
                     <span className="text"><span>Conference</span> luptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia </span>
                     </a>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   </div>
</div>
<section className="ptb-80 features-section bg-light">
   <div className="container">
      <div className="section-title text-center">
         <h2>Our Fetures</h2>
      </div>
      <div className="row pt-45">
         <div className="col-lg-4 col-md-6">
            <div className="item-single mb-30">
               <img src={se} alt="service"/>
               <h3>Car</h3>
               <p>As compared with earlier times where a reservation personnel has to update its inventory every time.</p>
               <div className="cta-btn">
                  <a href="#" className="btn btn-danger">Read More</a>
               </div>
            </div>
         </div>
         <div className="col-lg-4 col-md-6">
            <div className="item-single mb-30">
               <img src={se2} alt="service"/>
               <h3>Bus</h3>
               <p>As compared with earlier times where a reservation personnel has to update its inventory every time.</p>
               <div className="cta-btn">
                  <a href="#" className="btn btn-danger">Read More</a>
               </div>
            </div>
         </div>
         <div className="col-lg-4 col-md-6">
            <div className="item-single mb-30">
               <img src={se3} alt="service"/>
               <h3>Low Cost</h3>
               <p>As compared with earlier times where a reservation personnel has to update its inventory every time.</p>
               <div className="cta-btn">
                  <a href="#" className="btn btn-danger">Read More</a>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
<div className="blog-area pb-70 ptb-80">
   <div className="container">
      <div className="section-title text-center">
         <h2>Travel Stories</h2>
      </div>
      <div className="row pt-45">
         {
         Bsdata.map((val)=>{
         return(
         <Cards
            sName={val.sName}
            sImgsrc={val.sImgsrc}
            sDeis={val.sDeis}
            link={val.link}
            />
         )
         })
         }
      </div>
   </div>
</div>
<div className="blog-area pb-70 ptb-80 bg-light">
   <div className="container">
   <div className="section-title text-center">
         <h2>Our Blog</h2>
      </div>
            <div className="row mt-45">
            <div  className="col-lg-6 col-md-6">
		               
		                <div  className="single-blog">
		                    <div  className="blg-img">
		                        <a href="#"><img src={blog1} alt="" className="w-100"/></a>
		                    </div>
		                    <div  className="blog-content">
		                        <div  className="blog-text">
		                            <h5><a href="#">Relax Zone</a></h5>
		                            <div  className="blog-post-info">
                                        <span><a href="#">By admin</a></span>
                                        <span>February 18, 2018</span>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, nostrum.</p>
                                    <a href="#"  className="read-more"><ArrowRightAltIcon/></a>
		                        </div>
		                    </div>
		                </div>
		                
		            </div>
                  <div  className="col-lg-6 col-md-6">
		               
		                <div  className="single-blog">
		                    <div  className="blg-img">
		                        <a href="#"><img src={blog} alt="" className="w-100" /></a>
		                    </div>
		                    <div  className="blog-content">
		                        <div  className="blog-text">
		                            <h5><a href="#">Relax Zone</a></h5>
		                            <div  className="blog-post-info">
                                        <span><a href="#">By admin</a></span>
                                        <span>February 18, 2018</span>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, nostrum.</p>
                                    <a href="#"  className="read-more"><ArrowRightAltIcon/></a>
		                        </div>
		                    </div>
		                </div>
		                
		            </div>
            </div>
   </div>
</div>
<section  className="home-testimonial  ptb-80">
    <div  className="container-fluid">
        <div  className="row d-flex justify-content-center testimonial-pos">
            
            <div  className="col-md-12 d-flex justify-content-center">
                <h2>Testimonials</h2>
            </div>
        </div>
        
        <div  className="home-testimonial-bottom">
            <div  className="container testimonial-inner">
                <div  className="row d-flex justify-content-center">
                    <div  className="col-md-4 style-3">
                        <div  className="tour-item ">
                            <div  className="tour-desc bg-white">
                                <div  className="tour-text color-grey-3 text-center">&ldquo;At this School, our mission is to balance a rigorous comprehensive college preparatory curriculum with healthy social and emotional development.&rdquo;</div>
                                <div  className="d-flex justify-content-center pt-2 pb-2"><img  className="tm-people" src="https://images.pexels.com/photos/6625914/pexels-photo-6625914.jpeg" alt="" /></div>
                                <div  className="link-name d-flex justify-content-center">Balbir Kaur</div>
                              
                            </div>
                        </div>
                    </div>
                    <div  className="col-md-4 style-3">
                        <div  className="tour-item ">
                            <div  className="tour-desc bg-white">
                                <div  className="tour-text color-grey-3 text-center">&ldquo;At this School, our mission is to balance a rigorous comprehensive college preparatory curriculum with healthy social and emotional development.&rdquo;</div>
                                <div  className="d-flex justify-content-center pt-2 pb-2"><img  className="tm-people" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" /></div>
                                <div  className="link-name d-flex justify-content-center">Balbir Kaur</div>
                               
                            </div>
                        </div>
                    </div>
                    <div  className="col-md-4 style-3">
                        <div  className="tour-item ">
                            <div  className="tour-desc bg-white">
                                <div  className="tour-text color-grey-3 text-center">&ldquo;At this School, our mission is to balance a rigorous comprehensive college preparatory curriculum with healthy social and emotional development.&rdquo;</div>
                                <div  className="d-flex justify-content-center pt-2 pb-2"><img  className="tm-people" src="https://images.pexels.com/photos/4946604/pexels-photo-4946604.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""  /></div>
                                <div  className="link-name d-flex justify-content-center">Balbir Kaur</div>
                               
                            </div>
                        </div>
                    </div>
                </div>
                </div>
   </div>
   </div>
        </section>
        <Footer/>
       
</>
)
}
export default Home
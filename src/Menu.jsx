import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./img/logo.gif";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
const Menu =()=>{
    return(
        <>
        <section>
        <div  className="header-top d-none d-lg-block">
            <div  className="container">
                <div  className="inner-container clearfix row">
                    <div  className="social-links col-md-6">
                        <ul  className="social-list">
                            <li><a href="#"><i><FacebookIcon/></i></a></li>
                            <li><a href="#"><i><TwitterIcon/></i></a></li>
                            
                        </ul>
                    </div>
                    <div  className="header-info col-md-6 ">
                        <ul  className="info-list">
                            <li>
                                <i ><LocalPhoneIcon/></i>
                                <a href="tel:919450222938">+91-9450222938</a>
                            </li>
                            <li>
                                <i ><MailIcon/></i>
                                <a href="mailto:mukeshmaurya9460@gmail.com">mukeshmaurya9460@gmail.com</a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </section>
        <section className="bg-color">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                <nav className="navbar navbar-expand-sm">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/"><img src={logo} width="190" /></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justyfy" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/About">About Us</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/Service">Service</NavLink>
                        </li> 
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/Blog">Blog</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/Contact">Contact</NavLink>
                        </li>  
                       
                    </ul>
                    </div>
                </div>
                </nav>
                </div>
            </div>
        </div>
        </section>
        </>
    )
}
export default Menu
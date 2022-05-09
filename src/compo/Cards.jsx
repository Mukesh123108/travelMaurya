import React from "react";
const Cards=(props)=>{
    return(
        <>
            <div className="col-lg-6">
            <div className="blog-card">
               <div className="row align-items-center">
                  <div className="col-lg-5 col-md-4 p-0">
                     <div className="blog-img">
                        <a href="#">
                        <img src={props.sImgsrc} alt="Images" className="w-100"/>
                        </a>
                     </div>
                  </div>
                  <div className="col-lg-7 col-md-8 p-0">
                     <div className="blog-content">
                        <h3>
                          {props.sName}
                        </h3>
                        <p>{props.sDeis}</p>
                        <a href={props.link} className="btn btn-danger">
                        Read More
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
        </>
    )
}
export default Cards
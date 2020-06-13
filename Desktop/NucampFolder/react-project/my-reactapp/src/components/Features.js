import React from "react";

function Features () {
    return(

 


<div className="row">
        <div className="feature-box col-lg-4">
          <a className="link" href="aboutUs.html"><i className="icon fas fa-users fa-4x"></i></a>
          <h3 className="feature-title"></h3>
          <p>About Us</p> 
        </div>

        <div className="feature-box col-lg-4">
          <a className= "link" href ="profiles.html"><i className="icon fas fa-certificate fa-4x"></i></a>
          <h3 className="feature-title"></h3>
          <p>Elite Clientele</p>
        </div>

        <div className="feature-box col-lg-4">
          <a className="link" href="pricing.html"><i className="icon fas fa-tags fa-4x"></i></a>
          <h3 className="feature-title">
          
          </h3>
          <p>Pricing Plans</p>
        </div>
    </div>
    )
}

export default Features;
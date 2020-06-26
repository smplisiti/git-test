import React from "react";

//function Features  () {
    //return(

      class Features extends React.Component {
        constructor(props) {
          super(props);
      
          this.aboutUs = this.aboutUs.bind(this);
        }
      
        aboutUs() {
          this.props.aboutUsHandler(2);
        }

        render () {
          return (
        


<div className="row">
        <div className="feature-box col-lg-4">
         <a link="AboutUs"> <i className=" fas fa-users fa-4x"></i></a>
          <h3 className="feature-title"></h3>
          <p>We help your dog find a friendship that's better than belly rubs.</p> 
        </div>

        <div className="feature-box col-lg-4">
          <i className=" fas fa-certificate fa-4x"></i>
          <h3 className="feature-title"></h3>
          <p>Elite Clientele, meet someone unpawgettable.</p>
        </div>

        <div className="feature-box col-lg-4">
          <i className=" fas fa-tags fa-4x"></i>
          <h3 className="feature-title">
          
          </h3>
          <p>Pricing Plans for every dog's needs</p>
        </div>
    </div>


    );
}
      }

export default Features;
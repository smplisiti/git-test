import React from "react";
import "./Entry.css";

import AboutUs from "./AboutUs";
import LogIn from "./LogIn";


class Entry extends React.Component {
  constructor() {
    super();
    this.state = {
      mode: 0,
    };

    this.LogInHandler = this.LogInHandler.bind(this);
    this.RegisterHandler = this.RegisterHandler.bind(this);
  }

  LogInHandler() {
    this.setState({ mode: 1 });
  }

  RegisterHandler() {
    this.setState({ mode: 2});
  }


  render() {
    if (this.state.mode === 0) {
      return (
        <div>
          <nav className=" first-section navbar navbar-expand-lg navbar-dark">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo02"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="nav justify-content-end ml-auto">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    href="#LogIn.js"
                    onClick={this.LogInHandler}
                  >
                    Sign In
                  </a>
                </li>
                
                <li className="nav-item">
                  <a className="nav-link" href="#footer">
                    Download
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#footer">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <div className="first-section row">
            <div className="col-lg-6">
              <h2>Plenty of Woof</h2>
              <h1 className="opening-heading">You had me at ruff.</h1>
            </div>
            <div className="col-lg-6">
              <img
                className="title-image"
                src="images/dog2.jpg"
                alt="dog-on-computer"
              />
            </div>
        </div>
    </div>
      


    

         
    
      ) 
       
    } else if (this.state.mode === 1) {
      return <LogIn />;
    } else if (this.state.mode === 2) {
      return <AboutUs />;
    } else if (this.state.mode === 3) {
      return <AboutUs />;
    }
  }
}

export default Entry;

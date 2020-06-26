import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.signIn = this.signIn.bind(this);
  }

  signIn() {
    this.props.onClickerHandler(1);
  }



  render() {
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
                <a className="nav-link active" onClick={this.signIn}>
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
    );
  }
}

export default Header;

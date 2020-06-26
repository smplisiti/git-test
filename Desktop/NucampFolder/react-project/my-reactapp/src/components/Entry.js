import React from "react";
import "./Entry.css";
import AboutUs from "./About";
import LogIn from "./LogIn";
import Header from "./Header";
import Footer from "./Footer";
import Cards from "./Cards";
import Features from "./Features";

class Entry extends React.Component {
  constructor() {
    super();
    this.state = {
      mode: 0,
    };

    this.onClickerHandler = this.onClickerHandler.bind(this);
    
  }

  onClickerHandler(value) {
    this.setState({ mode: value });
  }

  

  render() {
    if (this.state.mode === 0) {
      return (
        <div>
          <Header onClickerHandler={this.onClickerHandler} />
          <Features />
          
          <Footer />
        </div>
      );
    } else if (this.state.mode === 1) {
      return <LogIn />;
    } else if (this.state.mode === 2) {
      return <AboutUs />;
    } else if (this.state.mode === 3) {
      return <Cards />;
    }
  }
}

export default Entry;

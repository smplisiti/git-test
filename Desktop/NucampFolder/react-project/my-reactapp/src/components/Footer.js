import React from "react";

function Footer() {
    return (
   
       
       <footer className="white-section footer" id="footer">
    <div class="bottom-container">

    <a href="https://www.apple.com/ios/app-store/" button class="download-button btn btn-lg btn-dark" type="button"><i className="icon fab fa-apple"></i></a>Download
      <a href="https://play.google.com/store/apps" button class="download-button btn btn-lg brn-light" style={{}} type="button"><i className="icon fab fa-google-play"></i></a>
        Download

      <a href="https://www.facebook.com/"><i className="social-icon fab fa-facebook"></i></a>
      <a href="https://twitter.com/explore"><i className="social-icon fab fa-twitter"></i></a>
      <a href="https://www.instagram.com/"><i className="social-icon fab fa-instagram"></i></a>
      
      <h6 className="copyright">© Copyright 2020 PlentyOfWoof</h6>
    </div>
  </footer>
    )
}

export default Footer;
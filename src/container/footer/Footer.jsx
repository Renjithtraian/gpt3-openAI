import "./footer.css";
import React from 'react';
import gpt3logo from "../../assets/logo.svg";

function Footer() {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <div className="gradient__text"><h1>Do you want to step in to the future before others</h1></div>
      </div>
      <div className="gpt3__footer-btn">
        <p>Request Earlky Access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3logo} alt="logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All © Rights Reserved</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Couters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
          <p>© 2021 GPT-3. All rights reserved to Renjith T Rajan</p>
        </div>
    </div>
  )
}

export default Footer

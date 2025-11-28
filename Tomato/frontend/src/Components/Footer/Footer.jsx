import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} />
          <p>
            Tomato is a modern food delivery app designed to bridge the gap
            between restaurants and customers by offering a seamless,
            user-friendly platform for ordering food online. Whether you’re
            craving a quick snack or planning a full-course meal, RestroFood
            ensures convenience, variety, and speedy delivery right at your
            fingertips.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} />
            <img src={assets.twitter_icon} />
            <img src={assets.linkedin_icon} />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get In Touch</h2>
          <ul>
            <li>Phone: 123-456-7890</li>
            <li>Email:(mailto:info@tomato.com)</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright © 2024 Tomato.com -All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;

import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { NavLink} from "react-router-dom";

import "./footer.css";

const Footer =()=>{
  return (
    <div className="footer-part">
    <div className="footer-section">
      <div className="first-section">
        <h1 className="heading-footer">Start using PlanYouTrip Today.</h1>
        <div className="inner-section">
          <div className="head-img-section">
            <h1 className="heading-footer">
              <span className="startingletter">Plan</span>YouTrip
            </h1>
            <img src="./logo.png" alt="Logo" className="foot-image" />
          </div>
          <p className="homaid-desc">
            Let us be your trusted partner in creating solutions that resonate
            with your vision.
          </p>
        </div>
      </div>
      <div className="second-section">
        <div className="second-inner-section">
          <h1 className="social-text-footer">Connect With Us</h1>
          <ul className="social-container">
            <div className="social-handles">
            <a href="#">
                <FaLinkedin className="linkedin-icon"/>
              </a>
              <a
                href="#"
                className="social-media"
              >
                <li className="list-item">LinkedIn</li>
              </a>
              
            </div>
            <div className="social-handles">
            <a href="#">
              <FaXTwitter className="twitter-icon" />
              </a>
              <a
                href="#"
                className="social-media"
              >
                <li className="list-item">Twitter</li>
              </a>
              
            </div>
            <div className="social-handles">
            <a href="#">
              <FaInstagram className="instagram-icon"/>
              </a>
              <a
                href="#"
                className="social-media"
              >
                <li className="list-item">Instagram</li>
              </a>
              
            </div>
            <div className="social-handles">
            <a href="#">
              <FaFacebook className="facebook-icon"/>
              </a>
              <a
                href="#"
                className="social-media"
              >
                <li className="list-item">Facebook</li>
              </a>
              
            </div>
            <div className="social-handles">
            <a href="#">
              <FaYoutube className="youtube-icon"/>
              </a>
              <a
                href="#"
                className="social-media"
              >
                <li className="list-item">Youtube</li>
              </a>
              
            </div>
          </ul>
        </div>
      </div>
    </div>
    <hr/>
    <div className="footer-details-container">
      <p className="footer-para">Kalyani, West Bengal, 741235</p>
      <p className="footer-para">+91 XXXXX XXXXX</p>
      <a href="mailto:homaidserviceshyd@gmail.com"  className="contact-info-email"> <div></div><p className="footer-para">CSE210XX@iiitkalyani.ac.in</p></a>
      <ul className="social-container-footer">
            <div className="social-handles-footer">
            <a href="#">
                <FaLinkedin className="linkedin-icon"/>
              </a>
             
            </div>
            <div className="social-handles-footer">
            <a href="#">
              <FaXTwitter className="twitter-icon" />
              </a>
              
            </div>
            <div className="social-handles-footer">
            <a href="#">
              <FaInstagram className="instagram-icon"/>
              </a>
             
            </div>
            <div className="social-handles-footer">
            <a href="#">
              <FaFacebook className="facebook-icon"/>
              </a>
            </div>
            <div className="social-handles-footer">
            <a href="#">
              <FaYoutube className="youtube-icon"/>
              </a>
            </div>
          </ul>
    </div>
    <p className="copyright-content">Copyright © 2024 PlanYourTrip - All Rights Reserved</p>
    </div>
  );
};

export default Footer;
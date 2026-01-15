import React from 'react'
import './Footer.css'
import {assets} from '../../assets/assets.js'
export const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
            <div className="footer-content-left">
                <img className="footer-logo" src={assets.logo_icon} alt="Logo của Tomato.com" />
                <p>We specialize in providing delicious and high-quality Vietnamese dishes, rich in traditional flavors. Let us bring the taste of Vietnam right to your doorstep!</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="Icon Facebook" />
                    <img  src= {assets.twitter_icon} alt="Icon Twitter" />
                    <img  src={assets.linkedin_icon} alt="Icon LinkedIn" />
                </div>
            </div>
            <div className="footer-content-center">
              <h2>COMPANY</h2>
              <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
              </ul>
            </div>
            <div className="footer-content-right">
              <h2>GET IN TOUCH</h2>
              <ul>
                <li>0377-080-534</li>
                <li>Team29@soict.hust.edu.vn</li>
              </ul>
            </div>
      </div>
      <hr /> 
      <p className="footer-copyright"> Copyright 2026 © fooddeli.com - All Rights Reserved. </p>
    </div>
  )
}

export default Footer

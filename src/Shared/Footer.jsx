import React from 'react';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
import { FaFacebook ,FaGithub,FaLinkedin,FaTwitter} from "react-icons/fa";


const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-blue-100 text-base-content">
  <div>
    <img src={logo} className='w-[60px] rounded-full' alt="" />
    <p>Disney Magic Toys Ltd.<br/>Providing reliable toys for babies.</p>
  </div> 
  <div>
    <span className="footer-title">Services</span> 
    <Link className="link link-hover">Branding</Link> 
    <Link className="link link-hover">Design</Link> 
    <Link className="link link-hover">Marketing</Link> 
    <Link className="link link-hover">Advertisement</Link>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <Link className="link link-hover">About us</Link> 
    <Link className="link link-hover">Feedback</Link> 
    <Link className="link link-hover">Pricing</Link> 
    
  </div> 
  <div className="divider lg:divider-horizontal"></div> 
  <div>
    <span className="footer-title">Social: </span> 
    <div className="grid grid-flow-col gap-4 text-blue-500">
      <a href="https://web.facebook.com/mariam.swarna.76" target='blank'><FaFacebook></FaFacebook></a>
      <a href="https://github.com/MoriamAkterSwarna" target='blank'><FaGithub></FaGithub></a>
      <a href="https://www.linkedin.com/in/moriamakterswarna/" target='blank'><FaLinkedin></FaLinkedin></a>
      <a href="https://twitter.com/MoriamSwarna" target='blank'><FaTwitter></FaTwitter></a>
     
      
    </div>
  </div>
</footer>
        </div>
    );
};

export default Footer;
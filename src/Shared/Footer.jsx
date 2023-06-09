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
    <div className="divider"></div> 
  <p>Copyright &copy; 2023 - All right reserved by <span className='text-blue-600'>Moriam Akter Swarna</span></p>
  </div> 
  <div>
    <span className="footer-title">Contact Information: </span> 
    <p>Address: 4/3 Block B, Lalmatia, Dhaka</p>
    <p>Phone: 01309209099</p>
    <p>Email: moriam15-12880@diu.edu.bd</p>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <Link className="link link-hover">About us</Link> 
    <Link className="link link-hover">Feedback</Link> 
    <Link className="link link-hover">Pricing</Link> 
    
  </div> 
  
  <div>
    <span className="footer-title">Social: </span> 
    <div className="grid grid-flow-col gap-4 text-blue-500">
      <a href="https://web.facebook.com/mariam.swarna.76" target='blank'><FaFacebook className='h-10 w-10'></FaFacebook></a>
      <a href="https://github.com/MoriamAkterSwarna" target='blank'><FaGithub className='h-10 w-10'></FaGithub></a>
      <a href="https://www.linkedin.com/in/moriamakterswarna/" target='blank'><FaLinkedin className='h-10 w-10'></FaLinkedin></a>
      <a href="https://twitter.com/MoriamSwarna" target='blank'><FaTwitter className='h-10 w-10'></FaTwitter></a>
     
      
    </div>
  </div>
  
  
</footer>

        </div>
    );
};

export default Footer;
import "./Footer.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <footer>
      <div className="content-box">
        <h3>Help & Information</h3>
        <ul>
        <li><a href="#">FAQ</a></li>
        <li><a href="#">Track your order</a></li>
        <li><a href="#">Return policy</a></li>
        <li><a href="#">Delivey</a></li>
        </ul>
      </div>
      <div className="content-box">
        <h3>About Store</h3>
        <ul>
        <li><a href="#">About us</a></li>
        <li><a href="#">Philosophy</a></li>
        <li><a href="#">Careers at Store</a></li>
        </ul>
      </div>
      <div className="content-box">
        <h3>Become a Member</h3>
        <ul>
        <li><a href="#">Sign In</a></li>
        <li><a href="#">Sign Up</a></li>
        <li><a href="#">Newsletter</a></li>
        <li><a href="#">Leave Feedback</a></li>
        </ul>
      </div>
      <div className="content-box social-media">
        <h3>Follow us</h3>
        <ul>
        <li><a href="#"><FaFacebook/></a></li>
        <li><a href="#"><FaInstagram/></a></li>
        <li><a href="#"><FaTwitter/></a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;  
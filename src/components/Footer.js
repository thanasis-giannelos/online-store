import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="color">
      <div className="container">
        <div className="content-box" id="1">
          <h3>Help & Information</h3>
          <ul>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Track your order</a></li>
          <li><a href="#">Return policy</a></li>
          <li><a href="#">Delivery</a></li>
          </ul>
        </div>
        <div className="content-box" id="2">
          <h3>About Store</h3>
          <ul>
          <li><a href="#">About us</a></li>
          <li><a href="#">Philosophy</a></li>
          <li><a href="#">Careers at Store</a></li>
          </ul>
        </div>
        <div className="content-box" id="3">
          <h3>Become a Member</h3>
          <ul>
          <li><a href="#">Sign In</a></li>
          <li><a href="#">Sign Up</a></li>
          <li><a href="#">Newsletter</a></li>
          <li><a href="#">Leave Feedback</a></li>
          </ul>
        </div>
        <div className="content-box social-media">
          <ul>
          <li><a href="#"><FaFacebook/></a></li>
          <li><a href="#"><FaInstagram/></a></li>
          <li><a href="#"><FaTwitter/></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

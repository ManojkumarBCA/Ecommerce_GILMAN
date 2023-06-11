import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <h6 className="text-center" style={{fontFamily:"cursive"}}>
        All Right Reserved &copy; <i>GILMAN Mart</i>
      </h6>
      <p className="text-center mt-4">
        <Link to="/about">About Us</Link>|<Link to="/contact">Contact Us</Link>|
        <Link to="/policy">Privacy Policy</Link>
      </p>
    </div>
  );
};

export default Footer;

import React from 'react';

const Footer = () => {
  return (
    <footer data-aos='fade-up'>
      <div className="container">
        <div className="info aboutus">
          <h2>About Us</h2>
          <p>ORD International was founded on 1st January 2015. It starts its journey with importing 6 elevator and 315kva 3sets substation Head office at Mirpur Dhaka Bangladesh . And Branch Office at Cumilla, , Chittagong & Dhaka. Now Head Office is 84/7Shewrapara, Mirpur, Dhaka-1216
          </p>
          <ul className="icon">
            <li><a href="#"><i className="fab fa-facebook"></i></a></li>
            <li><a href="#"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
            <li><a href="#"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
            <li><a href="#"><i className="fab fa-youtube" aria-hidden="true"></i></a></li>
          </ul>
        </div>
        <div className="info quickLinks">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Help</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="info contact">
          <h2>Contact Info</h2>
          <ul className="data">
            <li>
              <span><i className="fas fa-map-marker-alt"></i></span>
              <span>84/7 Shewrapara<br />
              Mirpur, Dhaka 1216 <br />Bangladesh</span>
            </li>
            <li>
              <span><i className="fas fa-phone" ></i></span>
              <p>
                <a href="tel: +8801716600696">+880 1716600696</a> <br />
                <a href="tel: +8801716600696">+880 1716600696</a>
              </p>
            </li>
            <li>
              <span><i className="fas fa-envelope" ></i></span>
              <p><a href="mailto:info.orde@gmail.com">info.orde@gmail.com</a></p>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyrightText">
      <p>Developed by skylinkcreative.com | {(new Date()).getFullYear()}</p>
    </div>
    </footer>
  );
};

export default Footer;
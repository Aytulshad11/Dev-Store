import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png"
import "./Footer.scss";
const Footer = () => {
    return <footer className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">
                The innovative platform offered seamless integration with multiple payment gateways, enhancing the overall shopping experience for customers worldwide.
                </div>
            </div>
            <div className="col">
                <div className="title">Contact</div>
                <div className="c-item">
                    <FaLocationArrow/>
                    <div className="text">
                        4567 Banyan Street, Lakshmi Nagar, New Delhi, Delhi 110092, India
                        </div>
                    </div>
                    <div className="c-item">
                    <FaMobileAlt/>
                    <div className="text">
                    Phone: 0471 272 0261
                        </div>
                    </div>
                    <div className="c-item">
                    <FaEnvelope/>
                    <div className="text">
                        Email: store@devstore.com
                        </div>
                    </div>
                </div>
            <div className="col">
                <div className="title">Categories</div>
                <div className="text">Headphones </div>
                <div className="text">Smart Watches </div>
                <div className="text">Bluetooth Speakers </div>
                <div className="text">Wireless Earbuds</div>
                <div className="text">Home Theatre </div>
                <div className="text">Projectors </div>
                </div>
            <div className="col">
                <div className="title">Pages</div>
                <div className="text">Home </div>
                <div className="text">About Us </div>
                <div className="text">Contact Us </div>
                <div className="text">Returns </div>
                <div className="text">Terms & Conditions </div>
                <div className="text">Privacy Policy </div>
                </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                    AS DEVSTORE 2024.  CREATED BY AS DEV. PREMIUM E-COMMERCE SOLUTIONS.
                </div>
                <img src={Payment}/>
            </div>
        </div>
    </footer>
};

export default Footer;

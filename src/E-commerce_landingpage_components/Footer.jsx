// src/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-section">
                <h5>Company Info</h5>
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Carrier</a></li>
                    <li><a href="#">We are hiring</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h5>Legal</h5>
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Carrier</a></li>
                    <li><a href="#">We are hiring</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h5>Features</h5>
                <ul>
                    <li><a href="#">Business Marketing</a></li>
                    <li><a href="#">User Analytic</a></li>
                    <li><a href="#">Live Chat</a></li>
                    <li><a href="#">Unlimited Support</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h5>Resources</h5>
                <ul>
                    <li><a href="#">iOS & Android</a></li>
                    <li><a href="#">Watch a Demo</a></li>
                    <li><a href="#">Customers</a></li>
                    <li><a href="#">API</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h5>Get In Touch</h5>
                <form>
                    <input type="email" placeholder="Your Email" />
                    <button type="submit">Subscribe</button>
                </form>
                <p>Lorem ipsum dolor amit</p>
            </div>
        </footer>
    );
};

export default Footer;
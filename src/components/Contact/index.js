import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { CgMail } from "react-icons/cg";
import './index.css';

function Contact() {
    return (
        <div className="contact-section">
            <h2 className="contact-title">📞 Contact Us</h2>
            <p className="contact-description">We would love to hear from you! Fill out the form or connect with us on social media.</p>

            <div className="social-media-section">
                <h3 className="section-title">🌐 Follow Us</h3>
                <p className="section-subtitle">Stay connected on your favorite platform:</p>

                <div className="social-card-container">
                    <a href="https://www.linkedin.com/in/mohammed-khan-7905a621a/" target="_blank" rel="noopener noreferrer" className="social-card linkedin">
                        <FaLinkedin className="social-icon" />
                        <span>LinkedIn</span>
                    </a>
                    <a href="mailto:mohammedkhan20019@gmail.com" target="_blank" rel="noopener noreferrer" className="social-card gmail">
                        <CgMail className="social-icon" />
                        <span>Gmail</span>
                    </a>
                    <a href="https://github.com/MohammedKhan-star" target="_blank" rel="noopener noreferrer" className="social-card github">
                        <IoLogoGithub className="social-icon" />
                        <span>GitHub</span>
                    </a>
                    <a href="https://x.com/mohammedkh97572" target="_blank" rel="noopener noreferrer" className="social-card twitter">
                        <FaTwitter className="social-icon" />
                        <span>Twitter</span>
                    </a>
                    <a href="https://www.instagram.com/software_engineer_mohammedkhan/" target="_blank" rel="noopener noreferrer" className="social-card instagram">
                        <FaInstagram className="social-icon" />
                        <span>Instagram</span>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61576972192958" target="_blank" rel="noopener noreferrer" className="social-card facebook">
                        <FaFacebook className="social-icon" />
                        <span>Facebook</span>
                    </a>
                </div>
            </div>

            <h3 className="form-title">✉️ Get in Touch</h3>
            <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert("Message sent!"); }}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" placeholder="Your full name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="you@example.com" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="4" placeholder="How can we help you?" required></textarea>
                </div>
                <button type="submit" className="submit-button">Send Message 🚀</button>
            </form>
        </div>
    );
}

export default Contact;

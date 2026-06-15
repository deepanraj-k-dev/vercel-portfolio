import React, { useState } from 'react';
import { Element } from 'react-scroll';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import './ContactUs.css';
import '../Responsive/Responsive.css';

const ContactUs = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        const form = event.target;
        const formData = new FormData(form);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                setIsLoading(false);
                setIsSuccess(true);
                form.reset();

                setTimeout(() => {
                    setIsSuccess(false);
                }, 3000);
            } else {
                setIsLoading(false);
                alert("There was an error submitting the form.");
            }
        } catch (error) {
            setIsLoading(false);
            alert("There was an error submitting the form.");
        }
    };

    return (
        <Element name="contact">
            <div className='contact-section'>
                <div className="contact-header">
                    <span className="contact-badge">Get In Touch</span>
                    <h1>Contact <span>Me</span></h1>
                </div>

                <div className="contact-container">
                    {/* Left Column: Contact Cards */}
                    <div className="contact-info-column">
                        <h2 className="info-title">Let's talk about <span>your project</span></h2>
                        <p className="info-desc">
                            Feel free to reach out. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                        </p>

                        <div className="contact-details-grid">
                            <a href="mailto:deepanraj.k15@gmail.com" className="info-card">
                                <div className="info-icon-wrapper">
                                    <FiMail />
                                </div>
                                <div className="info-card-text">
                                    <h3>Email Me</h3>
                                    <p>deepanraj.k15@gmail.com</p>
                                </div>
                            </a>

                            <a href="tel:+917708486647" className="info-card">
                                <div className="info-icon-wrapper">
                                    <FiPhone />
                                </div>
                                <div className="info-card-text">
                                    <h3>Call Me</h3>
                                    <p>+91 7708486647</p>
                                </div>
                            </a>

                            <div className="info-card map-card">
                                <div className="info-icon-wrapper">
                                    <FiMapPin />
                                </div>
                                <div className="info-card-text">
                                    <h3>Location</h3>
                                    <p>Chennai, Tamil Nadu, India</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Premium Form Card */}
                    <div className="contact-form-column">
                        <form className='contact-form' onSubmit={handleSubmit}>
                            <input type="hidden" name="access_key" value="6e5d98d5-9cdf-4b11-ae82-6a4615ffa589" />
                            
                            <div className="form-input-group">
                                <label htmlFor="name">Full Name</label>
                                <input
                                    required
                                    name="Name"
                                    id="name"
                                    type="text"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div className="form-input-group">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    required
                                    name="Email"
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div className="form-input-group">
                                <label htmlFor="textarea">Your Message</label>
                                <textarea
                                    required
                                    id="textarea"
                                    name="Message"
                                    placeholder="Enter your message"
                                    rows="5"
                                ></textarea>
                            </div>

                            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                            <button type="submit" className="form-premium-btn" disabled={isLoading}>
                                {isLoading ? (
                                    <span className="btn-loader-text">Sending...</span>
                                ) : (
                                    <>
                                        Send Message <FiSend className="btn-send-icon" />
                                    </>
                                )}
                            </button>

                            {isSuccess && (
                                <div className="contact-success-msg animate-fade-in">
                                    <p>Message sent successfully! I'll get back to you soon.</p>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </Element >
    );
};

export default ContactUs;

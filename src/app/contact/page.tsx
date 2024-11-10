"use client";

import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import "./contact.css";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e:any) => {
        e.preventDefault();

        const { firstName, lastName, email, phone, message } = formData;
        if (!firstName || !lastName || !email || !phone || !message) {
            alert('Please fill in all fields.');
            return;
        }

        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: '',
        });
    };

    return (
        <section className="contact-section">
            <div className="contact-container">
                <div className="contact-info">
                    <h2>Contact Me</h2>
                    <p>If you have any questions or would like to collaborate, please feel free to reach out.</p>
                    <ul>
                        <li><FaPhoneAlt className="icon" /> +92 325 348857</li>
                        <li><FaEnvelope className="icon" /> anoushaasadullah18@gmail.com</li>
                        <li><FaMapMarkerAlt className="icon" /> karachi, Pakistan</li>
                    </ul>
                </div>

                <div className="contact-form">
                    <h2>Send a Message</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="First Name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Last Name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your Email"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Phone Number"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your Message"
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="submit-btn">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;

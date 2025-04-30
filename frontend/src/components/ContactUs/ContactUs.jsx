import React, { useEffect, useState } from 'react';
import './ContactUs.css';
import { assets } from '../../assets/assets';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill all the fields');
      return;
    }

    try {
      const response = await fetch('http://localhost:4000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(`Thank you, ${formData.name}! Your message has been received.`);
        setFormData({ name: '', email: '', message: '' }); // Reset form fields
      } else {
        toast.error(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again later.');
    }
  };

  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} />
      <div className='contact-us-header' id="contact-us" data-aos="fade-down">
        <h2 className="contact-us-heading">Contact Us</h2>
      </div>

      <div className="contact-us-wrapper">
        <div className="contact-us-section">
          <div className="contact-us-left" data-aos="fade-right">
            <img src={assets.contact_us} alt="Contact" />
          </div>

          <form className="contact-us-form" data-aos="fade-left" onSubmit={handleSubmit}>
            <label>Email address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />

            <label>Your name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
            />

            <label>Your message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Write your message..."
              rows="4"
            />

            <button className="send-message-btn" type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;

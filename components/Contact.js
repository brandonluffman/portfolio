import React, { useRef, useState } from "react";
import {BsArrowRight} from 'react-icons/bs';
import Link from "next/link";

const Contact = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    setShowAlert(true); // Show the custom alert
    setTimeout(() => {
      setShowAlert(false); // Hide the custom alert after 3 seconds
    }, 3000);
    event.target.reset(); // Reset the form
  };
  return (
    <div>  
    <div className="contact-form-div">
      <form className='contact-form' id='myForm' onSubmit={handleSubmit}>
        <label className='contact-form-item name-label'>Name</label>
        <input type="text" name="user_name" className='contact-form-item name-input' placeholder="Enter Your Name" required />
        <label className='contact-form-item email-label'>Email</label>
        <input type="email" name="user_email" className='contact-form-item email-input' placeholder="Enter Your Email" required />
        <label className='contact-form-item message-label'>Message</label>
        <textarea name="message" className='contact-form-item message-input' placeholder="Your Messsage Here..." />
        <input type="submit" value="Send" className='contact-form-item contact-form-btn' />
      </form>
      <div className="contact-sides">
        <p className="contact-sides-header">Get in touch!</p>
        <Link href='/contact'><button className='contact-book-btn'><BsArrowRight className='arrow-icon'></BsArrowRight></button></Link>
        <div className="contact-info">
        </div>
      </div>
    </div>

    {showAlert && (
    <div className="tag-container tag-container-index">
    <span className="tag">Thanks for Submitting!</span>
    </div>
)}
    </div>
  );
};

export default Contact;


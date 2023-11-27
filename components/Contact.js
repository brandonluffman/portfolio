import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCalendarDays, faCircleCheck, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {BsArrowRight} from 'react-icons/bs';
import {GoMail } from 'react-icons/go';
import {IoIosPhonePortrait} from 'react-icons/io';
import {CiMapPin} from 'react-icons/ci';
import {TfiLocationPin} from 'react-icons/tfi';
import Link from "next/link";

const Contact = () => {
  // const form = useRef();

  // const closeBtn = (e) => {
  //   e.preventDefault();
  //   document.getElementById('thank_you').style.display = 'none';
  // }

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_wovzae5",
  //       "template_8c00lf5",
  //       form.current,
  //       "2bm-KH1_GoJ7mHTQ_"
  //     )
  //     .then(
  //       (result) => {
  //         e.target.reset();
  //         document.getElementById('thank_you').style.display = 'block';
  //         setTimeout(function(){
  //           document.getElementById('thank_you').style.display = 'none';
  //        }, 2000);
  //       },
  //       (error) => {
  //         document.getElementById('failure-msg').style.display = 'block';
  //         setTimeout(function(){
  //           document.getElementById('failure-msg').style.display = 'none';
  //        }, 2000);
  //       }
  //     );
  // };

  return (
    <div className="contact-form-div">
            <form className='contact-form' id='myForm'>
        <label className='contact-form-item name-label'>Name</label>
        <input type="text" name="user_name" className='contact-form-item name-input'  placeholder="Enter Your Name" required />
        <label className='contact-form-item email-label'>Email</label>
        <input type="email" name="user_email" className='contact-form-item email-input' placeholder="Enter Your Email" required />
        <label className='contact-form-item message-label'>Message</label>
        <textarea name="message" className='contact-form-item message-input' placeholder="Your Messsage Here..." />
        <input type="submit" value="Send" className='contact-form-item contact-form-btn' />
            <div id="thank_you" style={{display: 'none'}}>
            {/* <p onClick={closeBtn}>Thanks for reaching out!</p> */}
            </div>
            <div id="failure-msg" style={{display: 'none'}}>
            {/* <p onClick={closeBtn}>Form failed, please try again.</p> */}
            </div>
      </form>
     
      <div className="contact-sides">
        <p className="contact-sides-header">Get in touch!</p>
      <Link className="contact-book-link" href='/contact'><button className='contact-book-btn'><BsArrowRight className='arrow-icon'></BsArrowRight></button></Link>

        <div className="contact-info">
        {/* <p className="contact-info-item"><GoMail className="footer-contact-icon" /><a mailto='chris@goldshield.co'>info@cleoexteriors.com</a></p> */}
        {/* <p className="contact-info-item"><IoIosPhonePortrait className="footer-contact-icon" />(203) 822-2311</p> */}
        {/* <p className="contact-info-item"><TfiLocationPin className="footer-contact-icon" /> NYC</p> */}
        </div>
        {/* <p className="contact-book-text">Need the full contact experience?</p>
        <Link type='button' href='/contact'><button className='contact-book-btn'>Contact Me Here <BsArrowRight className='arrow-icon'></BsArrowRight></button></Link> */}
      </div>
      </div>
  );
};

export default Contact;


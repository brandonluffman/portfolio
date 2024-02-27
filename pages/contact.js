import { useState, useRef, useEffect } from 'react'
import { MdClear } from 'react-icons/md';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef(); // Create a reference to the form

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitted(true); // Set isSubmitted to true to show the tag
    console.log('Submitted');
    formRef.current.reset(); // Reset the form

    // Add your email sending logic here
};

useEffect(() => {
  if (isSubmitted) {
      // Set a timeout to hide the tag after 2 seconds
      const timer = setTimeout(() => {
          setIsSubmitted(false);
      }, 2000);

      // Clear the timer if the component is unmounted
      return () => clearTimeout(timer);
  }
}, [isSubmitted]);

  return (
    <div>
                <Head>  
        <title>Portfolio | Contact</title>
         <meta name="description" content="My portfolio."/>
         <meta charSet="utf-8" />
         <meta name="robots" content="noindex, nofollow" />
         <meta name="viewport" content="width=device-width, initial-scale=1"/>
         <link rel="icon" type="image/png" href="/favicon.png" alt="Favicon" />
         <link rel="apple-touch-icon" href="/favicon.png" />
         <link rel="canonical" href="https://thedevportfolio.vercel.app/"/>
           <meta property="og:type" content="article" />
           <meta property="og:title" content="Portfolio" />
           <meta property="og:description" content="My dev portfolio." />
           <meta property="og:image" content="/favicon.png" />
           <meta property="og:url" content="https://thedevportfolio.vercel.app/" />
           <meta property="og:site_name" content="Portfolio" />
     </Head>
      <Navbar />
    <div className='project-contact-container'>
        <form onSubmit={sendEmail} ref={formRef}  className='project-form'>
        <h1 className='project-header fade-left'>Hey, let&apos;s get in touch. <span className='hand-emoji'>&#128075;</span></h1>
                  <div className='form-inputs'>
                          <input type='text' placeholder='Your name *' className='form-input fade-in' name="name" required/><br></br>
                          <input type='email' placeholder='Your email *' className='form-input fade-in' name="email" required/><br></br>
                          <textarea placeholder='Your Message...' className='form-input fade-in' name='message' />
                  </div>
            
                  <div>
              </div>
            <div className='form-button'>
                    <button className='project-form-btn' value="Send" type='submit'><p className='form-btn-p'>Submit</p><span id='btn-ring' /></button>
            </div>
        </form>

        {isSubmitted && (
                <div className="tag-container tag-container-index">
                    <span className="tag">Thanks for Submitting!</span>
                </div>
            )}
        </div>
        <Footer />
    </div>
  )
}

export default Contact;



       {/* <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-W3Q83E2JE3"/>
        <Script
        id='google-analytics'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
        __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-W3Q83E2JE3', {
        page_path: window.location.pathname,
        });
        `,
        }}
        /> */}


            // const closeBtn = (e) => {
    //   e.preventDefault();
    //   document.getElementById('thank_you').style.display = 'none';
    // }
  
    // const sendEmail = (e) => {
    //   e.preventDefault();

    // document.getElementById('btn-ring').style.display = 'block';

    //   emailjs
    //     .sendForm(
    //       "service_d3p9eul",
    //       "template_yrm1kdx",
    //       inquiry.current,
    //       "q1bvSeQBMko2AZ2ax"
    //     )
    //     .then(
    //       (result) => {
    //         document.getElementById('btn-ring').style.display = 'none';
    //         e.target.reset();
    //         document.getElementById('thank_you').style.display = 'block';
    //         setTimeout(function(){
    //             document.getElementById('thank_you').style.display = 'none';
    //          }, 3000);
    //       },
    //       (error) => {
    //         console.log(error.text);
    //       }
    //     );
    // };

    // import styled from "styled-components";
// import { BsPaperclip } from 'react-icons/bs';
// import emailjs from "@emailjs/browser";


{/* <Head>
<title>Gold Shield Home Inspection | Book An Inspection</title>
<meta name="description" content="Looking to book a home inspection? Book with Gold Shield today."/>
<meta charSet="utf-8" />
<meta name="robots" content="index, follow" />
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<link rel="icon" type="image/png" href="/goldshield-logo.webp" alt="Favicon" />
<link rel="apple-touch-icon" href="/goldshield-logo.webp" /> 
<link rel="canonical" href="https://goldshieldhomeinspection.com/booking"/>
  <meta property="og:type" content="article" />
  <meta property="og:title" content="TITLE OF YOUR POST OR PAGE" />
  <meta property="og:description" content="DESCRIPTION OF PAGE CONTENT" />
  <meta property="og:image" content="LINK TO THE IMAGE FILE" />
  <meta property="og:url" content="PERMALINK" />
  <meta property="og:site_name" content="SITE NAME" />
  <meta name="twitter:title" content="TITLE OF POST OR PAGE" />
  <meta name="twitter:description" content="DESCRIPTION OF PAGE CONTENT" />
  <meta name="twitter:image" content="LINK TO IMAGE" />
  <meta name="twitter:site" content="@USERNAME" />
  <meta name="twitter:creator" content="@USERNAME" />
</Head> */}


              {/* <label className='radio-label budget-label' htmlFor='select-5'>1-2</label> */}
                    {/* <input type="radio" name="budget" id='select-5' value="1-2k" className="radio-input" onChange={handlePropertySizeChange}/>
                    <label className='radio-label budget-label' htmlFor='select-5'>1-2k</label> */}
                    {/* <input type="radio" name="budget" id='select-6' value="2-5k" className="radio-input"/>
                    <label className='radio-label budget-label' htmlFor='select-6'>2-5k</label>
                    <input type="radio" name="budget" id='select-7' value="5-10k" className="radio-input"/>
                    <label className='radio-label budget-label' htmlFor='select-7'>5-10k</label>
                    <input type="radio" name="budget" id='select-8' value="10k+" className="radio-input"/>
                    <label className='radio-label budget-label' htmlFor='select-8'>10k+</label> */}
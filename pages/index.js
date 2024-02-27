import React, {useState, useEffect} from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Link from "next/link";

import Head from "next/head";


const useFadeInSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const fadeInSections = document.querySelectorAll('.fade-in-section');

    fadeInSections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      // Clean up observer when component unmounts
      fadeInSections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);
};


export default function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('hasVisited')) {
      setLoading(false);
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        localStorage.setItem('hasVisited', 'true');
      }, 4000); // Adjust the time as needed
    }
  }, []);


  useFadeInSection();





  return (
    <>
      <Head>  
        <title>Portfolio | Luffman</title>
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
    {loading ? (
      <div className="splash">
        <div class="scan">
          <div class="fingerprint"></div>
        </div>
      </div>
      ) : (
        <>
    <Navbar />

    <div className='index-spotlight-container'>
    <div className="horizontal-line h-line-1"></div>
    <div className="horizontal-line h-line-2"></div>
    <div className="horizontal-line h-line-3"></div>
    <div className="vertical-line v-line-1"></div>
    <div className="vertical-line v-line-2"></div>
    <div className="vertical-line v-line-3"></div>
      <div className="index-spotlight-copy">
      <h3 className="index-spotlight-header fade-left">Hey, I&apos;m <span className="spotlight-color">Brandon Luffman</span></h3>
      <h6 className="index-spotlight-subheader fade-left">Come check out my <span className="italic">portfolio</span>.</h6>
            <Link href='/contact'><button className="index-spotlight-btn fade-left" type='button'>Get in touch</button></Link>
      </div>
     
    </div>

    <div className='index-about-container fade-in-section'>
      <h3 className="index-about-header index-header">About Me</h3>
      <div className="index-about-div">
        <div className="index-about-div-left">
          <p className="index-about-ptag">{`<p>`}</p>
          <p className="index-about-copy">My name is Brandon Luffman, and I&apos;m a passionate<br></br> Full-Stack Engineer with a strong focus in Artificial Intelligence. My journey in the world of software engineering began in 2019 when I decided to harness my love for problem-solving, building, and creativity. Since then, I&apos;ve embarked on a fulfilling career, during which I&apos;ve contributed to the development of a diverse range of web applications, APIs & more.</p>
          <p className="index-about-ptag bottom-ptag">{`</p>`}</p>
          <Link href='/about' ><button className='index-about-copy-btn' type='button'>Learn More</button></Link>

        </div>
        <div className="index-about-div-right">

        </div>
      </div>
    </div>
    <div className='index-work-container'>
      <h3 className="index-work-header index-header">Portfolio Work</h3>
 
    <div className="index-work-projects-grid">
            <Link href='https://ranki.ai' target="_blank" rel='noreferrer' className="work-projects-link"><div className="index-work-project-grid-item"><div className="work-overlay"></div></div></Link>
            <Link href='https://venum.vercel.app' target="_blank" rel='noreferrer' className="work-projects-link"><div className="index-work-project-grid-item"><div className="work-overlay"></div></div></Link>
            <Link href='https://theresumebuilderai.com' target="_blank" rel='noreferrer' className="work-projects-link"><div className="index-work-project-grid-item"><div className="work-overlay"></div></div></Link>
      </div>
      </div>

    <div className='index-contact-container'>
    <h3 className='container-header contact-header index-header'>Contact Me</h3>
        <Contact /> 
    </div>

    <Footer />
    </>
     )}
      </>
  )
}

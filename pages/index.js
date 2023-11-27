import React, {useState, useEffect} from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import {AiFillFileWord} from 'react-icons/ai'
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { BiLinkExternal } from 'react-icons/bi';

  
export default function Home() {
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   // Simulate some async work here (e.g., fetching data)
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000); // 2 seconds, replace with your actual loading logic
  // }, []);



  return (
    <>
    {loading ? (
    <div className="splash">
      Loading
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
      <h3 className="index-spotlight-header">Hey, I&apos;m <span className="spotlight-color">Brandon Luffman</span></h3>
      <h6 className="index-spotlight-subheader">Come check out my <span className="italic">portfolio</span>.</h6>
            <Link href='/contact'><button className="index-spotlight-btn" type='button'>Get in touch</button></Link>
      </div>
    </div>
    <div className='index-about-container'>
      <h3 className="index-about-header index-header">About Me</h3>
      <div className="index-about-div">
        <div className="index-about-div-left">
          <p className="index-about-ptag">{`<p>`}</p>
          <p className="index-about-copy">My name is Brandon Luffman, and I&apos;m a passionate Full-Stack Engineer with a strong focus in Artificial Intelligence. My journey in the world of software engineering began in 2019 when I decided to harness my love for problem-solving, building, and creativity. Since then, I&apos;ve embarked on a fulfilling career, during which I&apos;ve contributed to the development of a diverse range of web applications, APIs & more.</p>
          <p className="index-about-ptag bottom-ptag">{`</p>`}</p>
          <Link href='/about' ><button className='index-about-copy-btn' type='button'>Learn More <BsArrowRight className="index-about-copy-arrow" /></button></Link>

        </div>
        <div className="index-about-div-right">
          <img className='index-about-div-img' src='/profile-img.webp' />
          <button className='index-about-div-btn' type='button'><AiFillFileWord className="index-about-file-icon"/></button>
        </div>
      </div>
    </div>
    <div className="index-technical-container">
      {/* <div className="index-technical-top">
        No tag cloud allowed
      </div> */}
      <h3 className="index-technical-header index-header">Technical Skills</h3>
      <div className="index-technical-skills-container">
        <div className="technical-skill-item"><h3 className="technical-skill">React.js</h3><div className="technical-percentage"><div className="percentage"></div></div></div>
        <div className="technical-skill-item"><h3 className="technical-skill">Next.js</h3><div className="technical-percentage"><div className="percentage"></div></div></div>
        <div className="technical-skill-item"><h3 className="technical-skill">Python</h3><div className="technical-percentage"><div className="percentage"></div></div></div>
        <div className="technical-skill-item"><h3 className="technical-skill">Javscript</h3><div className="technical-percentage"><div className="percentage"></div></div></div>
        <div className="technical-skill-item"><h3 className="technical-skill">HTML5</h3><div className="technical-percentage"><div className="percentage"></div></div></div>
        <div className="technical-skill-item"><h3 className="technical-skill">CSS3</h3><div className="technical-percentage"><div className="percentage"></div></div></div>
        <div className="technical-skill-item"><h3 className="technical-skill">Git</h3><div className="technical-percentage"><div className="percentage"></div></div></div>
        <div className="technical-skill-item"><h3 className="technical-skill">AWS</h3><div className="technical-percentage"><div className="percentage"></div></div></div>
        <div className="technical-skill-item"><h3 className="technical-skill">SQL</h3><div className="technical-percentage"><div className="percentage"></div></div></div>
        <div className="technical-skill-item"><h3 className="technical-skill">REST API</h3><div className="technical-percentage"><div className="percentage"></div></div></div>
        <div className="technical-skill-item"><h3 className="technical-skill">Express</h3><div className="technical-percentage"><div className="percentage"></div></div></div>
        <div className="technical-skill-item"><h3 className="technical-skill">Docker</h3><div className="technical-percentage"><div className="percentage"></div></div></div>
      </div>
    </div>
    <div className='index-work-container'>
      <h3 className="index-work-header index-header">Portfolio Work</h3>
      {/* <div className="index-work-featured-projects">
        <div className="index-work-featured-project">
          1st Feature
        </div>
        <div className="index-work-featured-project">
          1st Feature
        </div>
        <div className="index-work-featured-project">
          1st Feature
        </div>
      </div> */}
      <div className="index-work-projects-grid">
        <Link href='https://phantomdm.com' target="_blank" rel='noreferrer' className="work-projects-link"><div className="index-work-project-grid-item"><div className="work-overlay"></div></div></Link>
        <Link href='https://cleoexteriors.com' target="_blank" rel='noreferrer' className="work-projects-link"><div className="index-work-project-grid-item"><div className="work-overlay"></div></div></Link>
        <Link href='https://theresumebuilderai.com' target="_blank" rel='noreferrer' className="work-projects-link"><div className="index-work-project-grid-item"><div className="work-overlay"></div></div></Link>
        <Link href='https://headshotgeneratorai.com' target="_blank" rel='noreferrer' className="work-projects-link"><div className="index-work-project-grid-item"><div className="work-overlay"></div></div></Link>        
        <Link href='https://dangerfit.com' target="_blank" rel='noreferrer' className="work-projects-link"><div className="index-work-project-grid-item"><div className="work-overlay"></div></div></Link>
        <Link href='https://venum.vercel.app' target="_blank" rel='noreferrer' className="work-projects-link"><div className="index-work-project-grid-item"><div className="work-overlay"></div></div></Link>
        <Link href='https://ranki.ai' target="_blank" rel='noreferrer' className="work-projects-link"><div className="index-work-project-grid-item"><div className="work-overlay"></div></div></Link>

        {/* <div className="index-work-project-grid-item"><div className="popout"><BiLinkExternal /></div></div>
        <div className="index-work-project-grid-item"><div className="popout"><BiLinkExternal /></div></div> */}

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

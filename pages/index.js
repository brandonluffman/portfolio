import React, {useState, useEffect} from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import {AiFillFileWord} from 'react-icons/ai'
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { BiLinkExternal } from 'react-icons/bi';
import Image from "next/image";
import Head from "next/head";

  
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
           <Head>  
<title>Portfolio | Luffman</title>
         {/* <script
           type="application/ld+json"
           dangerouslySetInnerHTML={{ __html: JSON.stringify({
               "@context": "https://schema.org",
               "@type": "Organization",
               "url": "https://www.phantomdm.com",
               "logo": "https://www.phantom.com/public/img.png"
             })}}
         /> */}
         <meta name="description" content="My portfolio."/>
         <meta charSet="utf-8" />
         <meta name="robots" content="index, follow" />
         <meta name="viewport" content="width=device-width, initial-scale=1"/>
         <link rel="icon" type="image/png" href="/favicon.png" alt="Favicon" />
         <link rel="apple-touch-icon" href="/favicon.png" />
         <link rel="canonical" href="https://thedevportfolio.vercel.app/"/>
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
     </Head>
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
    <div className='index-work-container'>
      <h3 className="index-work-header index-header">Portfolio Work</h3>
 
    <div className="index-work-projects-grid">
      <Link href='https://ranki.ai' target="_blank" rel='noreferrer' className="work-projects-link"><div className="index-work-project-grid-item"><div className="work-overlay"></div></div></Link>
            <Link href='https://venum.vercel.app' target="_blank" rel='noreferrer' className="work-projects-link"><div className="index-work-project-grid-item"><div className="work-overlay"></div></div></Link>
            {/* <Link href='https://phantomdm.com' target="_blank" rel='noreferrer' className="work-projects-link"><div className="index-work-project-grid-item"><div className="work-overlay"></div></div></Link> */}
            {/* <Link href='https://cleoexteriors.com' target="_blank" rel='noreferrer' className="work-projects-link"><div className="index-work-project-grid-item"><div className="work-overlay"></div></div></Link> */}
            <Link href='https://theresumebuilderai.com' target="_blank" rel='noreferrer' className="work-projects-link"><div className="index-work-project-grid-item"><div className="work-overlay"></div></div></Link>
            {/* <Link href='https://headshotgeneratorai.com' target="_blank" rel='noreferrer' className="work-projects-link"><div className="index-work-project-grid-item"><div className="work-overlay"></div></div></Link>         */}
            {/* <Link href='https://dangerfit.com' target="_blank" rel='noreferrer' className="work-projects-link"><div className="index-work-project-grid-item"><div className="work-overlay"></div></div></Link> */}

        {/* <div className="index-work-project-grid-item"><div className="popout"><BiLinkExternal /></div></div>
        <div className="index-work-project-grid-item"><div className="popout"><BiLinkExternal /></div></div> */}

      </div>
      </div>

    <div className="index-technical-container">
      {/* <div className="index-technical-top">
        No tag cloud allowed
      </div> */}
      <h3 className="index-technical-header index-header">Technical Skills</h3>
      <div className="index-technical-skills-container">
        <div className="technical-skill-item"><h3 className="technical-skill">React</h3><div className="technical-percentage"><div className="percentage"></div></div></div>
        <div className="technical-skill-item"><h3 className="technical-skill">Next.js</h3><div className="technical-percentage"><div className="percentage"></div></div></div>
        <div className="technical-skill-item"><h3 className="technical-skill">Javascript</h3><div className="technical-percentage"><div className="percentage"></div></div></div>
        <div className="technical-skill-item"><h3 className="technical-skill">Python</h3><div className="technical-percentage"><div className="percentage"></div></div></div>
        <div className="technical-skill-item"><h3 className="technical-skill">Typescript</h3><div className="technical-percentage"><div className="percentage"></div></div></div>
        <div className="technical-skill-item"><h3 className="technical-skill">Node.js</h3><div className="technical-percentage"><div className="percentage"></div></div></div>
        <div className="technical-skill-item"><h3 className="technical-skill">AWS</h3><div className="technical-percentage"><div className="percentage"></div></div></div>
        <div className="technical-skill-item"><h3 className="technical-skill">SQL</h3><div className="technical-percentage"><div className="percentage"></div></div></div>
        <div className="technical-skill-item"><h3 className="technical-skill">NoSQL</h3><div className="technical-percentage"><div className="percentage"></div></div></div>
        <div className="technical-skill-item"><h3 className="technical-skill">REST API</h3><div className="technical-percentage"><div className="percentage"></div></div></div>
        <div className="technical-skill-item"><h3 className="technical-skill">HTML5</h3><div className="technical-percentage"><div className="percentage"></div></div></div>
        <div className="technical-skill-item"><h3 className="technical-skill">CSS3</h3><div className="technical-percentage"><div className="percentage"></div></div></div>
        <div className="technical-skill-item"><h3 className="technical-skill">Git</h3><div className="technical-percentage"><div className="percentage"></div></div></div>
        {/* <div className="technical-skill-item"><h3 className="technical-skill">Express</h3><div className="technical-percentage"><div className="percentage"></div></div></div> */}
        <div className="technical-skill-item"><h3 className="technical-skill">Docker</h3><div className="technical-percentage"><div className="percentage"></div></div></div>
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

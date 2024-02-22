import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {AiFillFileWord} from 'react-icons/ai'
import Link from 'next/link'
import Head from 'next/head'

const about = () => {
  return (
    <>
               <Head>  
        <title>Portfolio | About</title>
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
      <div className='about-container'>
        <div className='about-img-div'>B</div>
      {/* <img src='/profile-img.webp' className='about-img'/> */}
        <h1 className='about-header'>Hey, I&apos;m Brandon Luffman, I am a Full Stack Developer with a deep-rooted passion for Artificial Intelligence, Deep Learning, and Machine Learning. 
        {/* By day, I craft seamless web applications, and by night, I dive into the fascinating world of AI algorithms and data science.  */}
        When I&apos;m not coding, I&apos;m likely exploring the latest advancements in AI research or brainstorming innovative ways to integrate AI into our daily lives. 
        I&apos;m always excited to learn about emerging technologies and push the boundaries of what&apos;s possible in the realm of technology and artificial intelligence.</h1>
        <Link href="/resume.pdf" passHref className="nav-link  desktop-nav-link" target="_blank"><button className='index-about-div-btn about-page-icon' type='button'><AiFillFileWord className="index-about-file-icon about-page-file-icon"/></button></Link>
        <span className='about-check-out'>Check out the resume</span>
        <Link className='about-work-link' href="/portfolio"><button className='about-work-btn' type='button'></button></Link>
        <span className='about-work-text'>Take a look at some work I&apos;ve done.</span>
      </div>
      <Footer />
    </>
  )
}

export default about
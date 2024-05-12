import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {IoIosArrowDropdownCircle} from 'react-icons/io'
import Link from 'next/link'
import Head from 'next/head'
const portfolio = () => {
  return (
    <>
           <Head>  
        <title>Portfolio | Portfolio</title>
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
        <div className='portfolio-container portfolio-page-container'>
            <div className='portfolio-copy-container'>
                <h3 className='fade-up'>Hey, come take a look at what I&apos;ve built.</h3>
                <h6 className='fade-up'>I&apos;ve embarked on an incredible journey, marked by numerous accomplishments and creations. However, my curiosity and passion have evolved, leading me to delve deeper into the captivating world of Artificial Intelligence and its transformative impact on the digital realm.</h6>
                <div className='arrow-container fade-in'>
                <IoIosArrowDropdownCircle className='portfolio-arrow' />
                </div>
            </div>

            <div className='index-work-container'>
      <h3 className="index-work-header index-header fade-in-section">Portfolio Work</h3>
      <h4>Python Projects</h4>
      <div className="index-work-projects-grid">
        <div className="index-work-python-item"><div><h2>Resume Parser</h2><p>Python API used to extract all relevant information from a users resume scored against an algorithm created to mimic the ATS process for helping job seekers to optimize their resume.</p><Link target="_blank" rel="noreferrer" href='https://github.com/brandonluffman/resumeparserofficial.git'><img src='github.png' className="gh-logo"></img></Link></div></div>
        <div className="index-work-python-item"><div><h2>BlackWidow</h2><p>Collected real time information from Reddit, Youtube, Google to garner a sentiment based understanding for products using a mix of web scraping and Natural Language Processing in order to assist buyers with product research instantly.</p><Link target="_blank" rel="noreferrer" href='https://github.com/brandonluffman/BlackWidowAPI'><img src='github.png' className="gh-logo"></img></Link></div></div>
        <div className="index-work-python-item"><div><h2>GMB Scraper</h2><p>Python Script allowing users the ability to grab contact information of businesses to assist with outreach.</p><Link target="_blank" rel="noreferrer" href='https://github.com/brandonluffman/gmb_scraper'><img src='github.png' className="gh-logo"></img></Link></div></div>
        {/* <div><h2></h2></div> */}
      </div>
      <h4>Full Stack</h4>
    <div className="index-work-projects-grid">
            <Link href='https://ranki.ai' target="_blank" rel='noreferrer' className="work-projects-link"><div className="index-work-project-grid-item"><div className="work-overlay"></div></div></Link>
            <Link href='https://venum.vercel.app' target="_blank" rel='noreferrer' className="work-projects-link"><div className="index-work-project-grid-item"><div className="work-overlay"></div></div></Link>
            <Link href='https://theresumebuilderai.com' target="_blank" rel='noreferrer' className="work-projects-link"><div className="index-work-project-grid-item"><div className="work-overlay"></div></div></Link>
            <Link href='https://julietchat.vercel.app/' target="_blank" rel='noreferrer' className="work-projects-link"><div className="index-work-project-grid-item"><div className="work-overlay"></div></div></Link>
            <Link href='https://crypto-price-tracker-xi.vercel.app/' target="_blank" rel='noreferrer' className="work-projects-link"><div className="index-work-project-grid-item"><div className="work-overlay"></div></div></Link>

      </div>
      <h4>Front-End Focused</h4>
    <div className="index-work-projects-grid-2">
            <Link href='https://hapebeast-silk.vercel.app/' target="_blank" rel='noreferrer' className="work-projects-link"><div className="index-work-project-grid-item"><div className="work-overlay"></div></div></Link>
            <Link href='https://cleoexteriors.com' target="_blank" rel='noreferrer' className="work-projects-link"><div className="index-work-project-grid-item"><div className="work-overlay"></div></div></Link>
            <Link href='https://dangerfit.com' target="_blank" rel='noreferrer' className="work-projects-link"><div className="index-work-project-grid-item"><div className="work-overlay"></div></div></Link>
            <Link href='https://phantomdm.com' target="_blank" rel='noreferrer' className="work-projects-link"><div className="index-work-project-grid-item"><div className="work-overlay"></div></div></Link>
            <Link href='https://react-landing-page-jade.vercel.app/' target="_blank" rel='noreferrer' className="work-projects-link"><div className="index-work-project-grid-item"><div className="work-overlay"></div></div></Link>
      </div>
      </div>

            {/* <div className="index-work-projects-grid portfolio-work-grid">
            <Link href='https://ranki.ai' target="_blank" rel='noreferrer' className="work-projects-link"><div className="index-work-project-grid-item"><div className="work-overlay"></div></div></Link>
            <Link href='https://venum.vercel.app' target="_blank" rel='noreferrer' className="work-projects-link"><div className="index-work-project-grid-item"><div className="work-overlay"></div></div></Link>
            <Link href='https://phantomdm.com' target="_blank" rel='noreferrer' className="work-projects-link"><div className="index-work-project-grid-item"><div className="work-overlay"></div></div></Link>
            <Link href='https://cleoexteriors.com' target="_blank" rel='noreferrer' className="work-projects-link"><div className="index-work-project-grid-item"><div className="work-overlay"></div></div></Link>
            <Link href='https://theresumebuilderai.com' target="_blank" rel='noreferrer' className="work-projects-link"><div className="index-work-project-grid-item"><div className="work-overlay"></div></div></Link>
            <Link href='https://headshotgeneratorai.com' target="_blank" rel='noreferrer' className="work-projects-link"><div className="index-work-project-grid-item"><div className="work-overlay"></div></div></Link>        
            <Link href='https://dangerfit.com' target="_blank" rel='noreferrer' className="work-projects-link"><div className="index-work-project-grid-item"><div className="work-overlay"></div></div></Link>

        <div className="index-work-project-grid-item"><div className="popout"><BiLinkExternal /></div></div>
        <div className="index-work-project-grid-item"><div className="popout"><BiLinkExternal /></div></div>

      </div> */}

        </div>
        <Footer />
    </>
  )
}

export default portfolio
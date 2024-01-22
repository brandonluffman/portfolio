import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {IoIosArrowDropdownCircle} from 'react-icons/io'
import Link from 'next/link'
const portfolio = () => {
  return (
    <>
        <Navbar />
        <div className='portfolio-container portfolio-page-container'>
            <div className='portfolio-copy-container'>
                <h3>Hey, come take a look at what I&apos;ve built.</h3>
                <h6>I&apos;ve embarked on an incredible journey, marked by numerous accomplishments and creations. However, my curiosity and passion have evolved, leading me to delve deeper into the captivating world of Artificial Intelligence and its transformative impact on the digital realm.</h6>
                <div className='arrow-container'>
                <IoIosArrowDropdownCircle className='portfolio-arrow' />
                </div>
            </div>

            <div className="index-work-projects-grid portfolio-work-grid">
            <Link href='https://ranki.ai' target="_blank" rel='noreferrer' className="work-projects-link"><div className="index-work-project-grid-item"><div className="work-overlay"></div></div></Link>
            <Link href='https://venum.vercel.app' target="_blank" rel='noreferrer' className="work-projects-link"><div className="index-work-project-grid-item"><div className="work-overlay"></div></div></Link>
            <Link href='https://phantomdm.com' target="_blank" rel='noreferrer' className="work-projects-link"><div className="index-work-project-grid-item"><div className="work-overlay"></div></div></Link>
            <Link href='https://cleoexteriors.com' target="_blank" rel='noreferrer' className="work-projects-link"><div className="index-work-project-grid-item"><div className="work-overlay"></div></div></Link>
            <Link href='https://theresumebuilderai.com' target="_blank" rel='noreferrer' className="work-projects-link"><div className="index-work-project-grid-item"><div className="work-overlay"></div></div></Link>
            <Link href='https://headshotgeneratorai.com' target="_blank" rel='noreferrer' className="work-projects-link"><div className="index-work-project-grid-item"><div className="work-overlay"></div></div></Link>        
            <Link href='https://dangerfit.com' target="_blank" rel='noreferrer' className="work-projects-link"><div className="index-work-project-grid-item"><div className="work-overlay"></div></div></Link>

        {/* <div className="index-work-project-grid-item"><div className="popout"><BiLinkExternal /></div></div>
        <div className="index-work-project-grid-item"><div className="popout"><BiLinkExternal /></div></div> */}

      </div>
        </div>
        <Footer />
    </>
  )
}

export default portfolio
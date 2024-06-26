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
    {/* {loading ? (
      <div className="splash">
        <div class="scan">
          <div class="fingerprint"></div>
        </div>
      </div>
      ) : ( */}
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

    <div className='index-about-container'>
      <h3 className="index-about-header index-header fade-in-section">About Me</h3>
      <div className="index-about-div">
        <div className="index-about-div-left">
          <p className="index-about-ptag fade-in-section">{`<p>`}</p>
          <p className="index-about-copy fade-in-section">My name is Brandon Luffman, and I&apos;m a passionate<br></br> Full-Stack Engineer with a strong focus in Artificial Intelligence. My journey in the world of software engineering began in 2019 when I decided to harness my love for problem-solving, building, and creativity. Since then, I&apos;ve embarked on a fulfilling career, during which I&apos;ve contributed to the development of a diverse range of web applications, APIs & more.</p>
          <p className="index-about-ptag bottom-ptag fade-in-section">{`</p>`}</p>
          <Link href='/about' ><button className='index-about-copy-btn fade-in-section' type='button'>Learn More</button></Link>

        </div>
        <div className="index-about-div-right">
          <img src="/logos/python.png" />
          <img src="/logos/javascript.png" />
          <img src="/logos/aws.png" />
          <img src="/logos/react.png" />
          <img src="/logos/mysql.png" />
          <img src="/logos/node.png" />

          {/* <div className="index-ab-right-grid">
            <div>
            <h4>Languages</h4>
              <ul>
              <li>Python</li>
              <li>Javascript</li>
              </ul>
              </div>
              <div>
            <h4>Machine Learning</h4>
              <ul>              
              <li>spaCy</li>
              <li>Pandas</li>
              <li>Numpy</li>
              <li>Matplotlib</li>
              <li>Sci-kit Learn</li>
              <li>Pytorch</li>
              <li>NLTK</li>
              </ul>
              </div>
              <div>

            <h4>Full Stack</h4>
            <ul>
              <li>HTML/CSS</li>    
              <li>React.js</li>
              <li>Node.js</li>
              <li>Next.js</li>
            </ul>
            </div>
            <div>
            <h4>Cloud</h4>
            <ul>
            <li>AWS</li>
            <li>S3</li>
            <li>EC2</li>
            <li>Lambda</li>
            <li>RDS</li>
            </ul>
            </div>
            <div>
            <h4>Databases</h4>
            <ul>
              <li>MySQL</li>
              <li>PostgresSQL</li>
              <li>MongoDB</li>
            </ul>
            </div>
            <div>
            <h4>Development Tools</h4>
            <ul>
              <li>Git</li>
              <li>Docker</li>
              <li>Kubernetes</li>
              <li>Jenkins</li>
            </ul>
            </div>
          </div> */}
        </div>
      </div>
    </div>
    <div className='index-work-container'>
      <h3 className="index-work-header index-header fade-in-section">Portfolio Work</h3>
      <h4>Python Projects</h4>
      <div className="index-work-projects-grid">
        <div className="index-work-python-item"><div><h2>Resume Parser</h2><p>Python API used to extract all relevant information from a users resume scored against an algorithm created to mimic the ATS process for helping job seekers to optimize their resume.</p><Link target="_blank" rel="noreferrer" href='https://github.com/brandonluffman/resumeparserofficial.git' className="github-link"><img src='github.png' className="gh-logo"></img></Link></div></div>
        <div className="index-work-python-item"><div><h2>BlackWidow</h2><p>Collected real time information from Reddit, Youtube, Google to garner a sentiment based understanding for products using a mix of web scraping and Natural Language Processing in order to assist buyers with product research instantly.</p><Link target="_blank" rel="noreferrer" href='https://github.com/brandonluffman/BlackWidowAPI' className="github-link"><img src='github.png' className="gh-logo"></img></Link></div></div>
        <div className="index-work-python-item"><div><h2>GMB Scraper</h2><p>Python Script allowing users the ability to grab contact information of businesses from Google My Business Listings to assist with outreach.</p><Link target="_blank" rel="noreferrer" href='https://github.com/brandonluffman/gmb_scraper' className="github-link"><img src='github.png' className="gh-logo"></img></Link></div></div>
        <div className="index-work-python-item"><div><h2>Similarity Algorithm</h2><p>Engineered a machine learning algorithm to calculate the cosine similarity between two elements of text.</p><Link target="_blank" rel="noreferrer" href='https://github.com/brandonluffman/summarize' className="github-link"><img src='github.png' className="gh-logo"></img></Link></div></div>
        <div className="index-work-python-item"><div><h2>Text Summarization</h2><p>Built an abstrative text summarization tool using deep learning transformers to summarize a corpus of text.</p><Link target="_blank" rel="noreferrer" href='https://github.com/brandonluffman/quant/blob/main/abstractive.py' className="github-link"><img src='github.png' className="gh-logo"></img></Link></div></div>
        <div className="index-work-python-item"><div><h2>Earnings Sentiment Analysis</h2><p>Engineered a machine learning algorithm to pull earnings call transcripts and calculate the sentiment within the text.</p><Link target="_blank" rel="noreferrer" href='https://github.com/brandonluffman/quant/blob/main/sentiment.py' className="github-link"><img src='github.png' className="gh-logo"></img></Link></div></div>
        <div className="index-work-python-item"><div><h2>Named Entity Recognition Model</h2><p>Built a custom NER model to detect product names within a corpus of text using spaCy.</p><Link target="_blank" rel="noreferrer" href='https://github.com/brandonluffman/ner_fastapi' className="github-link"><img src='github.png' className="gh-logo"></img></Link></div></div>
      </div>
      <h4>Full Stack</h4>
    <div className="index-work-projects-grid">
            <Link href='https://ranki.ai' target="_blank" rel='noreferrer' className="work-projects-link fade-in-section"><div className="index-work-project-grid-item"><div className="work-overlay"></div></div></Link>
            <Link href='https://venum.vercel.app' target="_blank" rel='noreferrer' className="work-projects-link fade-in-section"><div className="index-work-project-grid-item"><div className="work-overlay"></div></div></Link>
            <Link href='https://theresumebuilderai.com' target="_blank" rel='noreferrer' className="work-projects-link fade-in-section"><div className="index-work-project-grid-item"><div className="work-overlay"></div></div></Link>
            <Link href='https://julietchat.vercel.app/' target="_blank" rel='noreferrer' className="work-projects-link fade-in-section"><div className="index-work-project-grid-item"><div className="work-overlay"></div></div></Link>
            <Link href='https://crypto-price-tracker-xi.vercel.app/' target="_blank" rel='noreferrer' className="work-projects-link fade-in-section"><div className="index-work-project-grid-item"><div className="work-overlay"></div></div></Link>

      </div>
      <h4>Front-End Focused</h4>
    <div className="index-work-projects-grid-2">
            <Link href='https://hapebeast-silk.vercel.app/' target="_blank" rel='noreferrer' className="work-projects-link fade-in-section"><div className="index-work-project-grid-item"><div className="work-overlay"></div></div></Link>
            <Link href='https://cleoexteriors.com' target="_blank" rel='noreferrer' className="work-projects-link fade-in-section"><div className="index-work-project-grid-item"><div className="work-overlay"></div></div></Link>
            <Link href='https://dangerfit.com' target="_blank" rel='noreferrer' className="work-projects-link fade-in-section"><div className="index-work-project-grid-item"><div className="work-overlay"></div></div></Link>
            <Link href='https://phantomdm.com' target="_blank" rel='noreferrer' className="work-projects-link fade-in-section"><div className="index-work-project-grid-item"><div className="work-overlay"></div></div></Link>
            <Link href='https://react-landing-page-jade.vercel.app/' target="_blank" rel='noreferrer' className="work-projects-link fade-in-section"><div className="index-work-project-grid-item"><div className="work-overlay"></div></div></Link>
      </div>
      </div>

    <div className='index-contact-container'>
    <h3 className='container-header contact-header index-header fade-in-section'>Contact Me</h3>
        <Contact /> 
    </div>

    <Footer />
    </>
     {/* )} */}
      </>
  )
}

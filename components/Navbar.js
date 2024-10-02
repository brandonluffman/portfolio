import Link from "next/link";
import { useState, useEffect } from "react";
import { MdMenu, MdClear } from 'react-icons/md';
import Image from "next/image";
import {AiOutlineSchedule} from 'react-icons/ai';
import { BiLinkExternal } from 'react-icons/bi';
function Navbar() {

    const [showMe, setShowMe] = useState(false);
    const [isActive, setIsActive] = useState(false);

    function toggleNav(){
      setShowMe(!showMe);
      setIsActive(!isActive);
    }

    const [navbar, setNavbar] = useState(false);

  
    const changeBackground = () => {
      if (window.scrollY >= 40) {
        setNavbar(true);

      } else {
        setNavbar(false);
  
      }
    };

    useEffect(() => {
      window.addEventListener('scroll', changeBackground, true);
      return () => window.removeEventListener('scroll', changeBackground);
    }, []);


  return (

    <header className="header">
      <nav className={navbar ? 'navbar scroll fade-in' : 'navbar fade-in'} id="navbar">
        <Link href="/" className="nav-logo">
          <div className="brand-img" id="brand-img">
          {/* <img src='/logo.png' className="absolute-ghost" alt='Logo'></img> */}
          <span className="brand-logo">B</span>
          </div>
        </Link>
        <div className="nav-buttons">
          <div className="nav-menu-desktop-btns">
          {/* <button className="nav-lang-btn" type='button'>En</button> */}
          
          <Link href='/' className="nav-link desktop-nav-link">
          <li className="nav-item">
            Home
          </li>
          </Link>
          <Link href='/about' className="nav-link  desktop-nav-link">
          <li className="nav-item">
            About
          </li>
          </Link>
          <Link href="/resume.pdf" passHref className="nav-link  desktop-nav-link" target="_blank">
            <li className="nav-item">
              Resume
              <BiLinkExternal className="resume-icon" />
            </li>
            </Link>
          <Link href='/portfolio' className="nav-link  desktop-nav-link">
          <li className="nav-item">
            Portfolio
          </li>
          </Link>
          <Link href='/contact' className="nav-link  desktop-nav-link">
          <li className="nav-item">
            Contact
          </li>
          </Link>
          {/* <Link className='nav-contact-btn-link' href='/contact'><button className='nav-contact-btn' type='button'>Contact Me</button></Link> */}
          </div>
          {isActive? <MdClear  style={{right: showMe? "0":"-100%"}} className='hamburger-btn hamburger-close-btn' onClick={toggleNav}/>:<MdMenu  style={{right: showMe? "0":"-100%"}} className='hamburger-btn' onClick={toggleNav} />}
        </div>
        <ul className="nav-menu" id='nav-menu' style={{right: showMe? "0":"-100%"}}>
          <li className="nav-item"><p className="nav-menu-header">Menu</p></li>
          <Link href='/' className="nav-link">
          <li className="nav-item" onClick={toggleNav}>
            Home
          </li>
          </Link>
          <Link href='/about' className="nav-link">
          <li className="nav-item" onClick={toggleNav}>
              About
          </li>
          </Link>
            <Link href='/portfolio' className="nav-link">
          <li className="nav-item" onClick={toggleNav}>
              Portfolio
          </li>
          </Link>
          <Link href="/resume.pdf" passHref className="nav-link" target="_blank">
            <li className="nav-item">
              Resume
              <BiLinkExternal className="resume-icon" />
            </li>
            </Link>
          <Link href='/contact' className="nav-link">
          <li className="nav-item nav-item-margin" onClick={toggleNav}>
              Contact
          </li>
          </Link>
          <li className="nav-item brand-img-nav-item">
          <div className="dropdown-brand-div">
          <span className="brand-logo">B</span>
          </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
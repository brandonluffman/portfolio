import React, {useState, useEffect} from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Link from "next/link";
import Head from "next/head";
import { BiDownload } from "react-icons/bi";
import { BsEyeFill } from "react-icons/bs";



const index2 = () => {
    return (
        <>
        <Navbar />
        <div className="index-main-container">
            <div className="index-main-item">
                <div className="index-main-emoji">👋</div><h2>Brandon Luffman</h2>
                <p>Passionate Full-Stack Engineer with a strong focus in Machine Learning & Data Science.</p>
            </div>
            <div className="index-main-item grid grid-2">
                <div>
                    <div>
                    <span>2024 CV</span>
                    <h2>Resume</h2>
                    </div>
                    <BiDownload/>
                    <BsEyeFill/>
                </div>
                <div>

                </div>
            </div>
            <div className="index-main-item grid grid-4">
                <div>
                <img src='/github.png' width={50}></img>
                </div>
                <div>
                <img src='/linkedin.png' width={50}></img>
                </div>
                <div>
                <img src='/github.png' width={50}></img>
                </div>
                <div>
                <img src='/linkedin.png' width={50}></img>
                </div>
            </div>
            <div className="index-main-item">
            </div>
            <div className="index-main-item">
                <h2>My Tech Stack</h2>
                <div className="index-stack-container">
                    <img src="/logos/python.png" />
                    <img src="/logos/javascript.png" />
                    <img src="/logos/aws.png" />
                    <img src="/logos/react.png" />
                    <img src="/logos/mysql.png" />
                    <img src="/logos/node.png" />
                    <img src="/logos/scikit.png" />
                    <img src="/logos/postgresql.png" />
                    <img src="/logos/pytorch.png" />

                </div>
            </div>
            <div className="index-main-item">
                2 Years of Experience
            </div>
        </div>
        <div className="index-portfolio-grid">
            <div className="index-portfolio-grid-item">
                <h2>venum</h2>
            </div>
            <div className="index-portfolio-grid-item">
            <h2>venum</h2>

            </div>
            <div className="index-portfolio-grid-item">
            <h2>venum</h2>

            </div>
            <div className="index-portfolio-grid-item">
            <h2>venum</h2>

            </div>
            <div className="index-portfolio-grid-item">
            <h2>venum</h2>

            </div>
            <div className="index-portfolio-grid-item">
            <h2>venum</h2>

            </div>
        </div>
        <Footer />
        </>
  )
}

export default index2
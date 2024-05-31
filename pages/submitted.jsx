
import React from "react";
import Link from "next/link";
import utilStyles from '../pages/styles/utils.module.css';
import FormStructure from "./formbuild";

export default function Submitted(){
    return (
        <div>
            <div className="nav">
                <input type="checkbox" id="nav-check"/>
                <div className="nav-header">
                    <div className="nav-title">
                    Ratinavan
                    </div>
                </div>
                <div className="nav-btn">
                    <label htmlFor="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                    </label>
                </div>

                <div className="nav-links">
                    <Link href='/'>Home</Link>
                    <Link href='/portfolio'>Portfolio</Link>
                    <Link href='/services'>Services</Link>
                    <Link href='/form'>Form</Link>
                    <Link href='/contact'>Contact Me</Link>
                </div>
            </div>

            <section className="mainimg">
            </section>

            <h1 className={utilStyles.heading2Xl}>Thank You!</h1>
            <div className="section">
                <h2>Your form has been successfully submitted</h2>
                <p>I will be in contact with you ASAP, but if you'd like to 
                    contact me sooner, head over to the Contact page to find a link to
                    my socials!
                </p>
            </div>
            
        </div>
    )
}
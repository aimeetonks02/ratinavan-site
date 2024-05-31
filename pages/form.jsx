
import React from "react";
import Link from "next/link";
import utilStyles from '../pages/styles/utils.module.css';
import FormStructure from "./formbuild";
// import handler from "./api/api_four";

export default function Form(){
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
                    <Link href='/form' id="formtag">Form</Link>
                    <Link href='/contact'>Contact Me</Link>
                </div>
            </div>

            <section className="mainimg">
            </section>

            <h1 className={utilStyles.heading2Xl}>Form</h1>

            <FormStructure/>
            
        </div>
    )
}
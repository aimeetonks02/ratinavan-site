import Link from "next/link"
import React from "react"
import Image from "next/image";
import Layout from "../components/layout"
import utilStyles from '../pages/styles/utils.module.css';


export default function HomePage(){
    return (
        <Layout>
            <div className="nav">
                <input type="checkbox" id="nav-check"/>
                <div class="nav-header">
                    <div class="nav-title">
                    Ratinavan
                    </div>
                </div>
                <div class="nav-btn">
                    <label for="nav-check">
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
            <h1 className={utilStyles.heading2Xl}>Ratinavan's Home!</h1>
            <div className="section">
                <h2 className={utilStyles.headingXl}>About Ratinavan</h2>
                <p>Hi, my name is <b>Rat</b>!</p>
                <p>I have made this website so that you can easily browse my portfolio and request commissions
                    all in one place! I hope you will find this useful, and don't hesitate to contact me about anything :D
                </p>
            <p>For more info on how to reach me, visit the <b><Link href="/contact">Contact</Link></b> page!</p>
            </div>
        </Layout>
    )
}
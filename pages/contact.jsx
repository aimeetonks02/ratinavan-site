import React from "react";
import Link from "next/link";
import utilStyles from '../pages/styles/utils.module.css';

export default function Contact(){
    return (
        <div>
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
                    <Link href='/contact' id="contacttag">Contact Me</Link>
                </div>
            </div>

            <section className="mainimg">
            </section>

            <div>
                <div className="social">
                <h1 className={utilStyles.heading2Xl}>Contact Me!</h1>
                    <div className ="social" id="instagram">
                        <Link href="https://www.instagram.com/ratinavan/">
                            <h1>Instagram</h1>
                            <p>@Ratinavan</p>
                        </Link>
                    </div>
                    <div className ="social" id="twitter">
                        <Link href="https://twitter.com/ratinavan">
                            <h1>Twitter</h1>
                            <p>@Ratinavan</p>
                        </Link>
                    </div>
                    <div className ="social" id="discord">
                        <h1>Discord</h1>
                        <p>@Ratinavan</p>
                    </div>
                    <div className="social" id="email">
                        <Link href="mailto:ratinavnart@gmail.com">
                            <h1><u>Email</u></h1>
                            <p><u>ratinavanart@gmail.com</u></p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
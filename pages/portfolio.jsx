import React from "react";
import Image from "next/image";
import Link from "next/link";
import utilStyles from '../pages/styles/utils.module.css';

export default function Form(){
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
                    <Link href='/contact'>Contact Me</Link>
                </div>
            </div>
            
            <section className="mainimg">
            </section>

            <h1 className={utilStyles.heading2Xl}>Portfolio</h1>
        
            <div className="section" id="pfp">
            <h1>Profile Pictures</h1>
            <div class="scroll-container">
                <Image src="/images/pfp/8.jpg"
                    width={300}
                    height={300}
                    alt="a reference image"
                />
                <Image src="/images/pfp/17.jpg"
                    width={300}
                    height={300}
                    alt="a reference image"
                />
                <Image src="/images/pfp/15.jpg"
                    width={300}
                    height={300}
                    alt="a reference image"
                />
                <Image src="/images/pfp/13.jpg"
                    width={300}
                    height={300}
                    alt="a reference image"
                />
                <Image src="/images/pfp/12.jpg"
                    width={300}
                    height={300}
                    alt="a reference image"
                />
                <Image src="/images/pfp/7.PNG"
                    width={300}
                    height={300}
                    alt="a reference image"
                />
                <Image src="/images/pfp/9.PNG"
                    width={300}
                    height={300}
                    alt="a reference image"
                />
            </div>
        </div>
        
        <div class="section" id="headshots">
            <h1>Head Shots</h1>
            <div class="scroll-container">
                <Image
                    height ={400}
                    width = {300}
                    src="/images/headshot/15.PNG"
                    alt = "a reference picture"
                />
                <Image src="/images/headshot/13.PNG"
                    width={300}
                    height={400}
                    alt="a reference image"
                />
                <Image src="/images/headshot/14.PNG"
                    width={300}
                    height={400}
                    alt="a reference image"
                />
                <Image src="/images/headshot/16.PNG"
                    width={300}
                    height={400}
                    alt="a reference image"
                />
                <Image src="/images/pfp/2.PNG"
                    width={300}
                    height={300}
                    alt="a reference image"
                />
                <Image src="/images/pfp/1.PNG"
                    width={300}
                    height={300}
                    alt="a reference image"
                />
                <Image src="/images/pfp/3.PNG"
                    width={300}
                    height={300}
                    alt="a reference image"
                />
                <Image src="/images/pfp/4.PNG"
                    width={300}
                    height={300}
                    alt="a reference image"
                />
                <Image src="/images/pfp/6.PNG"
                    width={300}
                    height={300}
                    alt="a reference image"
                />
                <Image src="/images/pfp/5.PNG"
                    width={300}
                    height={300}
                    alt="a reference image"
                />
                <Image src="/images/headshot/18.PNG"
                    width={300}
                    height={300}
                    alt="a reference image"
                />
                <Image src="/images/headshot/2.PNG"
                    width={300}
                    height={300}
                    alt="a reference image"
                />
                <Image src="/images/headshot/1.PNG"
                    width={300}
                    height={300}
                    alt="a reference image"
                />
                <Image src="/images/headshot/3.PNG"
                    width={300}
                    height={300}
                    alt="a reference image"
                />
                <Image src="/images/headshot/4.PNG"
                    width={300}
                    height={300}
                    alt="a reference image"
                />
                <Image src="/images/headshot/5.PNG"
                    width={300}
                    height={300}
                    alt="a reference image"
                />
                <Image src="/images/headshot/6.PNG"
                    width={300}
                    height={300}
                    alt="a reference image"
                />
                <Image src="/images/headshot/7.PNG"
                    width={300}
                    height={300}
                    alt="a reference image"
                />
                <Image src="/images/headshot/8.PNG"
                    width={300}
                    height={400}
                    alt="a reference image"
                />
                <Image src="/images/headshot/9.PNG"
                    width={400}
                    height={300}
                    alt="a reference image"
                />
                <Image src="/images/headshot/11.PNG"
                    width={300}
                    height={300}
                    alt="a reference image"
                />
                <Image src="/images/headshot/12.PNG"
                    width={300}
                    height={300}
                    alt="a reference image"
                />
                <Image src="/images/headshot/17.jpg"
                    width={300}
                    height={400}
                    alt="a reference image"
                />
            </div>
        </div>

        <div class="section" id="halfbody">
            <h1>Half-bodies</h1>
            <div class="scroll-container">
                <Image src="/images/halfbody/1.PNG"
                    width={300}
                    height={300}
                    alt="a reference image"
                />
                <Image src="/images/halfbody/2.PNG"
                    width={300}
                    height={300}
                    alt="a reference image"
                />
                <Image src="/images/halfbody/3.PNG"
                    width={300}
                    height={300}
                    alt="a reference image"
                />
                <Image src="/images/halfbody/4.PNG"
                    width={300}
                    height={300}
                    alt="a reference image"
                />
                <Image src="/images/halfbody/5.PNG"
                    width={300}
                    height={300}
                    alt="a reference image"
                />
                <Image src="/images/halfbody/6.PNG"
                    width={400}
                    height={300}
                    alt="a reference image"
                />
                <Image src="/images/halfbody/8.PNG"
                    width={300}
                    height={400}
                    alt="a reference image"
                />
                <Image src="/images/halfbody/7.PNG"
                    width={300}
                    height={400}
                    alt="a reference image"
                />
            </div>
        </div>

        <div class="section" id="fullbody">
            <h1>Full-bodies</h1>
            <div class="scroll-container">
                <Image src="/images/fullbody/1.PNG"
                    width={300}
                    height={300}
                    alt="a reference image"
                />
                <Image src="/images/fullbody/2.PNG"
                    width={300}
                    height={300}
                    alt="a reference image"
                />
                <Image src="/images/fullbody/3.PNG"
                    width={300}
                    height={300}
                    alt="a reference image"
                />
                <Image src="/images/fullbody/5.PNG"
                    width={300}
                    height={400}
                    alt="a reference image"
                />
                <Image src="/images/fullbody/6.PNG"
                    width={300}
                    height={400}
                    alt="a reference image"
                />
                <Image src="/images/fullbody/8.PNG"
                    width={300}
                    height={300}
                    alt="a reference image"
                />
                <Image src="/images/fullbody/4.PNG"
                    width={300}
                    height={400}
                    alt="a reference image"
                />
                <Image src="/images/fullbody/9.PNG"
                    width={300}
                    height={400}
                    alt="a reference image"
                />
                <Image src="/images/fullbody/10.PNG"
                    width={300}
                    height={400}
                    alt="a reference image"
                />
                <Image src="/images/fullbody/11.PNG"
                    width={200}
                    height={300}
                    alt="a reference image"
                />
                <Image src="/images/fullbody/12.PNG"
                    width={300}
                    height={300}
                    alt="a reference image"
                />
            </div>
        </div>

        <div class="section" id="refsheet">
            <h1>Reference Sheets</h1>
            <div class="scroll-container">
                <Image src="/images/refpage/1.PNG"
                    width={300}
                    height={300}
                    alt="a reference image"
                />
                <Image src="/images/refpage/2.PNG"
                    width={300}
                    height={400}
                    alt="a reference image"
                />
                <Image src="/images/refpage/3.PNG"
                    width={300}
                    height={300}
                    alt="a reference image"
                />
                <Image src="/images/refpage/6.PNG"
                    width={300}
                    height={400}
                    alt="a reference image"
                />
                <Image src="/images/refpage/4.PNG"
                    width={300}
                    height={400}
                    alt="a reference image"
                />
                <Image src="/images/refpage/5.PNG"
                    width={300}
                    height={300}
                    alt="a reference image"
                />
                <Image src="/images/refpage/7.PNG"
                    width={300}
                    height={400}
                    alt="a reference image"
                />
            </div>
        </div>
        
        </div>
    )
}
import React from "react";
import Link from "next/link";
import Image from "next/image";
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

            <h1 className={utilStyles.heading2Xl}>Services</h1>

            <div class="section">
            <p><Link href='/form'><b><u>CLICK HERE FOR THE COMMISSION FORM</u></b></Link></p>
        </div>
        <div>
            <p>Here you can find all of my commission prices broken down for you to best be able to choose what you need!</p>
            <p>Prices listed are for <b>fully coloured and shaded work</b>, anything less will be given at a discounted rate.</p>
            <p>Prices will be listed in <b>GBP(&#163;)</b> and <b>USD($)</b> and <u>may be subject to change</u>.</p>
        </div>

        <div id="icon" class="section">
            <h1>Profile Pictures</h1>
            <p>I can make you a single profile picture, or matching ones for you and your friends!</p>
            <p>These icons can be coloured and have basic shading</p>
            <p class="price"><b>&#163;3/$4</b></p>
            <p><em>Add an extra <b>&#163;1/$1</b> for every additional icon!</em></p>
            <Image 
                height={300}
                width={300}
                src="/images/comref/pfp.PNG"
                alt="A silhouette of a person in a circle"
            />
        </div>

        <div id="headshot" class="section">
            <h1>Headshot</h1>
            <p>Pretty much what it says on the tin and will be cut off at the shoulders!</p>
            <p class="price"><b>&#163;20/$25</b></p>
            <Image 
                height={300}
                width={300}
                src="/images/comref/hs.PNG"
                alt="A silhouette of a person cutting off at the shoulders"
            />
        </div>

        <div id="waist" class="section">
            <h1>Half-body</h1>
            <p>Cuts off at the waist!</p>
            <p class="price"><b>&#163;35/$42</b></p>
            <Image 
                height={300}
                width={300}
                src="/images/comref/hb.PNG"
                alt="A silhouette of a person cutting off at the waist"
            />
        </div>
        
        <div id="fullbody" class="section">
            <h1>Full body</h1>
            <p>Can be done in dynamic poses, or just straight-on!</p>
            <p class="price"><b>&#163;50/$60</b></p>
            <Image 
                height={300}
                width={300}
                src="/images/comref/fb.PNG"
                alt="A silhouette of a person"
            />
        </div>
        
        <div id="reference" class="section">
            <h1>Reference Sheet</h1>
            <p>I can make a reference sheet for your character :D</p>
            <p>Includes a fullbody, up to two headshots, and any accessories/details your character has</p>
            <p class="price"><b>&#163;70/$87</b></p>
            <Image 
                height={300}
                width={300}
                src="/images/comref/refpage.PNG"
                alt="A silhouette of a person as well as some accessories, and two headshots"
            />
        </div>
        
        <div id="OC" class="section">
            <h1>OC Design</h1>
            <p>I can create you an Original Character based on any aesthetic/show/item you give me!</p>
            <p>Includes a fullbody, up to two headshots, and any accessories/details I will give the character</p>
            <p class="price"><b>&#163;70/$87</b></p>
            <Image 
                height={300}
                width={300}
                src="/images/comref/refpage.PNG"
                alt="A silhouette of a person as well as some accessories, and two headshots"
            />
        </div>

        </div>
    )
}
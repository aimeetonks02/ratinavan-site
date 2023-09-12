import { setType, noChara, setStyle } from './price'
import { useState } from 'react'

export default function FormStructure(){    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [type, setType] = useState('')
    const [number, setNumber] = useState('')
    const [style, setStyle] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Sending')

        let data = {
            name,
            email,
            type,
            number,
            style
        }

        console.log(data)
        fetch('/api/api_four', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            console.log('Response Recieved')
            if (res.status === 200){
                console.log('Response Success')
                setSubmitted(true)
                setName('')
                setEmail('')
                setType('')
                setNumber('')
                setStyle('')
            }
        })
    }
    return (
        <>
        <form className="section">
            <formGroup className="item">
                <label htmlFor="name">Name:</label><input type="text" name="name" onChange={(e)=>{setName(e.target.value)}}/>
            </formGroup>

            <formGroup className="item">
                <label htmlFor="email">Email:</label><input type="email" name="email" onChange={(e)=>{setEmail(e.target.value)}}/>
            </formGroup>

            <formGroup className="item">
                <h2><u>Type of drawing:</u></h2>
                <input type="radio" id="Profile Pic" name="type" onChange={(e)=>{setType("Profile Pic")}}/><label htmlFor="type">Profile Picture(s)</label><br/>
                <input type="radio" id="Headshot" name="type" onChange={(e)=>{setType("Headshot")}}/><label htmlFor="type">Headshot</label><br/>
                <input type="radio" id="Halfbody" name="type" onChange={(e)=>{setType("Halfbody")}}/><label htmlFor="type">Halfbody</label><br/>
                <input type="radio" id="Fullbody" name="type" onChange={(e)=>{setType("Fullbody")}}/><label htmlFor="type">Fullbody</label><br/>
                <input type="radio" id="Reference Page" name="type" onChange={(e)=>{setType("Reference Page")}}/><label htmlFor="type">OC Reference Page</label><br/>
                <input type="radio" id="Make OC" name="type" onChange={(e)=>{setType("Make me an OC")}}/><label htmlFor="type">Make Me a Character</label>
            </formGroup>

            <formGroup className="item">
                <h2><u>Number of Characters:</u></h2>
                <input type="radio" id="n1" name="number" onChange={(e)=>{setNumber("1 Character")}}/><label htmlFor="number">1 Character</label><br/>
                <input type="radio" id="n2" name="number" onChange={(e)=>{setNumber("2 Characters")}}/><label htmlFor="number">2 Characters</label><br/>
                <input type="radio" id="n3" name="number" onChange={(e)=>{setNumber("3 Characters")}}/><label htmlFor="number">3 Characters</label><br/>
                <input type="radio" id="n4" name="number" onChange={(e)=>{setNumber("4 Characters or more")}}/><label htmlFor="number">4 or more Characters</label>
            </formGroup>

            <formGroup className="item">
                <h2><u>Colouring Style:</u></h2>
                <input type="radio" id="s1" name="style" onChange={(e)=>{setStyle("Sketch")}}/><label htmlFor="style">Sketch</label><br/>
                <input type="radio" id="s2" name="style" onChange={(e)=>{setStyle("Lineart")}}/><label htmlFor="style">Lineart</label><br/>
                <input type="radio" id="s3" name="style" onChange={(e)=>{setStyle("Flat Colour")}}/><label htmlFor="style">Flat Colour</label><br/>
                <input type="radio" id="s4" name="style" onChange={(e)=>{setStyle("Fully Shaded")}}/><label htmlFor="style">Fully Shaded</label>
            </formGroup>

            <formGroup className="item">
                <h2><u>Estimated Price:</u></h2>
                <h2 id="price">£0</h2>
            </formGroup>

            <formGroup className="item">
                <input type="submit" onClick={(e)=>{handleSubmit(e)}}/>
            </formGroup>

        </form>
    </>
    )
}
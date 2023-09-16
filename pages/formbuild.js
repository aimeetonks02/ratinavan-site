import { setSize, noChara, setStyle, getPrice } from './price'
import { useState } from 'react'

export default function FormStructure(){    
    // console.log(useState(''))
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
                setStyle('');
            }
        })
    }
    return (
        <>
        <form className="section">
            <div className="item">
                <label htmlFor="name">Name:</label><input type="text" name="name" onChange={(e)=>{setName(e.target.value)}}/>
            </div>

            <div className="item">
                <label htmlFor="email">Email:</label><input type="email" name="email" onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>

            <div className="item">
                <h2><u>Type of drawing:</u></h2>
                <input type="radio" id="t1" name="type" onChange={(e)=>{setType("Profile Picture")}}/><label htmlFor="type">Profile Picture(s)</label><br/>
                <input type="radio" id="t2" name="type" onChange={(e)=>{setType("Headshot")}}/><label htmlFor="type">Headshot</label><br/>
                <input type="radio" id="t3" name="type" onChange={(e)=>{setType("Halfbody")}}/><label htmlFor="type">Halfbody</label><br/>
                <input type="radio" id="t4" name="type" onChange={(e)=>{setType("Fullbody")}}/><label htmlFor="type">Fullbody</label><br/>
                <input type="radio" id="t5" name="type" onChange={(e)=>{setType("Reference Page")}}/><label htmlFor="type">OC Reference Page</label><br/>
                <input type="radio" id="t6" name="type" onChange={(e)=>{setType("Make me an OC")}}/><label htmlFor="type">Make Me a Character</label>
            </div>

            <div className="item">
                <h2><u>Number of Characters:</u></h2>
                <input type="radio" id="n1" name="number" onChange={(e)=>{setNumber("1 Character")}}/><label htmlFor="number">1 Character</label><br/>
                <input type="radio" id="n2" name="number" onChange={(e)=>{setNumber("2 Characters")}}/><label htmlFor="number">2 Characters</label><br/>
                <input type="radio" id="n3" name="number" onChange={(e)=>{setNumber("3 Characters")}}/><label htmlFor="number">3 Characters</label><br/>
                <input type="radio" id="n4" name="number" onChange={(e)=>{setNumber("4 Characters or more")}}/><label htmlFor="number">4 or more Characters</label>
            </div>

            <div className="item">
                <h2><u>Colouring Style:</u></h2>
                <input type="radio" id="s1" name="style" onChange={(e)=>{setStyle("Sketch")}}/><label htmlFor="style">Sketch</label><br/>
                <input type="radio" id="s2" name="style" onChange={(e)=>{setStyle("Lineart")}}/><label htmlFor="style">Lineart</label><br/>
                <input type="radio" id="s3" name="style" onChange={(e)=>{setStyle("Flat Colour")}}/><label htmlFor="style">Flat Colour</label><br/>
                <input type="radio" id="s4" name="style" onChange={(e)=>{setStyle("Fully Shaded")}}/><label htmlFor="style">Fully Shaded</label>
            </div>

            <div className="item">
                <h2><u>Calculate Estimated Price:</u></h2>
                <h2 id="price">£0</h2>
                {/* <button onClick={getPrice()}>Calculate</button> */}
            </div>

            <div className="item">
                <input type="submit" onClick={(e)=>{handleSubmit(e)}}/>
            </div>

        </form>
    </>
    )
}

// function calculate(){
//     let price = 0.00;
//     let type = data.type;
//     let number = data.number;
//     let style = data.style;
    
//     if (type == 'Profile Picture'){
//         setSize(3);
//     }
//     else if (type == 'Headshot'){
//         setSize(20);
//     }
//     else if (type == 'Halfbody'){
//         setSize(35);
//     }
//     else if (type == 'Fullbody'){
//         setSize(50);
//     }
//     else if (type == 'Reference Page' || type == 'Make me an OC'){
//         setSize(70);
//     }
//     else{
//         setSize(0);
//     }

//     if (number == '1 Character')

//     return price;
// }
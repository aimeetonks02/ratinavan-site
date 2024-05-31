import { setSize, setChar, setRender} from './pricecalc'
import { toScreen } from './pricecalc'
import { useState } from 'react'

export default function FormStructure(){    
    // console.log(useState(''))
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [type, setType] = useState('')
    const [number, setNumber] = useState('')
    const [style, setStyle] = useState('')
    const [submitted, setSubmitted] = useState(false)

    let price = 0;

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
            <div className="item">
                <label htmlFor="name">Name:</label><input type="text" name="name" onChange={(e)=>{setName(e.target.value)}} required/>
            </div>

            <div className="item">
                <label htmlFor="email">Email:</label><input type="email" name="email" onChange={(e)=>{setEmail(e.target.value)}} required/>
            </div>

            <div className="item">
                <h2><u>Type of drawing:</u></h2>
                <input type="radio" id="t1" name="type" onClick={(e)=>{setType("Profile Picture")}} onChange={() => setSize(1)}/><label htmlFor="type">Profile Picture(s)</label><br/>
                <input type="radio" id="t2" name="type" onClick={(e)=>{setType("Headshot")}} onChange={() => setSize(2)}/><label htmlFor="type">Headshot</label><br/>
                <input type="radio" id="t3" name="type" onClick={(e)=>{setType("Halfbody")}} onChange={() => setSize(3)}/><label htmlFor="type">Halfbody</label><br/>
                <input type="radio" id="t4" name="type" onClick={(e)=>{setType("Fullbody")}} onChange={() => setSize(4)}/><label htmlFor="type">Fullbody</label><br/>
                <input type="radio" id="t5" name="type" onClick={(e)=>{setType("Reference Page")}} onChange={() => setSize(5)}/><label htmlFor="type">OC Reference Page</label><br/>
                <input type="radio" id="t6" name="type" onClick={(e)=>{setType("Make me an OC")}} onChange={() => setSize(6)}/><label htmlFor="type">Make Me a Character</label>
                {/* <input type='hidden' id='t0' name='type' onChange={() => setSize(0)}/> */}
            </div>

            <div className="item">
                <h2><u>Number of Characters:</u></h2>
                <input type="radio" id="n1" name="number" onClick={(e)=>{setNumber("1 Character")}} onChange={() => setChar(1)}/><label htmlFor="number">1 Character</label><br/>
                <input type="radio" id="n2" name="number" onClick={(e)=>{setNumber("2 Characters")}} onChange={() => setChar(2)}/><label htmlFor="number">2 Characters</label><br/>
                <input type="radio" id="n3" name="number" onClick={(e)=>{setNumber("3 Characters")}} onChange={() => setChar(3)}/><label htmlFor="number">3 Characters</label><br/>
                <input type="radio" id="n4" name="number" onClick={(e)=>{setNumber("4 Characters or more")}} onChange={() => setChar(4)}/><label htmlFor="number">4 or more Characters</label>
            </div>

            <div className="item">
                <h2><u>Colouring Style:</u></h2>
                <input type="radio" id="s1" name="style" onClick={(e)=>{setStyle("Sketch")}} onChange={() => setRender(1)}/><label htmlFor="style">Sketch</label><br/>
                <input type="radio" id="s2" name="style" onClick={(e)=>{setStyle("Lineart")}} onChange={() => setRender(2)}/><label htmlFor="style">Lineart</label><br/>
                <input type="radio" id="s3" name="style" onClick={(e)=>{setStyle("Flat Colour")}} onChange={() => setRender(3)}/><label htmlFor="style">Flat Colour</label><br/>
                <input type="radio" id="s4" name="style" onClick={(e)=>{setStyle("Fully Shaded")}} onChange={() => setRender(4)}/><label htmlFor="style">Fully Shaded</label>
            </div>

            <div className="item">
                {/* <h2><u>Calculate Estimated Price:</u></h2> */}
                <h2>Estimated Price: </h2>
                <h2 id='price' className='price'>{toScreen()}</h2>
            </div>

            <div className="item">
                <input type="submit" onClick={(e)=>{handleSubmit(e)}}/>
            </div>
        </form>
    </>
    )
}
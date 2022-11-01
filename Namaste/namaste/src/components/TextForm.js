import React, { useState } from 'react';


export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () => {
        console.log("Lowercase was clicked" + text);
        let newText = text.italics();
        setText(newText);
    }
    const handleItClick = () => {
        console.log("Italic was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }

    const handleOnChange = (event) => {
        console.log("there WAS SOMEthing!");
        setText(event.target.value);
    }

     // Declare a new state variable, which we'll call "text"
  const [text, setText] = useState('');

    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            {/* <div className="mb-5"> */}
            {/* <label for="myBox" className="form-label">
                    Type text here
                </label> */}
            {/* <textarea className="form-control" id="myBox" row="" /> */}
            {/* </div> */}

            {/* <button type="submit" className="btn btn-primary">
                Submit
            </button> */}
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'gray':'white'}} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <div className="btn btn-primary" onClick={handleUpClick}>Change to UpperCase</div>
            <div className="btn btn-primary mx-2" onClick={handleLoClick}>Change to LowerCase</div>
            <div className="btn btn-primary mx-2" onClick={handleItClick}>Change to Italic</div>
            <div onClick={speak} className="btn btn-warning mx-2">Speak</div>
           


        </div>
        <div className="container my-3" >
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters are written here.</p>
            <p>It will take average person {0.008 * text.split(" ").length} min to read these text</p>
            <h2>Preview of Text</h2>
            <p>{text}</p>
        </div>
        </>
    );
}

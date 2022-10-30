import React, { useState } from 'react';


export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        console.log("there WAS SOMEthing!");
        setText(event.target.value);
    }

     // Declare a new state variable, which we'll call "text"
  const [text, setText] = useState('Enter Text here');

    return (
        <div>
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
                <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <div className="btn btn-primary" onClick={handleUpClick}>Change to UpperCase</div>
        </div>
    );
}

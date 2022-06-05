import React, { useState } from 'react'

export default function TextForm(props) {


    const [text, setText] = useState('');
    // const [dark, setdark] = useState(false);

    const handleUPClick = () => {
        // console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted To Uppercase", "success");
    }
    const handleLOClick = () => {
        // console.log("Uppercase was clicked " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted To Lowercase", "success");
    }
    const handleReverseString = () => {
        let newText = "";
        for (let i = text.length - 1; i >= 0; i--) {
            newText += text[i];
        }
        setText(newText);
        props.showAlert("Your string has been Reversed", "success");
    }
    const handleCopy = () => {
        // console.log("Copied!!!");
        // var text = document.getElementById("myBox");
        // text.select();
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied to clipboard", "success");
    }
    // const handleLightThemes = () => {
    //     document.querySelector('body').style.backgroundColor = "white";
    //     document.querySelector('body').style.color = "green";
    // }
    // const handleDarkThemes = () => {
    //     document.querySelector('body').style.backgroundColor = "black";
    //     document.querySelector('body').style.color = "red";
    // }
    const handleClear = () => {
        setText("");
    }
    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }

    return (
        <>
            <div className="container" style={{ color: props.mode === `dark` ? `white` : `black` }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === `dark` ? `#13466e` : `white`, color: props.mode === `dark` ? `white` : `black` }} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleUPClick}>Convert To Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleLOClick}>Convert To Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleReverseString}>Reverse String</button>
                {/* <button className="btn btn-primary mx-2 my-1" onClick={handleDarkThemes}>Dark Themes</button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleLightThemes}>Light Themes</button> */}
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>To Copy Click Here</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleClear}>Clear Text Area</button>
            </div>
            <div className="container my-2" style={{ color: props.mode === `dark` ? `white` : `black` }}>
                <h2>Your Text Summary</h2>
                <p>{text.split(/\s+/).filter((element) => {return element.length !==0}).length} words and {text.length} characters</p>
                <p>It will take around {0.008 * text.split(" ").filter((element) => {return element.length !==0}).length} Minutes to read</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : `Nothing To Preview`}</p>
            </div>
        </>
    )
}
import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
   
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };
  const handleLoClick = () => {
    
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");

  };
  const handleClearText = () => {
    
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  };
  const handleCopy = () => {
    
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges(); 
    props.showAlert("Copied to clipboard", "success");
  };
  const handleRamovespaces = () => {
    let remtex = text.replace(/\s+/g, " ").trim();
    setText(remtex);
    props.showAlert("Extra spaces removed", "success");
  };
  const handleRevText = () => {
    var newString = "";
    for (var i = text.length - 1; i >= 0; i--) {
        newString += text[i];
    }
   
    setText(newString);
    props.showAlert("reverse string", "success");
  };

  const handleOnChange = (event) => {
    
    setText(event.target.value);
  };
  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "#393c3d" : " white" }}
      >
        <h1 className="center">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#393c3d",
              color: props.mode === "light" ? "#393c3d" : " white",
            }}
            id="myBox"
            rows="3"
          ></textarea>
        </div>
        <button  disabled = {text.length===0} className="btn btn-primary mb-2 ms-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button  disabled = {text.length===0} className="btn btn-primary mb-2 ms-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button  disabled = {text.length===0} className="btn btn-primary mb-2 ms-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button  disabled = {text.length===0} className="btn btn-primary mb-2 ms-2" onClick={handleClearText}>
          ClearText
        </button>
        <button disabled = {text.length===0}  className="btn btn-primary mb-2 ms-2" onClick={handleRevText}>
          revrse Text
        </button>
        <button disabled = {text.length===0} 
          className="btn btn-primary mb-2 ms-2"
          onClick={handleRamovespaces}
        >
          remove extra white spaces
        </button>
      </div>
      <div
        className="container mt-3"
        style={{ color: props.mode === "light" ? "#393c3d" : " white" }}
      >
        <h1>Your text summary</h1>
        <p>
          {text.split(/\s+/).length - 1} words and {text.length} characters
        </p>
        <h2>Preview</h2>
        <p className="mt-3  ps-2">{text.length>0?text:"Enter something in the textbox to preview it here"}</p>
      </div>
    </>
  );
  
}



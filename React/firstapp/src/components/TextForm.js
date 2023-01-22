import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Upper case clicked bro" + text);
        let newtext = text.toUpperCase();
        setText(newtext)
    }
    
    const handlelowClick = () =>{
        let newtext = text.toLowerCase();
        setText(newtext)
    }
    
    const handleclearClick = () =>{
        let newtext = "";
        setText(newtext)
    }
    
 
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }

    const [text, setText] = useState("");
   
    return (
    <>
    <div className="container">
      <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
       </div>
       <button className="btn btn-primary" onClick={handleUpClick}>Convert to upper case</button>
       <button className="btn btn-primary mx-3" onClick={handlelowClick}>Convert to lower case</button>
       <button className="btn btn-primary mx-3" onClick={handleclearClick}>Clear Text</button>
    </div>

    <div className="container my-3">
      <h3>Your text summary</h3>
      <p>{text.split(" ").length} words and {text.length} character</p>
      <p>{0.008 * text.split(" ").length} minute read</p>
      <h3>Preview Text</h3>
      <p>{text}</p>
    </div>
    
    </>
      )
}

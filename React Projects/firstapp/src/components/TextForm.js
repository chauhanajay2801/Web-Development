import React, {useState} from 'react'



export default function TextForm(props) {
  
    const handleUpClick = () =>{
        // console.log("Upper case clicked bro" + text);
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("Converted to upper case!","success");
      }
      
      const handlelowClick = () =>{
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showAlert("Converted to lower case!","success");
      }
      
      const handleclearClick = () =>{
        let newtext = "";
        setText(newtext)
        props.showAlert("Text Cleared!","success");
      }
      
      const handleextraSpaces = () =>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "))
        props.showAlert("Extra spaces removed!","success");
      }
      
      
      const handleOnChange = (event) =>{
        setText(event.target.value);
      }
      
      const handleCopy = (event) =>{
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied!","success");

    }

    const [text, setText] = useState("");
   
    return (
    <>
    <div className="container" style= {{color:props.mode==='dark'?'white':'#242c52'}}>
      <h2> Enter your text below</h2>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white' , color:props.mode==='dark'?'white':'grey' }} id="myBox" rows="8"></textarea>
       </div>
       <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to upper case</button>
       <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlelowClick}>Convert to lower case</button>
       <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleclearClick}>Clear Text</button>
       <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
       <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleextraSpaces}>Remove Extra Spaces</button>
    </div>

    <div className="container my-3"  style= {{color:props.mode==='dark'?'white':'#242c52'}}>
      <h3>Your text summary</h3>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} character</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minute read</p>
      <h3>Preview Text</h3>
      <p>{text.length>0?text:"Enter the text to preview"}</p>
    </div>
    </>
      )
}

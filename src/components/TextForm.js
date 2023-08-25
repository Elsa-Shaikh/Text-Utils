import React, {useState} from "react";

export default function TextForm(props) {
    const[text, setText] = useState();
 
  
    const handleUpClick = ()=>{
        //   console.log("You Clicked the button"+text);
       // console.log(text);
        if(text === undefined){
            props.showAlert("Write Something in below textbox...","warning");
          }else{
            let newText = text?.toUpperCase();
            setText(newText);
          props.showAlert("Converted to Uppercase","success");
          }
        }
    const handleLoClick = ()=>{
      if(text === undefined){
        props.showAlert("Write Something in below textbox...","warning");
      }else{      
          let newText = text?.toLowerCase();
          setText(newText);
          props.showAlert("Converted to Lowercase","success");
      }
        }
    const handleCap = ()=>{
      if(text === undefined){
        props.showAlert("Write Something in below textbox...","warning");
      }else{
      let newText = text[0]?.toUpperCase()+ text?.substring(1);
        setText(newText);
        props.showAlert("Converted to Capitalize","success");
      }
  }
    const handleClear = ()=>{
      if(text === undefined){
        props.showAlert("Write Something in below textbox...","warning");
      }else{
      let newText = '';
        setText(newText);
        props.showAlert("Clear the text","success");
      }}
  
    const handleOnChange = (e)=>{
        // console.log(" On Change");
        setText(e.target.value);
  }
  const handleCopy = ()=>{
        console.log("I am copy");
        if(text === undefined){
          props.showAlert("Write Something in below textbox...","warning");
        }else{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy the text","success");
        }
      }

  const handleSpace = ()=>{
    if(text === undefined){
      props.showAlert("Write Something in below textbox...","warning");
    }else{

    let newText = text?.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Remove Extra Spaces","success");
    }    
  }

// const[text, setText] = useState("Enter Text Here");
// useState("Change State"); // correct way
//text = "Change" // wrong way to change the state
    return (
   <>   
   <div className="container my-3" style={{
          color:props.mode === 'dark'?'white':'#042743'
        }}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{
          backgroundColor:props.mode === 'dark'?'grey':'white',
          color:props.mode === 'dark'?'white':'#042743'
        }}></textarea>
      </div>
      <button className="btn btn-dark mx-3" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-dark mx-3" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-dark mx-3" onClick={handleCap}>Convert to Capitalise</button>
      <button className="btn btn-dark mx-3" onClick={handleSpace}>Remove Spaces</button>
      <button className="btn btn-dark mx-3" onClick={handleCopy}>Copy</button>
      <button className="btn btn-dark mx-3" onClick={handleClear}>Clear</button>
      <div className="container my-4">
    <h2>Your Text Summary</h2>
    <p>{text?.length} Charcters</p>
    <p>{text?.split(" ").length} Words and </p>
     <p>{0.008 * (text?.split(" ").length)} Minutes Read</p>  
     <h2>Preview</h2> 
     <p>{text?.length > 0 ?text:"Preview the Text Here" }</p>   
    </div> 
    </div>
    </>
  );
}

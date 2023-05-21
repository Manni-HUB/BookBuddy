import React,{useState} from 'react'

export default function Textform(props) {
    const handleupClick = ()=>{
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to UpperCase", "success")
    }
    const handledownClick = ()=>{
      let newtext = text.toLowerCase();
      setText(newtext);
      props.showAlert("Converted to LowerCase", "success")
    }  
    const handleonChange = (event)=>{
        setText(event.target.value);
    }
    const speak = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
      props.showAlert("Now Speaking", "success")
    }
    const downloadtxt = () => {
        const txt = document.createElement("a");
        const file = new Blob([text], {
          type: "text/plain"
        });
        txt.href = URL.createObjectURL(file);
        txt.download = 'myFile.txt';
        txt.click();
        props.showAlert("Downloading", "success")
    }
    const [text, setText] = useState('');
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3"> 
        <textarea className="form-control" value = {text} onChange={handleonChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleupClick}>Convert To UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handledownClick}>Convert To LowerCase</button>
        <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
        <button className="btn btn-warning mx-2" onClick={downloadtxt}>Download Text</button>
    </div>
    <div className="container my-2">
      <h2>Your Text Summary</h2>
      <p>{text.replace(/\n/g, " ").split(' ').filter(value => value !=="").length} words</p>
      <p>{text.trim().length } characters</p>
      <p>{0.008 * text.replace(/\n/g, " ").split(' ').filter(value => value !=="").length} minutes reading time</p>
    </div>
    </>
  ) 
}

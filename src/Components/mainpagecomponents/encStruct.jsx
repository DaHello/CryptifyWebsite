import { EncSubmit } from "./encButton";
import "../../styles/mainPage.css";

import React, { useState } from "react";
import  { getTextEnc } from './edcLogic.js';


export const EncForm = () =>{
//text, default state | setText, "new" state
    const [text, setText] = useState('');
    const [key, setKey] = useState('');
    const [outPutT, setOPT] = useState('');
    

    const handleSubmit = (e) =>{
        //doesnt allow the page to reset
        e.preventDefault();
        
        const text_key = {text,key};
        console.log(text_key)
        getTextEnc(text_key)

    }


    //onChange(the value you want to change)=>setText(current value. target is the current input, value is the current value in that input)

    return (
        <form className="genForm" onSubmit={handleSubmit}>
            <label hmtlfor = "non-defined2">Place holder for Encryption</label>
 
            <textarea id = "non-defined2" type="text"  className="ioBox" required value={text} onChange={(text)=>setText(text.target.value)}></textarea>
            
            <label htmlfor ="key">key</label>

            <input id = "key" type="text"  className="keyBox" required  value={key} onChange={(key)=>setKey(key.target.value)}></input>

            <label hmtlfor = "maybe-output2"  >Place holder for output</label>

            <textarea type="text" id ="maybe-output2" className="ioBox"></textarea>

            <EncSubmit></EncSubmit>
            {/* <p>{text}</p> */}
            <p>{key}</p>
        </form>
    );

}
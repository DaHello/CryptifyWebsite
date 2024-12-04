
import { useState } from "react";
import { EncSubmit } from "./encButton";
import sjcl from "sjcl";
import { addLogByUser } from "../../actionsDB";

function toBitArrayCodec(bytes){
  var out = [], i, tmp=0;
  for (i=0; i<bytes.length; i++ ){
    tmp = tmp << 8 | bytes[i];
    if ((i&3) ===3){
      out.push(tmp)
      tmp = 0
    }
  }
  if (i&3){
    out.push(sjcl.bitArray.partial(8*(1&3), tmp))
  }
  return out
}


function frombitArrayCodec(arr) { 
  var out = [], bl = sjcl.bitArray.bitLength(arr), i, tmp;
  for (i=0; i<bl/8; i++){
    if((i&3)===0){
      tmp = arr[i/4];
    }
    out.push(tmp>>>24);
    tmp <<=8;
  }
  return out;
}



export const EncFileBox = ({currentUser}) => {
  const [file, setFile] = useState(null);

  const [key, setKeyFile] = useState("");
  const [encryptedFileUrl, setEncryptedFileUrl] =useState();
  const [fileName,setFileName] = useState("")
  function readFile(e) {


    

    e.preventDefault(); 
    if (file) {
      const reader = new FileReader();
      reader.onload = async (e) => {
       
        const text = e.target.result;

        
    
    



        if(file.type.startsWith('text')){
          
          
          console.log(text)
          const dataEncrypted = sjcl.encrypt(key,text)
      
          console.log(dataEncrypted)
          const dataDecrypted = sjcl.decrypt(key,dataEncrypted)
          console.log(dataDecrypted) // verify can decrypt
          const blob = new Blob([dataEncrypted], {type: file.type})
          setFileName(file.name);

          if (currentUser.username) { // if signed in:
            //console.log(currentUser); //test
            addLogByUser(currentUser, `${currentUser.username} encrypted a text file`); // add log for current user to db.json
          }

          const url = URL.createObjectURL(blob)
          setEncryptedFileUrl(url)
      

        } else {

          const bytes = new Uint8Array(text)
          const bits = toBitArrayCodec(bytes)
          const base64Data = sjcl.codec.base64.fromBits(bits)
          const dataEncrypted = sjcl.encrypt(key,base64Data)
      
          const blob = new Blob([dataEncrypted], {type: file.type})
          setFileName(file.name);

          if (currentUser.username) { // if signed in:
            //console.log(currentUser); //test
            addLogByUser(currentUser, `${currentUser.username} encrypted a file`); // add log for current user to db.json
          }

          const url = URL.createObjectURL(blob)
          setEncryptedFileUrl(url)
        }   

      };
      if(file.type.startsWith('text')){
        reader.readAsText(file); 
      }else{
        reader.readAsArrayBuffer(file)
      }

      
      
    } else {
      alert("No file selected");
    }
  }


  return (
    <div className="fileHandlerBox">
      <form onSubmit={readFile} className ="formBox">
        <h2>File Encryption</h2>

        <input
          className="Browse"
          type="file"
          htmlFor="fileEnc"
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
        ></input>
        <label htmlFor="inputKey">Key</label>

        <input  id="inputKey" placeholder="Your password goes here..." className="inputKey" type="text" required value={key} onChange={(e) =>  setKeyFile(e.target.value)} ></input>

  

        <EncSubmit></EncSubmit>
                
        <a href={encryptedFileUrl} download={fileName} style={{color:encryptedFileUrl ? "black":"rgb(103, 103, 103)", textDecoration:encryptedFileUrl ? 
          "none":"none", backgroundColor:encryptedFileUrl ? "rgb(231, 208, 63)":"rgb(46, 46, 46)",}}>
            Download Encrypted File
        </a>

      
      </form>
          <div className="instructions">
            <h2>Instructions for file Encryption</h2>
            <p>Please use a strong password when encrypting files.</p>
            <p>Files will be available to download after encryption; a password is required.</p>
            <p>Files bigger than 5MB may result in unexpected behavior.</p>
            <p>Accepted file formats: JPG, PNG, TXT ...</p>
            
          </div>
    </div>
  );
};

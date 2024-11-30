
import { useState } from "react";
import { EncSubmit } from "./encButton";
import sjcl from "sjcl";

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







export const EncFileBox = () => {
  const [file, setFile] = useState(null);

  const [key, setKeyFile] = useState("");
  const [encryptedFileUrl, setEncryptedFileUrl] =useState();
  const [fileName,setFileName] = useState("")
  function readFile(e) {

    const password = {key}
    

    e.preventDefault(); 
    if (file) {
      const reader = new FileReader();
      reader.onload = async (e) => {
       
        const text = e.target.result;

        
    
    
        
        console.log(password.key)


        if(file.type.startsWith('text')){
          console.log(text)
          const dataEncrypted = sjcl.encrypt(key,text)
      
          console.log(dataEncrypted)
          const dataDecrypted = sjcl.decrypt(key,dataEncrypted)
          console.log(dataDecrypted)
          const blob = new Blob([dataEncrypted], {type: file.type})
          setFileName(file.name);

          const url = URL.createObjectURL(blob)
          setEncryptedFileUrl(url)
      
  

        }else{
          console.log(text, "when not text")
          const bytes = new Uint8Array(text)
          const bits = toBitArrayCodec(bytes)
          const base64Data = sjcl.codec.base64.fromBits(bits)
          const dataEncrypted = sjcl.encrypt(key,base64Data)
      
          console.log(dataEncrypted)
          // const dataDecrypted = sjcl.decrypt(key,dataEncrypted)
          // console.log(dataDecrypted)




          


          const blob = new Blob([dataEncrypted], {type: file.type})
          setFileName(file.name);

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
        <label for="inputKey">Key</label>

        <input  id="inputKey" placeholder="Your password goes here..." className="inputKey" type="text" required value={key} onChange={(e) =>  setKeyFile(e.target.value)} ></input>

  

        <EncSubmit></EncSubmit>
                
        <a href={encryptedFileUrl} download={fileName}>
            Download Encrypted File
        </a>
      
      </form>
    </div>
  );
};

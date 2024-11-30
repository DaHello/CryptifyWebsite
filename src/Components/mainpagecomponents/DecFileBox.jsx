
import { useState } from "react";
import { DecSubmit } from "./decButton";
import sjcl from "sjcl";




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

export const EdcFileBox = () => {
  
  const [file, setFile] = useState(null);

  const [key, setKeyFileDec] = useState("");
  const [decryptedFileUrl, setDecryptedFileUrl] = useState();
  const [fileName, setFileName] = useState("");
  function readsFile(e) {
    
    e.preventDefault();
    const password = {key}
    if (file) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const decData = e.target.result;
        console.log(password.key)

      

  
        console.log(decData, ": decData")

        if(file.type.startsWith('text')){
          const dataDecrypted = sjcl.decrypt(key, decData)
          console.log(dataDecrypted);
          const blob = new Blob([dataDecrypted], { decData: file.type });
          setFileName(file.name);

          const url = URL.createObjectURL(blob);
          setDecryptedFileUrl(url);
        
       
        }else{

          
          const dataDecrypted64 = sjcl.decrypt(key, decData)

          const dataDecrypted = sjcl.codec.base64.toBits(dataDecrypted64)
          const byteNumbers = frombitArrayCodec(dataDecrypted)
          const byteArray = new Uint8Array(byteNumbers)
          console.log(byteArray)


     
          console.log(byteArray);
          const blob = new Blob([byteArray], { type : file.type });
          setFileName(file.name);

          const url = URL.createObjectURL(blob);
          setDecryptedFileUrl(url);
        

        }
      
      

      };
      if(file.type.startsWith('text')){
        reader.readAsText(file);
      }else{

        reader.readAsText(file)
      }
      
    } else {
      alert("No file selected");
    }
  }


  return (
      <div className="fileHandlerBox">
        <form onSubmit={readsFile} className="formBox">
          <h2>File Decryption</h2>
          <input
            className="Browse"
            type="file"
            hmtlFor="fileDec"
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          ></input>

          <label for="inputKey">Key</label>
          <input
          placeholder="Your password goes here..."
            id ="inputKey" className="inputKey"
            type="text"
                     required
               value={key}
   
            onChange={(e) => {
              setKeyFileDec(e.target.value);
            }}
         
          ></input>


          <DecSubmit></DecSubmit>

          
          <a href={decryptedFileUrl} download={fileName}>
            Download Decrypted File
          </a>

        </form>
      </div>
  );
}

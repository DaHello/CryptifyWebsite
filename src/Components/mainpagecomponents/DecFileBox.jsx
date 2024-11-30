
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

    if (file) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const decData = e.target.result;


      

  


        if(file.type.startsWith('text')){
          try{
            const dataDecrypted = sjcl.decrypt(key, decData)
            console.log(dataDecrypted);
            const blob = new Blob([dataDecrypted], { decData: file.type });
            setFileName(file.name);

            const url = URL.createObjectURL(blob);
            setDecryptedFileUrl(url);
          }catch(error){
            alert("Please, make sure you are using the correct password")
          }

        
       
        }else{

          try{
          const dataDecrypted64 = sjcl.decrypt(key, decData)

          const dataDecrypted = sjcl.codec.base64.toBits(dataDecrypted64)
          const byteNumbers = frombitArrayCodec(dataDecrypted)
          const byteArray = new Uint8Array(byteNumbers)
   


     

          const blob = new Blob([byteArray], { type : file.type });
          setFileName(file.name);

          const url = URL.createObjectURL(blob);
          setDecryptedFileUrl(url);
          }catch(error){
            alert("Please, make sure you are using the correct password")
          }

        

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
            htmlFor="fileDec"
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          ></input>

          <label htmlfor="inputKey">Key</label>
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

          
          <a href={decryptedFileUrl} download={fileName} style={{color:decryptedFileUrl ? "black":"rgb(103, 103, 103)", textDecoration:decryptedFileUrl ? 
          "none":"none", backgroundColor:decryptedFileUrl ? "rgb(231, 208, 63)":"rgb(46, 46, 46)",}}>
            Download Decrypted File
          </a>

        </form>

          <div className="instructions">
            <h2>Instructions for file Decryption</h2>
            <p>Use the same password that you created when encrypting the file.</p>
            <p>Files will be available to download after decryption; a password is required.</p>
          </div>
      </div>
  );
}

import * as openpgp from "openpgp";
import { useDropzone } from "react-dropzone";
import { DropZoneArea } from "./dropZoneEnc";
import { useState } from "react";
import { EncSubmit } from "./encButton";
import { toEncryptFile, toDecryptFile} from "./SED";

import sjcl from "sjcl";


function arrayBufferToBase64(buffer) {
  const bytes = new Uint8Array(buffer);
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary); // Base64 encode
}

export const EncFileBox = (e) => {
  const [file, setFile] = useState(null);
  const [fileContents, setFileContent] = useState("");
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
          const base64Data = arrayBufferToBase64(text)
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
      <form onSubmit={readFile}>
        <input
          type="file"
          hmtlFor="fileEnc"
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
        ></input>
        <input type="text" required value={key} onChange={(e) =>  setKeyFile(e.target.value)} ></input>

          
          <a href={encryptedFileUrl} download={fileName}>
            Download Encrypted File
          </a>
      

        <DropZoneArea></DropZoneArea>
        <EncSubmit></EncSubmit>
      </form>
    </div>
  );
};

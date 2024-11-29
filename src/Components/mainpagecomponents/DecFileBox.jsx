import openpgp from "openpgp";
import { useDropzone } from "react-dropzone";
import { useState } from "react";
import { DropZoneArea } from "./dropZoneDec";
import { DecSubmit } from "./decButton";
import {toDecryptFile} from "./SED";
import sjcl from "sjcl";



function arrayBufferToBase64(buffer) {
  const bytes = new Uint8Array(buffer);
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary); // Base64 encode
}


function base64ToArrayBuffer(base64) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
  }
    return bytes.buffer; 
}


export const EdcFileBox = () => {
  
  const [file, setFile] = useState(null);
  const [fileContents, setFileContent] = useState("");
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
          const base64Data = arrayBufferToBase64(decData)
          console.log(JSON.parse(base64Data))
          const f =JSON.parse(base64Data)
          const dataDecrypted64 = sjcl.decrypt(key, f)

          const dataDecrypted = base64ToArrayBuffer(dataDecrypted64)

     
          console.log(dataDecrypted);
          const blob = new Blob([dataDecrypted], { decData: file.type });
          setFileName(file.name);

          const url = URL.createObjectURL(blob);
          setDecryptedFileUrl(url);
        

        }
      
      

      };
      if(file.type.startsWith('text')){
        reader.readAsText(file);
      }else{
        reader.readAsArrayBuffer(file);
      }
      
    } else {
      alert("No file selected");
    }
  }


  return (
      <div className="fileHandlerBox">
        <form onSubmit={readsFile}>
          <input
            type="file"
            hmtlFor="fileDec"
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          ></input>
          <input
            type="text"
                     required
               value={key}
   
            onChange={(e) => {
              setKeyFileDec(e.target.value);
            }}
         
          ></input>

          <a href={decryptedFileUrl} download={fileName}>
            Download Decrypted File
          </a>

          <DropZoneArea></DropZoneArea>
          <DecSubmit></DecSubmit>
        </form>
      </div>
  );
}

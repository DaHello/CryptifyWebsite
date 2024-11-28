import * as openpgp from "openpgp";
import { useDropzone } from "react-dropzone";
import { DropZoneArea } from "./dropZoneEnc";
import { useState } from "react";
import { EncSubmit } from "./encButton";
import { toEncryptFile, toDecryptFile} from "./SED";




export const EncFileBox = (e) => {
  const [file, setFile] = useState(null);
  const [fileContents, setFileContent] = useState("");
  const [key, setKey] = useState("");
  const [encryptedFileUrl, setEncryptedFileUrl] =useState();
  const [fileName,setFileName] = useState("")
  function readFile(e) {
    
    const uKey = key
    e.preventDefault(); 
    if (file) {
      const reader = new FileReader();
      reader.onload = async (e) => {
       
        const contentArray = e.target.result.split(/\r?\n/);

        let text = ""
        
    
        for(let i = 0 ; i < contentArray.length; i++ ){
          text = text + contentArray[i] + "\n"
        }

        const fileEncrypted = await toEncryptFile(text, uKey)
      
        console.log(fileEncrypted)
        const blob = new Blob([fileEncrypted], {type: file.type})
        setFileName(file.name);

        const url = URL.createObjectURL(blob)
        setEncryptedFileUrl(url)
      
        setFileContent(contentArray); 
        

      };
      reader.readAsText(file); 
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
        <input
          type="text"
          onChange={(e) => {
            setKey(e.target.key);
          }}
          value={key}
          required
        ></input>

          
          <a href={encryptedFileUrl} download={fileName}>
            Download Encrypted File
          </a>
      

        <DropZoneArea></DropZoneArea>
        <EncSubmit></EncSubmit>
      </form>
    </div>
  );
};

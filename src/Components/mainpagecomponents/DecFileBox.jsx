import openpgp from "openpgp";
import { useDropzone } from "react-dropzone";
import { useState } from "react";
import { DropZoneArea } from "./dropZoneDec";
import { DecSubmit } from "./decButton";
import {toDecryptFile} from "./SED";

export const EdcFileBox = () => {
  
  const [file, setFile] = useState(null);
  const [fileContents, setFileContent] = useState("");
  const [key, setKey] = useState("");
  const [decryptedFileUrl, setDecryptedFileUrl] = useState();
  const [fileName, setFileName] = useState("");
  function readFile(e) {
    const uKey = key;
    e.preventDefault();
    if (file) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const contentArray = e.target.result.split(/\r?\n/);

        let text = "";

        for (let i = 0; i < contentArray.length; i++) {
          text = text + contentArray[i] + "\n";
        }

      
        const fileDecrypted = await toDecryptFile(text, uKey);
        console.log(fileDecrypted);
        const blob = new Blob([fileDecrypted], { type: file.type });
        setFileName(file.name);

        const url = URL.createObjectURL(blob);
        setDecryptedFileUrl(url);
        console.log(fileDecrypted);
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

          <a href={decryptedFileUrl} download={fileName}>
            Download Decrypted File
          </a>

          <DropZoneArea></DropZoneArea>
          <DecSubmit></DecSubmit>
        </form>
      </div>
  );
}

import * as openpgp from "openpgp";
import { useDropzone } from "react-dropzone";
import { DropZoneArea } from "./dropZoneEnc";
import { useState } from "react";
import { EncSubmit } from "./encButton";
import { encryptFile } from "./edcLogic";



export const EncFileBox = (e) => {
  const [file, setFile] = useState(null);
  const [fileContents, setFileContent] = useState("");
  function readFile(e) {
    e.preventDefault(); // Prevent form submission default behavior
    if (file) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        // Split file contents by newlines or your desired delimiter
        const contentArray = e.target.result.split(/\r?\n/);

        setFileContent(contentArray); // Store the array in state
        const encryptedContent =  await encryptFile(contentArray)
        console.log(encryptedContent); // Log to verify
      };
      reader.readAsText(file); // Read file as text
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
        <DropZoneArea></DropZoneArea>
        <EncSubmit></EncSubmit>
      </form>
    </div>
  );
};

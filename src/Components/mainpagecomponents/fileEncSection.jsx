import openpgp from "openpgp";
import { useDropzone } from "react-dropzone";

import { DropZoneArea } from "./dropZone";

export const EncFileBox = () =>{
    return(
        <div className="fileHandlerBox">
            <input type="file"></input>
            <DropZoneArea></DropZoneArea>
        </div>
    );
}
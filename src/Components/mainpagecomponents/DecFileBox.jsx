import openpgp from "openpgp";
import { useDropzone } from "react-dropzone";
import { DropZoneArea } from "./dropZoneDec";

export const EdcFileBox = () => {

    return (
      <div className="fileHandlerBox">
        <input type="file"></input>
        <DropZoneArea></DropZoneArea>
      </div>
    );
}

import openpgp from "openpgp";
import { useDropzone } from "react-dropzone";



export const EncFileBox = () =>{
    return(
        <div className="fileHandlerBox">
            <input type="file"></input>
        </div>
    );
}
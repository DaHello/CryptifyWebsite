import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import "../../styles/mainPage.css";

export const DropZoneArea = () => {
  //react hook
  //... property spread notation
  //Spread syntax can be used when all elements from an object or array need to be included in a new array or object,
  //or should be applied one-by-one in a function call's arguments list.
  const onDrop = useCallback((acceptedFiles) => {
    console.log("OMG!");
  }, []);
  const { getRootProps, getInputProps, isDragActivate } = useDropzone({
    onDrop,
  });
  return (
    <div {...getRootProps()} className="trythis">
      <input {...getInputProps()} />
      {isDragActivate ? <></> : <p>Drop file here for decryption</p>}
    </div>
  );
};

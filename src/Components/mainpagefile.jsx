import { EncFileBox } from "./mainpagecomponents/EncFileBox";
import { EdcFileBox } from "./mainpagecomponents/DecFileBox";
import { useOutletContext } from "react-router-dom"; // to use the user name

import "../styles/mainPage.css";

// This container holds all the boxes for file encryption and decryption
export function MainPageFile() {
  const currentUsername = useOutletContext();
  console.log(currentUsername + " is now in file encryption section"); // example of how this can be used for logs

  return (
    <div className="containerFile">
      <EncFileBox></EncFileBox>

      <EdcFileBox></EdcFileBox>
    </div>
  );
}

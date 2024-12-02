import { EncFileBox } from "./mainpagecomponents/EncFileBox";
import { EdcFileBox } from "./mainpagecomponents/DecFileBox";

import "../styles/mainPage.css";

// This container holds all the boxes for file encryption and decryption
export function MainPageFile() {
  return (
    <div className="containerFile">
      <EncFileBox></EncFileBox>

      <EdcFileBox></EdcFileBox>
    </div>
  );
}

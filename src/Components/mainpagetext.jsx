import { DecForm } from "./mainpagecomponents/decForm";
import { EncForm } from "./mainpagecomponents/encForm";
import { EncFileBox } from "./mainpagecomponents/EncFileBox";
import "../styles/mainPage.css";

// This container holds all the forms for text encryption and decryption
export function MainPageText() {
  return (
    <div className="containerText">
      {/* <Header></Header> */}
      <EncForm>Encryption</EncForm>
      <DecForm>Decryption</DecForm>
    </div>
  );
}

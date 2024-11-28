import { DecForm } from "./mainpagecomponents/decForm";
import { EncForm } from "./mainpagecomponents/encForm";
import { EncFileBox } from "./mainpagecomponents/EncFileBox";
import "../styles/mainPage.css";


// This container holds all the forms for text encryption and decryption
//DO NOT CHANGE THE NAME IF YOU NOT GOING TO CHANGE THE NAME IN CSS TOO
export function MainPageText() {
  return (
    <div className="container">
      {/* <Header></Header> */}
      <EncForm>Encryption</EncForm>
      <DecForm>Decryption</DecForm>
    </div>
  );
}

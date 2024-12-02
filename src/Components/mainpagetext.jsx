import { DecForm } from "./mainpagecomponents/decForm";
import { EncForm } from "./mainpagecomponents/encForm";
import { EncFileBox } from "./mainpagecomponents/EncFileBox";
import { useOutletContext } from "react-router-dom"; // to use the user name

import "../styles/mainPage.css";


// This container holds all the forms for text encryption and decryption
//DO NOT CHANGE THE NAME IF YOU NOT GOING TO CHANGE THE NAME IN CSS TOO
export function MainPageText() {
  const currentUsername = useOutletContext();
  console.log(currentUsername + " is now in text encryption section"); // example of how this can be used for logs

  return (
    <div className="container">
      {/* <Header></Header> */}
      <EncForm>Encryption</EncForm>
      <DecForm>Decryption</DecForm>
    </div>
  );
}

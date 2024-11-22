import { DecForm } from "./mainpagecomponents/decStruct";
import { EncForm } from "./mainpagecomponents/encStruct";
//import Header from "./Header";
//import EncryptFiles from "./components/EncryptFiles"; // show forms for enc/dec files
//import EncryptText from "./components/EncryptText"; // show forms for enc/dec text
import { EncFileBox } from "./mainpagecomponents/fileEncSection";
import "../styles/mainPage.css";

// main page is where all of the forms are going to be loaded
export function MainPage() {
  return (
    <div className="container">
      {/* <Header></Header> */}
      <EncForm>Encryption</EncForm>
      <DecForm>Decryption</DecForm>
      <EncFileBox></EncFileBox>
    </div>
  );
}

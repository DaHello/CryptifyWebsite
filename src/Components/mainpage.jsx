import { DecForm } from "./mainpagecomponents/decStruct";
import { EncForm } from "./mainpagecomponents/encStruct";
import { EncFileBox } from "./mainpagecomponents/fileEncSection";
import "../styles/mainPage.css";

//function genForm() {}

// main page is where all of the forms are going to be loaded
export function MainPage() {
  return (
    <div className="container">
      <EncForm>Encryption</EncForm>
      <DecForm>Decryption</DecForm>
      <EncFileBox></EncFileBox>
    </div>
  );
}

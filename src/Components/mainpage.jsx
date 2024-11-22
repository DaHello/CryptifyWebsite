import { DecForm } from "./mainpagecomponents/decStruct";
import { EncForm } from "./mainpagecomponents/encStruct";
import "../styles/mainPage.css";

export function MainPage() {
  return (
    <div className="container">
      <EncForm>Encryption</EncForm>
      <DecForm>Decryption</DecForm>
    </div>
  );
}

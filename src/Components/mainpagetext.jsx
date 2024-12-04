import { DecForm } from "./mainpagecomponents/decForm";
import { EncForm } from "./mainpagecomponents/encForm";
import { useUser } from "./currentUserContext";

import "../styles/mainPage.css";


// This container holds all the forms for text encryption and decryption
//DO NOT CHANGE THE NAME IF YOU NOT GOING TO CHANGE THE NAME IN CSS TOO
export function MainPageText() {
  const { currentUser } = useUser();

  if (currentUser.username) { // if user signed in
    console.log(currentUser.username + " is now in text encryption section"); 
  } else {
    console.log("Guest is now in text encryption section");
  }

  return (
    <div className="containerTextEnc">
      {/* <Header></Header> */}
      <EncForm currentUser={currentUser}>Encryption</EncForm>
      <DecForm currentUser={currentUser}>Decryption</DecForm>
    </div>
  );
}

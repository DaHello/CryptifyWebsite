import { DecForm } from "./mainpagecomponents/decForm";
import { EncForm } from "./mainpagecomponents/encForm";
import { useUser } from "./currentUserContext"; // to access user info

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
    <div className="container">
      {/* <Header></Header> */}
      <EncForm>Encryption</EncForm>
      <DecForm>Decryption</DecForm>
    </div>
  );
}

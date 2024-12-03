import { EncFileBox } from "./mainpagecomponents/EncFileBox";
import { EdcFileBox } from "./mainpagecomponents/DecFileBox";
import { useUser } from "./currentUserContext"; // to use the user name

import "../styles/mainPage.css";

// This container holds all the boxes for file encryption and decryption
export function MainPageFile() {
  const { currentUser } = useUser();

  if (currentUser.username) { // if user signed in
    console.log(currentUser.username + " is now in file encryption section"); 
  } else {
    console.log("Guest is now in file encryption section");
  }

  return (
    <div className="containerFile">
      <EncFileBox></EncFileBox>

      <EdcFileBox></EdcFileBox>
    </div>
  );
}

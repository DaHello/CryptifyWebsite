import { EncFileBox } from "./mainpagecomponents/EncFileBox";
import { EdcFileBox } from "./mainpagecomponents/DecFileBox";
import { useUser } from "./currentUserContext";

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
      <EncFileBox currentUser={currentUser}></EncFileBox>
      <EdcFileBox currentUser={currentUser}></EdcFileBox>
    </div>
  );
}

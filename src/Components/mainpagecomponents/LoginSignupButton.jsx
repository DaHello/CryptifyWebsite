import React from "react";

//styles:
import "../../styles/LoginSignupButton.css";

export default function LoginSignupButton( {children, openForm} ) {
  if (children === "Login or Signup") { // button will open the form
    return (
        <button className="openFormButton" type="button" onClick={openForm}>{children}</button>
    );
  } else {  // button does nothing if currentUsername is defined (user is already signed in)
    return (
        <button className="fakeButton" type="button">{children}</button>
    );
  }
  
}

import React from "react";

//styles:
import "../../styles/LoginSignupButton.css";

export default function LoginSignupButton( {children, openForm, openOptions} ) {
  if (children === "Login or Signup") { // button will open the form
    return (
        <button className="openFormButton" type="button" onClick={openForm}>{children}</button>
    );
  } else {  // (user is already signed in) show Log Options
    
    return (
      <button className="UserOptionsButton" onClick={ openOptions }>{children}</button>
    );
    
  }
  
}

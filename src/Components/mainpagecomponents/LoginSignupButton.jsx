import React from "react";

//styles:
import "../../styles/LoginSignupButton.css";

export default function LoginSignupButton( {children, openForm, openOptions, closeOptions, showUserOptions} ) {
  if (children === "Login or Signup") { // button will open the form
    return (
        <button className="openFormButton" type="button" onClick={openForm}>{children}</button>
    );
  } else {  // (user is already signed in) show Log Options
    
    return (
      <button className="UserOptionsButton" onClick={showUserOptions ? openOptions : closeOptions }>{children}</button>
    );

    // if (showUserOptions) { // if user options is already opened:
    //   return (
    //     <button className="UserOptionsButton" type="button" onClick={closeOptions}>{children}</button>
    //   );
    // } else {
    //   return (
    //     <button className="UserOptionsButton" type="button" onClick={openOptions}>{children}</button>
    //   );
    // }
    
  }
  
}

import React from "react";
import { useOutletContext } from "react-router-dom";

export default function LoginSignupButton( {children} ) {
    const currentUser = useOutletContext();
    <button className="openFormButton" type="button">{ children }</button>
}
import { DecSubmit } from "./decButton";
import "../../styles/mainPage.css";

export const DecForm = () =>{
    return (
        <form className="genForm">
            <label hmtlfor = "non-defined1">Place holder for Decryption</label>
            <input id = "non-defined1" type="text"></input>
            <label hmtlfor = "maybe-output1">Place holder for output</label>
            <input  type="text" id ="maybe-output1"></input>
            <DecSubmit></DecSubmit>
        </form>
   );

}
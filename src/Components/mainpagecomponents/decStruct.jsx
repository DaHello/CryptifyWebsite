import { DecSubmit } from "./decButton";
import "../../styles/mainPage.css";

export const DecForm = () =>{
    return (
        <form className="genForm">
            <label hmtlfor = "non-defined1">Place holder for Decryption</label>
     
            <textarea id = "non-defined1" type="text" className="ioBox"></textarea>

            <label htmlfor ="key">key</label>

            <input id = "key" type="textarea"  className="keyBox"></input>

            <label hmtlfor = "maybe-output1"  >Place holder for output</label>

            <textarea id = "maybe-output1" type="text" className="ioBox"></textarea>

            <DecSubmit></DecSubmit>
        </form>
   );

}
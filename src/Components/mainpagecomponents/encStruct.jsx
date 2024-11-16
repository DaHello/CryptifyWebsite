import { EncSubmit } from "./encButton";
import "../../styles/mainPage.css";

export const EncForm = () =>{
    return (
    <>
        <form class="genForm">
            <label for = "non-defined2">Place holder for Encryption</label>
            <input id = "non-defined2" type="text"></input>
            <label for = "maybe-output2">Place holder for output</label>
            <input  type="text" id ="maybe-output2"></input>
            <EncSubmit></EncSubmit>
        </form>

        

    </>);

}
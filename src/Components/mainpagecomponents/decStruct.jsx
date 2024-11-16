import { DecSubmit } from "./decButton";

export const DecForm = () =>{
    return (
    <>
        <form class="decForm">
            <label for = "non-defined1">Place holder for Decryption</label>
            <input id = "non-defined1" type="text"></input>
            <label for = "maybe-output1">Place holder for output</label>
            <input  type="text" id ="maybe-output1"></input>
            <DecSubmit></DecSubmit>
        </form>

        

    </>);

}
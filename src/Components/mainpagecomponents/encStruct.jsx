import { EncSubmit } from "./encButton";
import "../../styles/mainPage.css";


export const EncForm = () =>{

    function verify (formData){
        alert("hi");

    }
    return (
        <form className="genForm" action={verify}>
            <label hmtlfor = "non-defined2">Place holder for Encryption</label>
 
            <textarea id = "non-defined2" type="text"  className="ioBox"></textarea>

            <label htmlfor ="key">key</label>

            <input id = "key" type="text"  className="keyBox"></input>

            <label hmtlfor = "maybe-output2"  >Place holder for output</label>

            <textarea type="text" id ="maybe-output2" className="ioBox"></textarea>

            <EncSubmit></EncSubmit>
        </form>
    );

}
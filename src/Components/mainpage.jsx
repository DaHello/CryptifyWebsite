import { DecForm } from "./mainpagecomponents/decStruct";
import { EncForm } from "./mainpagecomponents/encStruct";
import "../styles/mainPage.css"

export const MainPage = () => {
    return(
        <div className="container">
     
            <EncForm></EncForm>  
            <DecForm></DecForm>
             
        </div>
    );


}
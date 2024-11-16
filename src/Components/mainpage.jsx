import { DecForm } from "./mainpagecomponents/decStruct";
import { EncForm } from "./mainpagecomponents/encStruct";
import "../styles/mainPage.css"

export const MainPage = () => {
    return(
        <div class="containerMainPage">
            <DecForm></DecForm>
            <EncForm></EncForm>
        </div>
    );


}
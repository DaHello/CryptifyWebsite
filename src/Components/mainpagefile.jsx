import { EncFileBox } from "./mainpagecomponents/EncFileBox";
import "../styles/mainPage.css";

// This container holds all the boxes for file encryption and decryption
export const MainPageFile = () => {
  return (
    <div className="container">
      <EncFileBox></EncFileBox>
    </div>
  );
};

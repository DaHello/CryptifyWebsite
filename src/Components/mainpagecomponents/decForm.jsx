import { DecSubmit } from "./decButton";
import React, { useState } from "react";
import { addLogByUser } from "../../actionsDB";

import "../../styles/mainPage.css";

// everything is nested inside of decForm, so this whole file is just the DecForm
export const DecForm = ({ currentUser }) =>{
  const [textDec, setTextDec] = useState("");
  const [keyDec, setKeyDec] = useState("");
  const [outputDec, setOutPutDec] = useState("");
  const enc = new TextEncoder();

  const dec = new TextDecoder();

  const base64_to_buf = (b64) =>
    Uint8Array.from(atob(b64), (c) => c.charCodeAt(0));


    const getPasswordKey = (password) =>
      window.crypto.subtle.importKey(
        "raw",
        enc.encode(password),
        "PBKDF2",
        false,
        ["deriveKey"]
      );

    const deriveKey = (passwordKey, salt, keyUsage) =>
      window.crypto.subtle.deriveKey(
        {
          name: "PBKDF2",
          salt: salt,
          iterations: 250000,
          hash: "SHA-256",
        },
        passwordKey,
        { name: "AES-GCM", length: 256 },
        false,
        keyUsage
      );
  
  async function decryptData(encryptedData, password) {
    try {
      const encryptedDataBuff = base64_to_buf(encryptedData);
      const salt = encryptedDataBuff.slice(0, 16);
      const iv = encryptedDataBuff.slice(16, 16 + 12);
      const data = encryptedDataBuff.slice(16 + 12);
      const passwordKey = await getPasswordKey(password);
      const aesKey = await deriveKey(passwordKey, salt, ["decrypt"]);
      const decryptedContent = await window.crypto.subtle.decrypt(
        {
          name: "AES-GCM",
          iv: iv,
        },
        aesKey,
        data
      );
      return dec.decode(decryptedContent);
    } catch (e) {
     
      alert("Please, make sure you are using the correct password")
      return "";
    }
  }
  async function handleSubmitDec(e) {
    e.preventDefault()

    if (currentUser.username) { // if signed in:
      //console.log(currentUser); // test
      addLogByUser(currentUser, `${currentUser.username} decrypted text`); // add log for current user to db.json
    }

    const dectext_key = { textDec, keyDec };
    const decrypted = await decryptData(dectext_key.textDec, dectext_key.keyDec)

    setOutPutDec(decrypted)

 
  }
  return (
    <form className="genForm" onSubmit={handleSubmitDec}>
      <label>Decryption</label>

      <textarea
      placeholder="Encrypted text goes here..."
        type="text"
        className="ioBox"
        value={textDec}
        onChange={(e) => setTextDec(e.target.value)}
      ></textarea>

      <label>Key</label>

      <input
      placeholder="Same key used for encryption..."
        type="textarea"
        className="keyBox"
        value={keyDec}
        onChange={(e) => setKeyDec(e.target.value)}
      ></input>

      <label>Decrypted Text</label>

      <textarea
        type="text"
        className="ioBox"
        value={outputDec}
        readOnly
      ></textarea>
   
      <DecSubmit></DecSubmit>
    </form>
  );
}
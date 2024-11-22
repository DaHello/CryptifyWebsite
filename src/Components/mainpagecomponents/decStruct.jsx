import { DecSubmit } from "./decButton";
import "../../styles/mainPage.css";

import React, { useState } from "react";



export const DecForm = () =>{
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
      console.log(`Error - ${e}`);
      return "";
    }
  }
  async function handleSubmitDec(e) {
    e.preventDefault()
    const dectext_key = { textDec, keyDec };
    const decrypted = await decryptData(dectext_key.textDec, dectext_key.keyDec)

    setOutPutDec(decrypted)

    console.log(decrypted)
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
import { EncSubmit } from "./encButton";
import "../../styles/mainPage.css";

import React, { useState } from "react";


export const EncForm = () => {
  const [text, setText] = useState("");
  const [key, setKey] = useState("");
  const [outPutT, setOPT] = useState(""); 

  // const base64_to_buf = (b64) =>
  //   Uint8Array.from(atob(b64), (c) => c.charCodeAt(0));

  const buff_to_base64 = (buff) =>
    btoa(
      new Uint8Array(buff).reduce(
        (data, byte) => data + String.fromCharCode(byte),
        ""
      )
    );

  const enc = new TextEncoder();
  //const dec = new TextDecoder();

  async function encryptData(secretData, password) {
    try {
      const salt = window.crypto.getRandomValues(new Uint8Array(16));
      const iv = window.crypto.getRandomValues(new Uint8Array(12));
      const passwordKey = await getPasswordKey(password);
      const aesKey = await deriveKey(passwordKey, salt, ["encrypt"]);
      const encryptedContent = await window.crypto.subtle.encrypt(
        {
          name: "AES-GCM",
          iv: iv,
        },
        aesKey,
        enc.encode(secretData)
      );

      const encryptedContentArr = new Uint8Array(encryptedContent);
      let buff = new Uint8Array(
        salt.byteLength + iv.byteLength + encryptedContentArr.byteLength
      );
      buff.set(salt, 0);
      buff.set(iv, salt.byteLength);
      buff.set(encryptedContentArr, salt.byteLength + iv.byteLength);
      const base64Buff = buff_to_base64(buff);
      return base64Buff;
    } catch (e) {
      console.log(`Error - ${e}`);
      return "";
    }
  }

  // async function decryptData(encryptedData, password) {
  //   try {
  //     const encryptedDataBuff = base64_to_buf(encryptedData);
  //     const salt = encryptedDataBuff.slice(0, 16);
  //     const iv = encryptedDataBuff.slice(16, 16 + 12);
  //     const data = encryptedDataBuff.slice(16 + 12);
  //     const passwordKey = await getPasswordKey(password);
  //     const aesKey = await deriveKey(passwordKey, salt, ["decrypt"]);
  //     const decryptedContent = await window.crypto.subtle.decrypt(
  //       {
  //         name: "AES-GCM",
  //         iv: iv,
  //       },
  //       aesKey,
  //       data
  //     );
  //     return dec.decode(decryptedContent);
  //   } catch (e) {
  //     console.log(`Error - ${e}`);
  //     return "";
  //   }
  // }

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

  async function handleSubmit(e) {
    e.preventDefault();

    const text_key = { text, key };
    const encrypted = await encryptData(text_key.text, text_key.key);
    setOPT(encrypted); 


    //const decrypted = await decryptData(encrypted, text_key.key);

  }
  // e : short for event

  return (
    <form className="genForm" onSubmit={handleSubmit}>
      <label htmlFor="non-defined2">Encryption</label>
      <textarea
        placeholder="Text to be encrypted goes here..."
        type="text"
        className="ioBox"
        required
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>

      <label htmlFor="key">Key</label>
      <input
        placeholder="Key for encryption data..."
        type="text"
        className="keyBox"
        required
        value={key}
        onChange={(e) => setKey(e.target.value)}
      ></input>

      <label htmlFor="maybe-output2">Encrypted text</label>
      <textarea
        type="text"
        className="ioBox"
        value={outPutT}
        readOnly
      ></textarea>

      <EncSubmit />
    </form>
  );
};

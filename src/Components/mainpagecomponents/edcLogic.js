// import { FaWineGlassEmpty } from "react-icons/fa6";

// const encoder = new TextEncoder();

// export function getKey(userKeyPassword, text) {
//   crypto.subtle.importKey(
//     "raw",
//     encoder.encode(userKeyPassword),
//     { name: "PBKDF2" },
//     false,
//     ["deriveKey"]
//   );

//   console.log(userKeyPassword, text);
// }

// //PBKDF2 is also a key derivation function. It's designed to derive key material
// // from some relatively low-entropy input, such as a password.

// export function deriveKey(userKeyPassword, salt, keyUsage) {
//   crypto.subtle.deriveKey(
//     {
//       name: "PDBKDF2",
//       salt: salt,
//       iterations: 250000,
//       hash: "SHA-256",
//     },
//     userKeyPassword,
//     { name: "AES-GCM", length: 256 },
//     false,
//     ["encrypt", "decrypt"]
//   );
// }

import * as openpgp from 'openpgp'

export const encryptFile = async (textFile) => {
  // Define your PGP keys and passphrase
  const publicKeyArmored = `-----BEGIN PGP PUBLIC KEY BLOCK-----
...
-----END PGP PUBLIC KEY BLOCK-----`;
  const privateKeyArmored = `-----BEGIN PGP PRIVATE KEY BLOCK-----
...
-----END PGP PRIVATE KEY BLOCK-----`;
  const passphrase = "trythis";

  try {
    // Load the public key
    const publicKey = await openpgp.readKey({ armoredKey: publicKeyArmored });

    // Decrypt and load the private key
    const privateKey = await openpgp.decryptKey({
      privateKey: await openpgp.readPrivateKey({
        armoredKey: privateKeyArmored,
      }),
      passphrase,
    });

    // Encrypt the provided text
    const encrypted = await openpgp.encrypt({
      message: await openpgp.createMessage({ text: textFile }),
      encryptionKeys: publicKey,
      signingKeys: privateKey,
    });

    // Return the encrypted string
    return encrypted;
  } catch (error) {
    console.error("Encryption failed:", error);
    throw error; // Re-throw the error for further handling
  }
};

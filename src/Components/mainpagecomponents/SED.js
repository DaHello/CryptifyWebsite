import sjcl from 'sjcl'

export const toEncryptFile = (text, password) =>{

  
  const encryptedData = sjcl.encrypt(toString(password),text)

  return encryptedData;
}


export const toDecryptFile = (encryptedData, password) =>{
  const decryptedData = sjcl.decrypt(toString(password), encryptedData);
  return decryptedData
}
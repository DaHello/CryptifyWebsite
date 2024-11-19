




export function  getTextEnc(textBuffer, userKey){
    //array of bytes buff


    const pKey = userKey;

    crypto.subtle.importKey("raw", pKey, 
        {   
            name: "RSA-PSS",
            hash: {name: "SHA-256"}
        }
        ,true,["encrypt","decrypt"])


    

    
    

}   
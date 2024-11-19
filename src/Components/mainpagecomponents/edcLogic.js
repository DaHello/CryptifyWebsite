




export function  getTextEnc(textBuffer, userKey){
    //array of bytes buff


    const pKey = userKey;

    async function encoderFunction(textbuffer, userkey){

    const encoder = new TextEncoder();
    const data = encoder.encode(textbuffer);

    const iv = crypto.getRandomValues(new Uint8Array(12));

    const encryptedData = await crypto.subtle.encrypt(
        {
            name: "AES-GCM",
            iv: iv,
        },
        userkey,
        data
    );

    return { encryptedData, iv };

}

    


    

    
    

}   
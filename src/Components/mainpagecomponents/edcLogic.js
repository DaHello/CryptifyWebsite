




export function  getTextEnc(textBuffer, userKey){


    //array
    //array of bytes buff

    const encoder = new TextEncoder
    const view = encoder.encode(userKey)
    console.log(view)

    const rawKey = window.crypto.getRandomValues(new Uint8Array(16));



    const encryptedText = crypto.subtle.importKey("raw",rawKey,
        "AES-GCM",true,["encrypt","decrypt"]
    )
    console.log(encryptedText)


}

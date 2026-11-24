let palabras = []
let secreta = ""


export function cogerPalabras(){
    fetch("words.json")
    .then(function(resp){
        console.log(resp)
        return resp.json()
    })
    .then(function(respJSON){
        palabras = respJSON.words
        console.log("palabras cogidas: ", palabras)  
        palabraAleatoria()
        
    })
    .catch(function(error){
        console.log(error)
        
    })
}



export function palabraAleatoria(){

    if (palabras.length === 0) return
    let numeroAleatorio = Math.floor(Math.random() * (palabras.length)) 
    secreta = palabras[numeroAleatorio].item
    console.log("Palabra secreta: " , secreta)
}



cogerPalabras()

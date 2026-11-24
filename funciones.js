let palabras = []
let secreta = ""
let numeroAleatorio = Math.floor(Math.random() * (palabras.length)) 
export function cogerPalabras(){
    fetch("words.json")
    .then(function(resp){
        console.log(resp)
        return resp.json()
    })
    .then(function(respJSON){
        palabras = respJSON
        console.log("palabras cogidas: ",palabras)  
        
    })
    .catch(function(error){
        console.log(error)
        
    })
}

cogerPalabras()

export function palabraAleatoria(){
    
    secreta = palabras[numeroAleatorio]
    return secreta
}





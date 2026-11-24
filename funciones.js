let palabras = []
let secreta = ""
let palabraMostrada = "________"

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

cogerPalabras()

export function palabraAleatoria(){

    if (palabras.length === 0) return
    let numeroAleatorio = Math.floor(Math.random() * (palabras.length)) 
    secreta = palabras[numeroAleatorio].item
    console.log("Palabra secreta: " , secreta)
}

export function cambiarImagen(i){
    const imagenAbogado = document.getElementById("imagen")
    let img = "Hangman-"+toString(i)+".png"
    imagenAbogado.src = "img/"+img
}

export function cambiarTexto(){
    const verPalabra = document.getElementById("palabra")
    verPalabra.innerText = palabraMostrada
}

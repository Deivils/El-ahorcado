// DOM
const inputButtom = document.getElementById("comprobar")
const verTexto = document.getElementById("")

const imagenAbogado = document.getElementById("imagen")

// FUNCION INPUT
function inputLetra(e){
    e.preventDefault()

    


}


// FUNCIONES 
let palabras = []
let palabraSecreta = ""
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

function palabraAleatoria(){
    if (palabras.length === 0) return
    let numeroAleatorio = Math.floor(Math.random() * (palabras.length)) 
    palabraSecreta = palabras[numeroAleatorio].item
    console.log("Palabra palabraSecreta: " , palabraSecreta)
}

function cambiarImagen(i){    
    let img = "Hangman-"+toString(i)+".png"
    imagenAbogado.src = "img/"+img
}

function cambiarTexto(){
    const verPalabra = document.getElementById("palabra")
    verPalabra.innerText = palabraMostrada
}

function comprobarLetra() {
    const input_letra = document.getElementById("letra")
    const palabra = document.getElementById("palabra")
        for (let letra of palabraSecreta){
            if(input_letra == letra){
                palabraMostrada.indexOf(letra) == input_letra
        }   

    }
}


console.log(input_letra)

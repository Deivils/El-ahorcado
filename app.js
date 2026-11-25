// DOM
const inputButtom = document.getElementById("comprobar")
const verTexto = document.getElementById("palabra")
const imagenAbogado = document.getElementById("imagen")
const input_letra = document.getElementById("letra")


// FUNCIONES 
let palabras = []
let palabraSecreta = ""
let palabraMostrada = "________"

// FUNCION INPUT
function inputLetra(e){
    e.preventDefault()
    if((!input_letra.value.match(/[a-z]/) || !input_letra.value.match(/[A-Z]/)) && input_letra.value.match(/\d/) && input_letra.length > 1){
        console.log("MEC")
    }else{
        console.log("Letra aprobada")
    }
    input_letra = input_letra.toUpperCase()

    palabraMostrada = comprobarLetra()

}



function cogerPalabras(){
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
    console.log("Palabra secreta: " , palabraSecreta)
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
    

    for (let letra of palabraSecreta){
        if(input_letra == letra){
            palabraMostrada.indexOf(letra) == input_letra
        }
    }
    return palabraMostrada
}


console.log(input_letra)

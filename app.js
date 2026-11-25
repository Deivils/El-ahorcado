// DOM
const inputButtom = document.getElementById("comprobar")
const verTexto = document.getElementById("palabra")
const imagenAbogado = document.getElementById("imagen")
const input_letra = document.getElementById("letra")
const subtitulo = document.getElementById("subtitulo")

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


let palabras = []
let palabraSecreta = ""
let palabraMostrada = "________"
i = 0

// FUNCION INPUT
function inputLetra(e){
    e.preventDefault()


    if((input_letra.value.match(/[a-z]/) || input_letra.value.match(/[A-Z]/))  && input_letra.value.length == 1){
        console.log("Letra aprobada")
        /* palabraMostrada = comprobarLetra() */
        console.log("comprobar letra: "+comprobarLetra())
        if(comprobarLetra()){
            cambiarLetra()
            
        }else{
            i += 1
            cambiarImagen(i)
        }
            

    }else{
        console.log("MEC")        
    }

    if(i == 8){
        cambiarImagen(i)
        subtitulo.style.color = "red"
        subtitulo.innerText = "... SE HA COLGADO!!"
    }

    if(i < 8 && comprobarWin() == true){
        console.log("comprobar win: "+comprobarWin())
        subtitulo.style.color = "green"
        subtitulo.innerText = "... SE HA SALVADO!!"
    }
}

// FUNCIONES 
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
    for (let n = 0; n = palabraSecreta.length; n++){
        if(palabraSecreta.charAt(n) == input_letra.value){
            return true
        }else{
            return false
        }
    }
}
function cambiarLetra() {  
    for (let n = 0; n = palabraSecreta.length; n++){
        if(palabraSecreta.charAt(n) == input_letra.value){
            palabraMostrada.charAt(n) == input_letra
        }
    }
}


function comprobarWin(){
    for (let n = 0; n = palabraMostrada.length; n++){
        if(palabraMostrada.charAt(n) == "_"){
            return false
        }else{
            return true
        }
    }
}

console.log(input_letra)

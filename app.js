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
let palabraMostrada = "_"
let i = 0
let letraUsadas = []

// FUNCION INPUT
function inputLetra(e){
    e.preventDefault()

    if( i >= 8 || comprobarWin() == true){
        return
    }

    if((input_letra.value.match(/[a-z]/) || input_letra.value.match(/[A-Z]/))  && input_letra.value.length == 1){
        console.log("Letra aprobada")
        /* palabraMostrada = comprobarLetra() */
        console.log("comprobar letra: "+comprobarLetra())
        if(comprobarLetra()){
            console.log("la letra esta repetida: "+letraRepetida())
            if(letraRepetida()){
                alert("LETRA YA USADA")
            }else{
                cambiarLetra()
                letraUsada()
            }            
        }else{
            if(letraRepetida()){
                alert("LETRA YA USADA")
            }else{
                i += 1
                cambiarImagen(i)
                letraUsada()
            }
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
    limpiarInputText()
}

// FUNCIONES 
function palabraAleatoria(){
    if (palabras.length === 0) return
    let numeroAleatorio = Math.floor(Math.random() * (palabras.length)) 
    palabraSecreta = palabras[numeroAleatorio].item
    console.log("Palabra secreta: " , palabraSecreta)

    // Al darme cuenta de que habian palabras con 7 letras
    // He añadido este for para que dibuje los guiones según la letra
    palabraMostrada = ""
    for(let n = 0; n < palabraSecreta.length; n ++){
        palabraMostrada += "_"
    }

    cambiarTexto()
}

function cambiarImagen(i){    
    let img = "images/Hangman-"+ i + ".png"
    imagenAbogado.src = img
}

function cambiarTexto(){
    verTexto.innerText = palabraMostrada
}

function comprobarLetra() {  
    for (let n = 0; n < palabraSecreta.length; n++){
        if(palabraSecreta.charAt(n).toUpperCase() == input_letra.value.toUpperCase()){
            return true
        }
    }

    return false
}
function cambiarLetra() {  
    let nuevoTexto = ""
    for (let n = 0; n < palabraSecreta.length; n++){
        if(palabraSecreta.charAt(n).toUpperCase() == input_letra.value.toUpperCase()){

            // Se guarda la letra tal cual viene la palabra secreta
            nuevoTexto += palabraSecreta.charAt(n)
        }else{
            nuevoTexto += palabraMostrada.charAt(n).toUpperCase()
        }
    }

    palabraMostrada = nuevoTexto
    cambiarTexto() // Actualizamos el texto en la página
}


function comprobarWin(){
    for (let n = 0; n < palabraMostrada.length; n++){
        if(palabraMostrada.charAt(n) == "_"){
            return false
        }
    }
    return true
}

function limpiarInputText(){
    input_letra.value = ""
}

// función para recoger las letras ya usadas
function letraUsada(){
    letraUsadas.push(input_letra.value)
}

// función para comprobar si la letra se ha usado
function letraRepetida(){
    for (let n = 0; n < letraUsadas.length; n++){
        if(letraUsadas[n] == input_letra.value){
            return true
        }
    }
    return false
}

// FUNCION QUE COMPRUEBE QUE NO SE REPITEN LAS LETRAS EN EL INPUT

// BOTON PARA REINICIAR LA PÁGINA
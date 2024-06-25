let numeroSecreto = 0;
let intentos = 0;
let numSorteados = [];
let numMax = 10;
let maximo = 4;
condicionesIniciales();
console.log(numeroSecreto);

function mensajeBienvenida(){
    asignarTextoElemento("p", "Elige un número del 1 al 10");
}


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function generarNumeroSecreto(){
    let n = Math.floor( Math.random()*10 ) + 1;
    console.log("Numero generado: " + n);
    console.log(numSorteados);
    //
    if(numSorteados.length == numMax){
        asignarTextoElemento("p","Ya se sortearon todos los números posibles");
    }else{
    //Si el numero está incluido en la lista
    if(numSorteados.includes(n)){
        return generarNumeroSecreto();
    }else{
        numSorteados.push(n);
        return n;
    }
    }
}

function verificarIntento() {
    let nroUsuario = parseInt(document.getElementById("valorUsuario").value);

if(intentos != maximo){

    if(nroUsuario == numeroSecreto){
        asignarTextoElemento("p",`Acertaste el numero en ${ intentos > 1 ? `${intentos} intentos`: "un intento" }`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        if(nroUsuario > numeroSecreto){
            asignarTextoElemento("p","El numero secreto es menor");
        }else{
            asignarTextoElemento("p","El numero secreto es mayor");
        }
        intentos++;
    }

}else{
    alert("Se ha reiniciado el juego");
    condicionesIniciales();
}

    limpiarCaja();
}

function limpiarCaja(){
    let valCaja = document.querySelector('#valorUsuario').value="";
}

function condicionesIniciales(){
        //limpiarlacaja
        limpiarCaja();
        //indicar mensaje de intervalo de números
        mensajeBienvenida();
        //Generar el numero aleatorio
        numeroSecreto = generarNumeroSecreto();
        //deshabilitar el botón de nuevo juego
        
        //inicializar el número de intentos
        intentos = 1;
}

function reiniciarJuego(){
    //limpiarlacaja
    limpiarCaja();
    //indicar mensaje de intervalo de números
    mensajeBienvenida();
    //Generar el numero aleatorio
    numeroSecreto = generarNumeroSecreto();
    //deshabilitar el botón de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled","true");
    //inicializar el número de intentos
    intentos = 1;
}


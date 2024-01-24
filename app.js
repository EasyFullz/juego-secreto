let numeroSecreto = 0;
let intentos = 0;
let numerosSorteados = [];
let numeroMaximo = 10;
let intentosMaximos = 3;

//funcion para utilizar elementos de HTML como h1,p,bottons etc...
function asignarTextoElemento(elemento, texto){
    let ElementoHTML = document.querySelector(elemento);
    ElementoHTML.innerHTML = texto
    return;
}

//funcion que sirve para verificar el intento del usuario asi como darle la ayuda necesaria y hacer la limpieza de la caja cuando sea necesaria.
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if ( numeroDeUsuario != document.getElementById('valorUsuario').value){
        asignarTextoElemento ('p', 'Por favor agregue un numero');
    }else {
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`¡Felicidades acertaste el numero en ${intentos} ${(intentos === 1) ? 'Intento' : 'Intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
        }else{
            if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor'); 
            }else{
                asignarTextoElemento('p','El numero secreto es mayor');
            }if (intentos == intentosMaximos){
                asignarTextoElemento('p', `No lograste descubrir el numero secreto. tuviste ${intentosMaximos} intentos`);
                document.getElementById('intento').setAttribute('disabled', 'true');
                document.getElementById('reiniciar').removeAttribute('disabled');
            }
            intentos++;
            limpíarCaja();
        }
    }
}

//funcion que limpia las cajas y es reutilizable
function limpíarCaja(){
   valorCaja = document.querySelector('#valorUsuario').value = '';
    
}

// funcion que genera un numero aleatorio entrte 1 a 10
function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
  console.log(numeroGenerado);
  console.log(numerosSorteados);
  console.log(numerosSorteados.length);

  if(numerosSorteados.length == numeroMaximo){

    asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');

  } else {

    if (numerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    } else {
        numerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
  }
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

//funcion que reiniciara nuestro juego
function reiniciarJuego(){
    limpíarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    document.getElementById('intento').removeAttribute('disabled');
}

condicionesIniciales();























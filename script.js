//Inicializacion de variables
let tarjetasDestapadas = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let movimientos = 0;
let aciertos = 0;

//Numeros aleatorios
let num = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
num = num.sort(()=>{return Math.random()-0.5});
console.log(num);

function destapar (id){

tarjetasDestapadas++;
console.log(tarjetasDestapadas);

if(tarjetasDestapadas == 1){
    tarjeta1=document.getElementById(id);
    primerResultado = num [id]
    tarjeta1.innerHTML = `<img src= "./images/${primerResultado}.png" alt=""> `;

    tarjeta1.ariaDisabled = true;

    }else if(tarjetasDestapadas ==2){
        tarjeta2 = document.getElementById(id);
        segundoResultado = num [id];
        tarjeta2.innerHTML = `<img src= "./images/${segundoResultado}.png" alt=""> `;

        tarjeta2.ariaDisabled= true;


if (primerResultado == segundoResultado){
    tarjetasDestapadas=0;


    }else{
    setTimeout(() =>{
        tarjeta1.innerHTML = '';
        tarjeta2.innerHTML = '';
        tarjeta1.ariaDisabled = false;
        tarjeta2.ariaDisabled = false;
        tarjetasDestapadas = 0;
    },200);
    }

//Agrega un evento click al boton de reinicio
const btnReset = document.querySelector('.btn-reset');
btnReset.addEventListener('click', reiniciarJuego);

//Funcion para reiniciar el juego
function reiniciarJuego() {
  //Reinicializa las variables
  tarjetasDestapadas = 0;
  tarjeta1 = null;
  tarjeta2 = null;
  primerResultado = null;
  segundoResultado = null;
  movimientos = 0;
  aciertos = 0;

  //Volver a generar los numeros aleatorios
  num = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
  num = num.sort(()=>{return Math.random()-0.5});

  //Volver a establecer el contenido de los botones
  for (let i = 0; i < num.length; i++) {
    const boton = document.getElementById(i);
    boton.innerHTML = '';
    boton.ariaDisabled = false;
  }
}
}
}


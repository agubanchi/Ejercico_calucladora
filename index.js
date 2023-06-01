let firstNumber = 0; //valor inicial del primer numero
let secondNumber = 0; //valor inicial del segundo numero
let selectedOperation = null; // operacion a realizar.

//llamo al selector de numeros y los agrego al visor segun corresponda.
const numbers = document.querySelectorAll(".numero");
const display = document.getElementById("display");
numbers.forEach((number) => {
  number.addEventListener("click", addvisor);
});

//funcion para agregar el contenido/valor del nuemro seleccionado al visor.
function addvisor(e) {
  display.value += e.target.textContent;
}

//funcion que va a realizar las operaciones.
//1- tomo el valor del primero numero, lo parseo para convertirlo a numero entero y lo muestro en el display.
function operation(operation) {
  firstNumber = parseInt(display.value);
  display.value = "";
  selectedOperation = operation;
}

//funcion que se ejecuta al seleccionar el boton de igual. Realizara la operacion seleccionada por el usuario dependiendo cada uno de los botones (+ - * /)
function calcular() {
  secondNumber = parseInt(display.value);
  let result = 0;
  switch (selectedOperation) {
    case "suma":
      result = firstNumber + secondNumber;
      break;
    case "resta":
      result = firstNumber - secondNumber;
      break;
    case "multiplica":
      result = firstNumber * secondNumber;
      break;
    case "divide":
      if (secondNumber === 0) {
        display.value = "Error: No se puede dividir entre cero";
        return;
      } else {
        result = firstNumber / secondNumber;
      }
      break;
    default:
      break;
  }
  display.value = result;
}
document
  .getElementById("suma")
  .addEventListener("click", () => operation("suma"));
document
  .getElementById("resta")
  .addEventListener("click", () => operation("resta"));
document
  .getElementById("multiplica")
  .addEventListener("click", () => operation("multiplica"));
document
  .getElementById("divide")
  .addEventListener("click", () => operation("divide"));
document.getElementById("iguala").addEventListener("click", calcular);

//funcion para limpiar el visor seleccionado el boton C
document.getElementById("limpia").addEventListener("click", () => {
  display.value = "";
  firstNumber = 0;
  secondNumber = 0;
  selectedOperation = null;
});

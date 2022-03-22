// const frutas = ['Banana', 'Manzana', 'Uva', 'Naranja'];

// const arrayFrutas = frutas.map(function(fruta) {
//     return fruta.toUpperCase();
// });

// const arrayFrutas = frutas.map(fruta => fruta.toUpperCase());
// console.log(frutas);
// console.log(arrayFrutas);

// Funcion declarativa
// function sumar() {
//   return 25 + 25;
// }

// Funcion anonima
// const saludar = function () {
//   return "Hola";
// };

// Funcion para sumar
// const suma = function () {
//   let resultado = 30 + 30;
//   console.log(resultado);
// };
// suma();

// const saludoTres = function (firstName, lastName) {
//   alert(`Hola, soy ${firstName} ${lastName}`);
// };

// let firstName = prompt("Ingresa tu nombre");
// let secondName = prompt("Ingresa tu apellido");

// saludoTres(firstName, secondName);

// const saludoTresUno = function () {
//   console.log("Aqui comienza mi funcion");
//   let firstName = prompt("Ingresa tu nombre");
//   let lastName = prompt("Ingresa tu apellido");
//   alert(`Hola, soy ${firstName} ${lastName}`);
//   console.log("Aqui termina mi funcion");
// };

// const sumaUno = function () {
//   console.log("Aqui comienza mi funcion");
//   let valueOne = prompt("Ingresa un valor");
//   let valueTwo = prompt("Ingresa otro valor");
//   let result = parseInt(valueOne) + parseInt(valueTwo);
//   alert(`la suma de ${valueOne} + ${valueTwo} es igual a ${result}`);
//   console.log("Aqui termina mi funcion");
// };

// Función flecha
// const sumaDos = () => {
//   console.log(100 + 30);
// };

// const sumaTres = () => 100 + 30;
// const sumaCuatro = (valueNumber, valueNumberTwo) =>
//   valueNumber + valueNumberTwo;

// let numerA = prompt("Ingresa un numero");
// let numerB = prompt("Ingresa otro numero");

// const sumaCinco = (a, b) => {
//   console.log(a + b);
// };
// sumaCinco(numerA, numerB);

// Scope global
// Es una variable declada fuera de una función o bloque de código

// let persona = {
//   nameValue: "Juan",
//   lastNameValue: "Perez",
// };

// const getPeople = function () {
//   console.log(persona.nameValue);
//   console.log(persona.lastNameValue);
// };

// Scope local
// Es una variable declada dentro de una función o bloque de código
// const saludarAlumno = function () {
//   let alumno = "Juan";
//   console.log(`Hola ${alumno}`);
// };

// let alumno = "Carlos";
// const saludarAlumnos = function () {
//   console.log(`Hola ${alumno}`);
// };

//Ejercicio con funciones
// Promt nomnbre ciudad

let ejercioDeFuncione = () => {
  let ciudad = [];
  let ingresaCiudades = "";
  do {
    //Asignamos el valor de la ciudad
    ingresaCiudades = prompt("Ingresa una ciudad que desees visitar");
    //Verificamos que la ciudad no este vacia y hacemos push
    ingresaCiudades == null? console.log(ciudad) : ciudad.push(ingresaCiudades);

    
  } while (ingresaCiudades!== null);
   document.write(`ciudades que desees visitar: ${ciudad.length}<br>`);
   document.write(`La primer posicion es: ${ciudad[0]}.<br> la segunda posicion es: ${ciudad[2]}.<br> La ultima posicion es: ${ciudad[ciudad.length-1]}<br>`);
   ciudad.push("Paris");
   document.write(`La segunda posicion es: ${ciudad[1]}.<br>`);
   ciudad.splice(1,1, "Barcelona");
   document.write(`El arreglo es el siguiente: ${ciudad.join(" - ")}.<br>`);
};


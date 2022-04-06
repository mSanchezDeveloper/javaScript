// // alert("¡Hola mundo!");

// //Declaración de variables
// const nombre = "Juan";
// const pi = 3.1416;

// // //Tipos de datos
// // //String
// // let stingName = "Esto es un string";
// // //Number
// // let numberExample = 12;
// // //Boolean true or false
// // let booleanExample = true;
// // //Null
// // let nullExample = null;
// // //Undefined
// // let undefinedExample = undefined;
// // //Array
// // let arrayExample = ["nombew", "Direccion", "Edad", "Estatura"];
// // //Object
// // let objectExample = {
// //   name: "Juan",
// //   lastName: "Perez",
// //   age: "23",
// //   height: "1.80",
// // };

// //Condicionales if else
// // age = parseInt(prompt("Ingresa tu edad"));

// // if (isNaN(age)) {
// //   alert("Ingresa un numero valido por favor");
// // } else if (age >= 18) {
// //   console.log("Es mayor de edad, tiene " + age + " años");
// // } else {
// //   console.log("Es menor de edad, tiene " + age + " años");
// // }

// // Condicionales switch
// // let day = parseInt(prompt("Ingresa el dia de la semana"));

// // switch (day) {
// //     case 1:
// //         console.log("Lunes");
// //         break;
// //     case 2:
// //         console.log("Martes");
// //         break;
// //     case 3:
// //         console.log("Miercoles");
// //         break;
// //     case 4:
// //         console.log("Jueves");
// //         break;
// //     case 5:
// //         console.log("Viernes");
// //         break;
// //     case 6:
// //         console.log("Sabado");
// //         break;
// //     case 7:
// //         console.log("Domingo");
// //         break;
// //     default:
// //         console.log("Ingresa un numero valido");
// //         break;
// // }

// // Condicionales compuestas
// // let numberOne = parseInt(prompt("Ingresa el primer numero"));
// // let numberTwo = parseInt(prompt("Ingresa el segundo numero"));

// // if (numberOne >= numberTwo && numberOne >=  numberTwo) {
// //   alert("Es verdadero");
// // } else {
// //     alert("Es falso");
// // };

// //Condicionales while
// // let contador = 1;

// while (contador < 30) {
//   if (contador === 1) console.group("Numeros enteros menores a 30");
//   console.log(contador);
//   contador++;
// }

// // console.groupEnd();

//do
// let contador = 30;
// do {
//   console.log("Hola mundo (Do while)");
//   contador = contador - 1;
// }	while (contador > 20);

// //for
// // for (let i = 0; i < 20; i++) {
// //   console.log("Soy el mejor programador (For)");
// // }

// let cadena= prompt("Ingresa una palabra");
// let cantidadDeVocales=0;

// for (let i = 0; i < cadena.length; i++) {
//   console.log(cadena[i]);
//   if (cadena[i] === "a" || cadena[i] === "e" || cadena[i] === "i" || cadena[i] === "o" || cadena[i] === "u") {
//     cantidadDeVocales++;
//   }
// }

// console.log("Cantidad de vocales: " + cantidadDeVocales);

//Array
let nombres = ["Juan", "Pedro", "Maria"];

for (let i = 0; i < nombres.length; i++) {
  console.log(nombres[i]);
}
//Push
nombres.push("Luna");
console.log(nombres);
nombres[0] = "Casa";
console.log(nombres)

//splice
nombres.splice(1, 3, "Sombra");
console.log(nombres);

nombres.splice(1);
console.log(nombres)

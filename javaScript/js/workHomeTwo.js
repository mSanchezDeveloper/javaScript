//Alert
//alert("Un mensaje");

//document.write
// document.write("Hello World");

//Suma
//document.write(3 + 5);

//Ingreso de datos
// let name = prompt("In\gresa tu nombre");
// document.write(name);

//Prompt
// let numberOne = parseInt(prompt("Ingresa el primer numero"));
// let numberTwo = parseInt(prompt("Ingresa el segundo numero"));
// document.write("La suma es " + (numberOne + numberTwo));

//Condicionales
// let numberOne = parseInt(prompt("Ingresa el primer numero"));
// let numberTwo = parseInt(prompt("Ingresa el segundo numero"));
// if (numberOne > numberTwo) {
//   document.write("El número mayor es el primer número " + numberOne);
// } else {
//   document.write("El número mayor es el segundo número " + numberTwo);
// }

//Condicionales
// let numberOne = parseInt(prompt("Ingresa el primer numero"));
// let numberTwo = parseInt(prompt("Ingresa el segundo numero"));
// let numberThree = parseInt(prompt("Ingresa el tercer numero"));

// if (numberOne > numberTwo && numberOne > numberThree) {
//   document.write("El número mayor es el primer número " + numberOne);
// } else if (numberTwo > numberOne && numberTwo > numberThree) {
//   document.write("El número mayor es el segundo número " + numberTwo);
// } else if (numberThree > numberOne && numberThree > numberTwo) {
//   document.write("El número mayor es el tercer número " + numberThree);
// }

//Divisible para 2
// let numberValue = parseInt(prompt("Ingresa un numero"));
// if (numberValue % 2 === 0) {
//   console.log(`El numero divisible para 2: ${numberValue}`);
// } else {
//   console.log(`El numero no es divisible para 2: ${numberValue}`);
// }

//Vocales de una frase
// let cadena= prompt("Ingresa una frase");
// let cantidadDeVocales=0;

// for (let i = 0; i < cadena.length; i++) {
//   console.log(cadena[i]);
//   if (cadena[i]==="a" || cadena[i]==="e" || cadena[i]==="i" || cadena[i]==="o" || cadena[i]==="u") {
//     cantidadDeVocales++;
//   }
// }
// console.log(`La cantidad de vocales de la palabra ${cadena} es: ${cantidadDeVocales}`);

//Divisible para 2, 3, 5 o 7
let numberValue = parseInt(prompt("Ingresa un numero"));
if (numberValue % 2 === 0) {
  console.log(`El numero divisible para 2`);
} if (numberValue % 3 === 0) {
  console.log(`El numero divisible para 3`);
} if (numberValue % 5 === 0) {
  console.log(`El numero divisible para 5`);
} if (numberValue % 7 === 0) {
  console.log(`El numero divisible para 7`);
}
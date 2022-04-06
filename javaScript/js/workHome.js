//Mayor de edad
// let agePeople = prompt("Ingresa tu edad");

// if (agePeople >= 18) {
//   alert(`Eres mayor de edad, tienes ${agePeople} años`);
// } else {
//   alert(`Eres menor de edad, tienes ${agePeople} años`);
// }

//Calificaciones
// let calificacion = parseInt(prompt("Ingresa una calificacion"));

// if (calificacion > 0 && calificacion < 11) {
//   if (calificacion >= 10) {
//     alert("Sobresaliente");
//   } else if (calificacion >= 8 && calificacion <= 9) {
//     alert("Notable");
//   } else if (calificacion >= 7) {
//     alert("Bien");
//   } else if (calificacion >= 5 && calificacion <= 6) {
//     alert("Suficiente");
//   } else if (calificacion >= 3 && calificacion <= 4) {
//     alert("Insuficiente");
//   } else if (calificacion >= 0 && calificacion <= 2) {
//     alert("Muy deficiente");
//   }
// } else {
//   alert("Número erroneo");
// }

//Boton cancelar
// let cadenasDeTexto = [];
// let ingresaCadenaDeTexto = "";
// do {
//   ingresaCadenaDeTexto = prompt("Ingresa una frase");
//   cadenasDeTexto.push(ingresaCadenaDeTexto);
// } while (ingresaCadenaDeTexto !== null);
// console.log(`El arreglo es el siguiente: ${cadenasDeTexto.join(" - ")}`);

//Boton cancelar y sumar
// let numValueArray = [];
// let suma = 0;
// let ingresaNumero = "";
// do {
//   ingresaNumero = prompt("Ingresa un número");
//   if (ingresaNumero !== null) {
//     numValueArray.push(parseInt(ingresaNumero));
//     suma += parseInt(ingresaNumero);
//   }
// } while (ingresaNumero !== null);
// console.log(`El arreglo es el siguiente: ${numValueArray.join(" - ")}`);
// console.log(`La suma es: ${suma}`);

//DNI
// let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

// let numero = prompt("Introduce tu número de DNI (sin la letra)");
// let letra = prompt("Introduce la letra de tu DNI (en mayúsculas)");
// letra = letra.toUpperCase();

// if(numero < 0 || numero > 99999999) {
//   alert("El número proporcionado no es válido");
// }
// else {
//   var letraCalculada = letras[numero % 23];
//   if(letraCalculada != letra) {
//     alert("La letra o el número proporcionados no son correctos");
//   }
//   else {
//     alert("El número de DNI y su letra son correctos");
//   }
// }

//Piramide
// for (let i = 0; i < 31; i++) {
//   let numbers = "";
//   for (let j = 1; j < i + 1; j++) {
//     numbers += i;
//   }
//   console.log(numbers);
// }

//Piramide inversa
// let numero = parseInt(prompt("Introduce un número"));

// if (numero < 0 || numero > 30) {
//   alert("El número proporcionado no es válido");
// } else {
//   for (let i = numero; i > 0; i--) {
//     let numbers = "";
//     for (let j = 1; j < i + 1; j++) {
//       numbers += i;
//     }
//     console.log(numbers);
//   }
// }

//Multiplos 4, 9 y linea 5
// var i;
// var j = 500;
// var rep = 0;
// for (i = 1; i <= j; i++) {
//     document.write(i);
//     if (i % 4 == 0) {
//         document.write(" (Multiplo de 4)");
//     }
//     if (i % 9 == 0) {
//         document.write(" (Multiplo de 9)");
//     }
//     document.write("<br>");
//     if (i % 5 == 0) {
//         document.write("<hr>");
//     }
// }

//3 edades - 3 nombres
// let nameOne = prompt("Introduce el nombre del primer nombre");
// let ageOne = parseInt(prompt("Introduce la edad del primer nombre"));
// let nameTwo = prompt("Introduce el nombre del segundo nombre");
// let ageTwo = parseInt(prompt("Introduce la edad del segundo nombre"));
// let nameThree = prompt("Introduce el nombre del tercer nombre");
// let ageThree = parseInt(prompt("Introduce la edad del tercer nombre"));

// if (nameOne.length > nameTwo.length && nameOne.length > nameThree.length) {
//   console.log(`El primer nombre, ${nameOne} es el más largo`);
// } else if (nameTwo.length > nameThree.length && nameTwo.length > nameOne.length) {
//   console.log(`El segundo nombre, ${nameTwo} es el más largo`);
// } else if(nameThree.length > nameOne.length && nameThree.length > nameTwo.length) {
//   console.log(`El tercer nombre, ${nameThree} es el más largo`);
// }

//Aleatorio entre 1 y 99
// let numero = Math.floor(Math.random() * 100) + 1;
// console.log(numero);

//Cambiar a mayusculas
// let changeToUpper = prompt("Introduce una frase");
// console.log(changeToUpper.toUpperCase());

// Usar join
// let cadena = prompt("Ingresa una palabra");
// let elements = [];

// for (let i = 0; i < cadena.length; i++) {
//   elements.push(cadena[i]);
// }

// console.log(`La frase ${cadena}, queda asi: ${elements.join("-")}`);

// Elements reverse
// let cadena = prompt("Ingresa una palabra");
// var elementReverse = "";
// for (var i = cadena.length - 1; i >= 0; i--) {
//     elementReverse += cadena[i];
// }
// console.log(`La frase ${cadena}, queda asi: ${elementReverse}`);

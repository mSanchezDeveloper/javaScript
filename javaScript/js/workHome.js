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
var i;
var j = 500;
var rep = 0;
for (i = 1; i <= j; i++) {
    document.write(i);
    if (i % 4 == 0) {
        document.write(" (Multiplo de 4)");
    }
    if (i % 9 == 0) {
        document.write(" (Multiplo de 9)");
    }
    document.write("<br>");
    if (i % 5 == 0) {
        document.write("<hr>");
    }
}
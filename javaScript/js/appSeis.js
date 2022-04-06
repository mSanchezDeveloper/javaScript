// Objetos
// var auto = {
//   color: ["Verde", "Negro"],
//   marca: "Fiat",
//   modelo: "Bravo",
//   year: 2008,
//   potencias: "1100hp",
// };

// Agregar propiedades
// auto.puertas = 5;
// Editar propiedades
// auto.color= "Rojo";
// Recorrer objeto

// var products = [
//   { id: 1, name: "Leche", price: 120, categories: ["familiar", "comida"] },
//   { id: 2, name: "Arroz", price: 80, categories: ["familiar", "comida"] },
//   { id: 3, name: "Lavadora", price: 7800, categories: ["electrodomésticos"] },
// ];

// let arrayNuevo = products.map((producto) => {
//   console.log(producto.name);
//   console.log(producto.price);
// });

// console.log("-------------");
// for (let index = 0; index < products.length; index++) {
//   console.log(products[index].name);
// }

// console.log("**************");
// products.forEach((products) => {
//   console.log(products.name);
// });

// function Persona(name, lastName, age) {
//   this.nombre = name;
//   this.apellido = lastName;
//   this.edad = age;
// }

// let personaOne = new Persona("Marcelo", "Sanchez", 41);
// console.log(personaOne);

// let car = new Object();
// car.marca = "GM";
// console.log(car);

// let carTwo = Object.create(car);
// console.log(carTwo);

// Comparando Objetos
// variable de referencia del objeto persona1
// var peopleOne = { nombre: "Juan" };

// variable de referencia del objeto persona2
// var peopleTwo = { nombre: "Juan" };

// peopleOne == peopleTwo; // retorna false
// peopleOne === peopleTwo; // retorna false

// peopleOne == peopleTwo;
// if (peopleOne == peopleTwo) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// variable de referencia del objeto peopleOne
// var peopleOne = { nombre: "Juliana" };

function PersonaTwos(nombre, apellido, edad) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.comer = function () {
    alert("Comiendo…");
  };
}

let personita = new PersonaTwos("Marcelo", "Sanchez", 41);

//Con ES6
// Definimos la clase
class People {
  constructor(firstName, lastName, age) {
    this.nombre = firstName;
    this.apellido = lastName;
    this.edad = age;
  }

  //Definimos un método
  eating(firstName = "Vale") {
    console.log(`Soy ${this.nombre} y estoy comiendo con ${firstName}`);
  }
}

let people = new People("Marce", "Sanchez", 21);
console.log(people);
people.eating("Vale");

//Setter y Getter
class Rectangle {
  constructor(height = 0, width = 0) {
    this._height = height;
    this._width = width;
  }

  set changeHeight(value) {
    this._height = value;
  }

  set changeWidth(value = 0) {
    this._width = value;
  }

  get area() {
    return this._height * this._width;
  }
}

let rectangulo = new Rectangle(10, 20);
rectangulo.changeHeight=40;
console.log(rectangulo);
console.log(rectangulo.area)

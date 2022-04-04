let auto = {
  color: ["Rojo", "Negro", "Azul"],
  marca: "Ford",
  modelo: "Nova",
  año: 1974,
  potencia: "130bhp",
};

// let camioneta = ["Verde", "Fiat", "Bravo"];

// auto.kilometros = 3000;
// delete auto.marca;
// console.log(auto);

//Recorrer keys
// for (var llave in auto) {
//     if (auto.hasOwnProperty(llave))           {
//       console.log(auto[llave])
//     }
//   }

//   var llaves = Object.keys(auto);
//   for (var i=0; i < llaves.length; i++) {
//     var llave = llaves[i];
//     console.log(auto[llave]);
//   }

// console.log(`El color es ${auto.color}`);
// Agregar propiedades al objeto
// auto.papeles = true;
// console.log(`Los papeles están ${auto.papeles}`);
// console.log(auto);
// Editar propiedades al objeto
// auto.papeles = false;
// console.log(auto);
// Borrar propiedades del objeto
// delete auto.papeles;
// console.log(auto);

// var products = [
//   {
//     id: "lac01",
//     name: "Leche",
//     price: 120,
//     categories: ["familiar", "comida"],
//   },

//   { id: "ric12", name: "Arroz", price: 80, categories: ["familiar", "comida"] },

//   {
//     id: "elc001",
//     name: "Lavadora",
//     price: 7800,
//     categories: ["electrodomésticos"],
//   },
// ];

// for (let i = 0; i < products.length; i++) {
//   console.log(products[i]);
//   console.log(`Codigo: ${products[i].id}`);
//   console.log(`Producto: ${products[i].name}`);
//   console.log(`Precio: ${products[i].price}`);
//   console.log(`Precio: ${products[i].categories[0]}`);
//   console.group(products);
// }

//Construir objetos con funccion constructora
// function Persona(name, lastName, age) {
//   this.name = name;
//   this.lastName = lastName;
//   this.age = age;
// }

// var marcelo = new Persona("Marcelo", "Sánchez", 41);
// console.log(marcelo.name);
// console.log(marcelo);

// Creando objetos con object.create()
let auto2 = Object.create(auto);
auto2.precio = 4500;
console.log(auto);
console.log(auto2);
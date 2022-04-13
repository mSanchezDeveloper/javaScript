//Setter y Getter
// class Rectangle {
//   constructor(height = 0, width = 0) {
//     this.height = height;
//     this.width = width;
//   }
//   set setHeight(x) {
//     this.height = x;
//   }
//   set setWidth(y) {
//     this.width = y;
//   }
//   get getArea() {
//     return this.height * this.width;
//   }
// }

// const rectangle = new Rectangle (10, 20);
// console.log(rectangle);
// console.log(rectangle.getArea);

//DOM
document.body.innerHTML = "Example";
//crear elemento
const exampleDOM = document.createElement("H1");
//Inyectar contenido
exampleDOM.innerHTML = "Hola mundo";
//Añadirlo al DOM
document.body.appendChild(exampleDOM);

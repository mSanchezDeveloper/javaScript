let alumnos = ["Daniel", "Marcelo", "Juan"];
console.log(alumnos);
console.log(alumnos.length);
alumnos.push("Pedro");
console.log(alumnos[2]);
console.log(alumnos[alumnos.length - 1]);
console.log("--- ---");
//Recorrer arreglo  con for
console.group("Alumnos: ");
for (let i = 0; i < alumnos.length; i++) {
  console.log(alumnos[i]);
}

//Añadir elementos al final del arreglo
alumnos.push("Jorge");
console.log(alumnos);

//Borrar el ultimo elemento del arreglo
alumnos.pop();

//Añadir elementos al inicio del arreglo
alumnos.unshift("Maciel");

//Borrar el primer elemento del arreglo
alumnos.shift();

//Encontrar el indice de un elemento
// console.log(alumnos.indexOf("Maciel"));
// const findIndex = prompt("Ingrese el nombre del alumno que desea buscar");
// console.log(alumnos.indexOf(findIndex));
// if (alumnos.indexOf(findIndex) !== -1) {
//   console.log("El alumno" + " " + alumnos.indexOf(findIndex));
// } else {
//   console.log("No se encontro indice");
// }

//Determinar si un elemento existe en el arreglo
console.log(alumnos.includes("Juan"));

//Ordenar arreglo alfabeticamente
console.log(alumnos.sort());

//Pasar a texto
console.log(alumnos.join());

//Creando array con map
let mapArray = alumnos.map(function (alumno) {
  return alumno + " Comision 28i";
});
console.log(mapArray);

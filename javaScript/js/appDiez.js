//Ejerciocio
class Persona {
  constructor(nombre, edad, dni, sexo, peso, altura, nacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.dni = dni;
    this.peso = peso;
    this.altura = altura;
    this.nacimiento = nacimiento;
  }
  mostrarGen() {
    switch (nacimiento) {
      case "this.nacimiento >= 1930 && this.nacimiento <= 1948":
        alert(`${this.nombre} pertenece a la genraciòn "Silent"`);
        break;
      case "this.nacimiento >= 1949 && this.nacimiento <= 1964":
        alert(`${this.nombre} pertenece a la genraciòn "Baby boomer"`);
        break;
      case "this.nacimiento >= 1965 && this.nacimiento <= 1980":
        alert(`${this.nacimiento} pertenece a la genraciòn "Millenial"`);
        break;
      case "this.nacimiento >= 1981 && this.nacimiento <= 1995":
        alert(`${this.nacimiento} pertenece a la genraciòn "Generation X"`);
        break;
      case "this.nacimiento >= 1996 && this.nacimiento <= 2010":
        alert(`${this.nacimiento} pertenece a la genraciòn "Generation Y"`);
        break;
      case "this.nacimiento >= 2011":
        alert(`${this.nacimiento} pertenece a la genraciòn "Generation Z"`);
        break;
    }
  }
  esMayor() {
    if (this.edad >= 18) {
      alert(`${this.nombre} es mayor de edad`);
    } else {
      alert(`${this.nombre} es menor de edad`);
    }
  }
  mostraDatos() {
    alert(
      `${this.nombre} tiene ${this.edad} años, ${this.sexo} y su DNI es ${this.dni}`
    );
  }
  generarId() {
    this.dni = Math.round(Math.random() * 1000000);
  }
}

const generarPersona = () => {
  let nombre = document.getElementById("nombre").value,
    edad = document.getElementById("edad").value,
    dni = document.getElementById("dni").value,
    sexo = document.getElementById("sexo").value,
    peso = document.getElementById("peso").value,
    altura = document.getElementById("altura").value,
    nacimiento = document.getElementById("nacimiento").value;

  persona = new Persona(nombre, edad, dni, sexo, peso, altura, nacimiento);
  return persona;
};

// Juego de piedra papel o tijera
const opciones = ["Piedra", "Papel", "Tijera"];
let jugador = null;
let bot = null;

//Empezar a jugar
function playGame() {
  aletorio();
  selecionDelUsuario();
}
playGame();

//Escoger contrincante
function aletorio() {
  return (bot = Math.round(Math.random() * 2));
}

//Seleccion de usuario
function selecionDelUsuario() {
  jugador = parseInt(prompt("Escoje una opcion: Piedra = 0, Papel = 1 o Tijera = 2"));
  if (!isNaN(jugador)) {
    if (jugador >= 0 && jugador <= 2) {
      switch (true) {
        case jugador === bot:
          alert("Empate");
          break;

        case jugador === 0 && bot === 2:
          alert("Ganaste");
          break;

        case jugador === 1 && bot === 0:
          alert("Ganaste");
          break;

        case jugador === 2 && bot === 1:
          alert("Ganaste");
          break;

        default:
          alert("Perdiste");
          break;
      }
    } else {
      alert("Ingresa numeros del 0 al 2");
    }
  } else {
    alert("Ingresa solo numeros");
  }
}
document.write(
  `<h1>El bot elije: ${opciones[bot]}</h1><h1>El usuario elijio: ${opciones[jugador]}</h1>`
);

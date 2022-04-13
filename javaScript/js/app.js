//setInterval
const blucle = setInterval(() => {
  console.log("Comienza el bucle");
}, 1000);

const stopBucle = () => {
  clearInterval(blucle);
  console.log("El bucle se ha detenido");
};

setTimeout(() => {
  stopBucle();
}, 5000);

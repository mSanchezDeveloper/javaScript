const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("No se resolvio la promesa");
  }, 2000);
});

promesa.then((response) => {
  console.log(response);
});

promesa.catch((error) => {
  console.warm(error);
});

const motos = [
    {
        id: 1,
        marca: "Acme"
    }
    {
        id: 2,
        marca: "KTML"
    }
    {
        id: 3,
        marca: "Yamaha"
    }
    {
        id: 4,
        marca: "Honda"
    }
]

const buscarMotoId = (id) => {
    return new Promise (())
}
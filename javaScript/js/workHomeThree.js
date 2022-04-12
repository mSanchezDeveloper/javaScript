//meses
let months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

function printMonths(months) {
    for (let i = 0; i < months.length; i++) {
        document.write(`${months[i]} <br>`);
    }
}

//Function par o impar
function parImpar() {
    let num = parseInt(prompt("Ingrese un numero"));
    if (num % 2 == 0) {
        document.write(`</br>El numero ${num}, es par.`);
    } else {
        document.write(`</br>El numero ${num}, es impar.`);
    }
}
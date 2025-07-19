var username = "nombre1";

console.log(username)

nameuser = "nombre2";

console.log(username)

const pi = 3.1415;
console.log(pi)
// pi = 100;

console.log(pi)

let numero1 = 10;
let numero2 = 20;

let resultado = numero1 + numero2;

console.log(resultado)

let concatenacion = username + ' ' + nameuser;

console.log(concatenacion)

let resultado2 = numero2 > numero1;
    if (resultado2 === true) {
        console.log('Verdadero')
    } else {
        console.log('Falso')
    }
    

let tipoTajerta = "Debito"

switch(tipoTajerta) {
    case "Debito":
        console.log("Debito");
        break;
    case "Credito":
        console.log("Credito");
        break;
    default:
        console.log("Sin Tarjeta");
}   

let contador = 10;

while (contador > 0) {
    console.log("hola mundo");
    contador = contador - 1;
}

let nombres = ["nombre1", "nombre2", "nombre3"];

console.log(nombres[1])

function suma(n1,n2) {
    console.log(n1+n2)
}

suma(2,4)
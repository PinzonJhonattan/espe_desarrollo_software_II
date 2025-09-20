/* function verTipo<T>(argument: T): T {
    return argument;
}

interface Mamiferos {
    tipo: string;
    genero: string;
    edad: number;

}

const Vaca: Mamiferos = {
    tipo: "Mamifero",
    genero: "Hembra",
    edad: 5
}

let prueba = verTipo("123");
let prueba3 = verTipo(true);
let prueba2 = verTipo(123);
let prueba4 = verTipo(Vaca);
console.log(prueba, prueba2, prueba3, prueba4);

export {} */

interface Mamiferos {
    tipo: string;
    genero: string;
    edad: number;

}

const Vaca: Mamiferos = {
    tipo: "Mamifero",
    genero: "Hembra",
    edad: 5
}

function crearCaja<T>(param: T): {contenido: T} {   
    return {contenido: param};
}

let prueba5 = crearCaja("pizza");
let prueba6 = crearCaja(true);
let prueba7 = crearCaja(Vaca);

console.log(prueba5, prueba6, prueba7);
export {}
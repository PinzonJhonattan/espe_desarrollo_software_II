interface Pasajero {
    nombre: string;
    hijos?: string[];
}


const pasajero1: Pasajero = {
    nombre: 'Juan',
    hijos: ['Maria', 'Juan']
}

const pasajero2: Pasajero = {
    nombre: 'Juan'

}

const mostrarHijos = (pasajero: Pasajero) => {
    const cuantosHijos = pasajero.hijos?.length ?? 0;
    console.log(cuantosHijos);
}

mostrarHijos(pasajero1);
/* mostrarHijos(pasajero2); */
console.log("--------------------------------")





export {}
import type { Usuario, animal } from "./05-importaciones-exportaciones-interfaces";
import { mostrarDatosAnimal } from "./05-importaciones-exportaciones-funciones";
import { mostrarDatosUsuario } from "./05-importaciones-exportaciones-funciones";

const usuario: Usuario = {
    nombre: 'Gerardo las vacunas',
    edad: 25,
    email: 'juan@example.com',
    activo: true,
    roles: ['admin', 'editor'],
    direccion: {
        ciudad: 'Bogota',
        pais: 'Colombia'
    }
};

const animal: animal = {
    nombre: 'Firulais',
    edad: 5,
    color: 'Negro',
    raza: 'Perro',
    sonido: 'Guau'
};


/* console.log(mostrarDatosUsuario(usuario));
console.log(mostrarDatosAnimal(animal)); */

export type { usuario, animal };
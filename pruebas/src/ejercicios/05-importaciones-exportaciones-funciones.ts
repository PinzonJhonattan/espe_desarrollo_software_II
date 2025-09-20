import type { Usuario, animal } from "./05-importaciones-exportaciones-interfaces";

function mostrarDatosUsuario(usuario: Usuario): string {
    return `Nombre: ${usuario.nombre}, Edad: ${usuario.edad}, Email: ${usuario.email}, Activo: ${usuario.activo}, Roles: ${usuario.roles}, Ciudad: ${usuario.direccion.ciudad}, Pais: ${usuario.direccion.pais}`;
}

function mostrarDatosAnimal(animal: animal): string {
    return `Nombre: ${animal.nombre}, Edad: ${animal.edad}, Color: ${animal.color}, Raza: ${animal.raza}, Sonido: ${animal.sonido}`;
}

    export { mostrarDatosUsuario, mostrarDatosAnimal };

interface Usuario {
    nombre: string;
    edad: number;
    email: string;
    activo: boolean;
    roles: string[];
    direccion: {
        ciudad: string;
        pais: string;
    } 
}

interface animal {
    nombre: string;
    edad: number;
    color: string;
    raza: string;
    sonido: string;
}

export type { Usuario, animal };
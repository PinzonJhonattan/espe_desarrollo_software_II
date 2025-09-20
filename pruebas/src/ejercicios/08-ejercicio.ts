interface Libro {
    titulo?: string;
    autor?: Autor[];
    anioPublicacion?: number;
}
interface Autor {
    nombre: string;
    apellido: string;
    pais: string;
}

const libro1: Libro = {
    titulo: 'El principito',
    autor: [{nombre: 'Antoine', apellido: 'de Saint-Exupéry', pais: 'Francia'}],
    anioPublicacion: 1943
}
const libro2: Libro = {
    
    autor: [{nombre: 'Antoine', apellido: 'de Saint-Exupéry', pais: 'Francia'}],
    anioPublicacion: 1943
}
const libro3: Libro = {
    titulo: 'El principito',
    autor: [{nombre: 'Antoine', apellido: 'de Saint-Exupéry', pais: 'Francia'}]
    
}
const libro4: Libro = {
    titulo: 'El principito',
    anioPublicacion: 1943
    
}

function mostrarLibro( libro: Libro): Libro {
    console.log("--------------------------------")
    console.log(libro.titulo ?? "No hay titulo");
    console.log(libro.autor  ?? "No hay autor");
    console.log(libro.anioPublicacion ?? "No hay año de publicación");
    console.log("--------------------------------")
    return libro;
}

mostrarLibro(libro1);
mostrarLibro(libro2);
mostrarLibro(libro3);
mostrarLibro(libro4);

export {}
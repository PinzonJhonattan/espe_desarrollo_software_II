let arreglo: string[] = ["alto", "bajo"];

interface PersonaInterface {
    nombre: string;
    edad: number;
    caracteristicas?: string[];
}

const persona: PersonaInterface = {
    nombre: 'Pepito',
    edad: 10,
    
}

console.log(persona)

export {}
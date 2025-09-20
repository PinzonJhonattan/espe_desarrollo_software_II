function sumar(a:number,b:number):number {
    return a + b;
}

const sumar2 = (a:number,b:number):number => {
    return a + b;
}
function multiplicar(primerNumero:number, segundoNumero?:number, base:number = 4):number {
    return primerNumero * base;
}

const result:number = sumar(3,2)
const result2:number = sumar2(3,2)
const result3:number = multiplicar(7)
console.log(result)
console.log(result2)
console.log(result3)

/* aa */

interface PersonajeInterface {
    nombre: string;
    vida: number;
    mostrarDetalle: () => void;
}

const porcentajeVida: (personaje: PersonajeInterface, vida:number) => void = (personaje, vida) => {
    personaje.vida += vida;
    console.log(personaje.vida)
}

const persona1: PersonajeInterface = {
    nombre: 'Paco',
    vida: 20,
    mostrarDetalle() {
        console.log(`-> Nombre: ${this.nombre} | Vida: ${this.vida}`);
    }
}
console.log(persona1)

porcentajeVida(persona1, 30)

interface Usuario {
    id: number;
    nombre: string;
    email: string;
    activo: boolean;
    roles: string[];
    direccion: {
        ciudad: string;
        pais: string;
    } 
    saludar: () => string;
    actualizarEmail: (nuevoEmail:string) => void;
}

const usuaro1: Usuario = {
    id: 1,
    nombre: "Ana Pérez",
    email: "ana@example.com",
    activo: true,
    roles: ["admin", "editor"],
    direccion: {
        ciudad:"bogota",
        pais:"colombia"
    },
    saludar (){
        return `Hola, mi nombre es ${this.nombre}`;
    },
    actualizarEmail(nuevoEmail:string){
        this.email = nuevoEmail;
    }
}

console.log(usuaro1)


export {}
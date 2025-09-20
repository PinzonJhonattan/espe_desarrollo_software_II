import type { Comida } from "./06-interfaces";


const hamburguesa: Comida = {
    nombre: 'Hamburguesa',
    calificacion: 5,
    esVegana: false
}

const ensalada: Comida = {
    nombre: 'Ensalada',
    calificacion: 4,
    esVegana: true
}

const pizza: Comida = {
    nombre: 'Pizza',
    calificacion: 3,
    esVegana: false
}

export class ComidaService {
    constructor(
        public comida: Comida,
    ){
    }

    mostrarInfo(comida: Comida){
        console.log(`Nombre: ${comida.nombre}, Calorías: ${comida.calificacion}, ¿Vegana?: ${comida.esVegana}`);
    }

    modificarCalorias(comida: Comida, calorias: number): Comida{
        comida.calificacion = calorias;
        return comida;
    }


}

export class NotificadorComida {
    constructor(
        public comidaService: ComidaService
    ){
    }

    notificar(comida: Comida){
        console.log('Notificando comida...')
        console.log('--------------------------------')
        this.comidaService.mostrarInfo(comida);
    }
}   

const comidaService = new ComidaService(hamburguesa);
const notificadorComida = new NotificadorComida(comidaService);
notificadorComida.notificar(hamburguesa);

const comidaService2 = new ComidaService(hamburguesa);
const modificarCalorias = comidaService2.modificarCalorias(hamburguesa, 8);
const notificadorComida2 = new NotificadorComida(comidaService2);
notificadorComida2.notificar(modificarCalorias);


const comidaService3 = new ComidaService(pizza);
const notificadorComida3 = new NotificadorComida(comidaService3);
notificadorComida3.notificar(pizza);

const comidaService4 = new ComidaService(pizza);
const modificarCalorias2 = comidaService4.modificarCalorias(pizza, 10);
const notificadorComida4 = new NotificadorComida(comidaService4);
notificadorComida4.notificar(modificarCalorias2);








export {}

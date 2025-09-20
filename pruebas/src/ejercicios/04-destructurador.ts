interface Detalle {
    autor: string;
    anio: number;
}

interface ReproductorAudio {
    volumen: number;
    duracion: number;
    cancion: string;
    detalle: Detalle;
}

const reproductorAudio: ReproductorAudio = {
    volumen: 50,
    duracion: 10,
    cancion: 'Photograph',
    detalle: {
        autor: 'Ed Sheeran',
        anio: 2014
    }
}

const cancion = reproductorAudio.cancion;
const autor = reproductorAudio.detalle.autor;

/* console.log(cancion);
console.log(autor);
 */
// Desestructuración de objetos
/* console.log('------ Desestructuración de objetos ------');
 */
/* Forma larga
const { detalle: detalle2 } = reproductorAudio
const { autor: autor2, anio: anio2 } = detalle2
console.log(detalle2);
console.log(autor2, anio2);
*/

/* const { volumen, cancion: nombreCancion, detalle: { autor: nombreAutor, anio } } = reproductorAudio; */
/* console.log('Volumen: ', volumen);
console.log('Nombre de la canción: ', nombreCancion);
console.log('Nombre del autor: ', nombreAutor);
console.log('Año: ', anio); */

// Desestructuración de arrays
const frutas = ['Manzanas', 'Fresas', 'Naranjas'];
console.log("------ Desestructuración de arrays ------");

console.log("Frutas: " + (frutas[3] || 'No hay frutas'));

// const [fruta1, fruta2, fruta3, fruta4 = 'No hay frutas'] = frutas;

// Al dejar solo una coma, se ignora el valor de dicha posición.
const [,, fruta3] = frutas;

/* console.log(fruta3); */

//////////////////////////////////////////////////////////
export interface Producto {
    descripcion: string;
    precio: number;
}

const celular: Producto = {
    descripcion: 'Samsung Galaxy S23',
    precio: 800
};

const computador: Producto = {
    descripcion: 'MSI Katana 15 B13V',
    precio: 1300
};

const carrito: Producto[] = [celular, computador];
const impuesto: number = 0.25;
const propina: number = 0.3;

interface ImpuestosOption {
    impuesto: number;
    productos: Producto[];
    propina: number;
}

export function calcularImpuesto(options: ImpuestosOption): number[] {
    let total = 0;
    // Otra forma de recorrer el array.
    /*options.productos.forEach(({ precio }) => {
        total += precio;
    });*/
    options.productos.forEach(producto => {
        total += producto.precio;
    });
    return [total, total * options.impuesto, ((total * options.impuesto) + total) * options.propina];
}

const resultadoCompra: number[] = calcularImpuesto({
    impuesto: impuesto,
    productos: carrito,
    propina: propina
});

/* console.log("Total: " + resultadoCompra[0]);
console.log("Total Impuesto: " + resultadoCompra[1]);
console.log("Propina: " + resultadoCompra[2]); */

const [totalCompra, totalImpuestoCompra] = calcularImpuesto({
    impuesto: impuesto,
    productos: carrito,
    propina: propina
});
/* 
console.log("Total: " + totalCompra);
console.log("Total Impuesto: " + totalImpuestoCompra); */


/*
    ===== Código de TypeScript =====
*/
interface Pasajero {
    nombre: string;
    hijos?: string[];
}

const pasajero1: Pasajero = {
    nombre: 'LISA'
}

const pasajero2: Pasajero = {
    nombre: 'Lena',
    hijos: ['Liam', 'Livy']
}

function imprimirHijos (pasajero: Pasajero){
    const cuantosHijos = pasajero.hijos?.length || 0;

    console.log(cuantosHijos);
}

imprimirHijos(pasajero1);
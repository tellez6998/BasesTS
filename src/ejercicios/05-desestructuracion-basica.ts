

/*
    ===== Código de TypeScript =====
*/
interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}
interface Detalles{
    autor: string,
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'The Happiest Girl',
    detalles:{
        autor: 'Blackpink',
        anio: 2022
    }
}

const { volumen, segundo, cancion, detalles } = reproductor;
const { autor } = detalles;

//const { volumen, segundo, cancion, detalles:{autor} } = reproductor;

//console.log('El volumen actual de: ', volumen);
//console.log('El segundo actual de: ', segundo);
//console.log('La cancion actual de: ', cancion);
//console.log('El autor es: ', autor);

const dbz: string[] = ['Goku', 'Vegeta', 'Trunk'];
const [ , , p3 ] = dbz;

console.log('Personaje 1: ',dbz[0]);
console.log('Personaje 2: ',dbz[1]);
console.log('Personaje 3: ',p3);
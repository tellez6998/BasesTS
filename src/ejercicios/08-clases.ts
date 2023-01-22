

/*
    ===== Código de TypeScript =====
*/
class PersonaNormal {
    constructor(
        public nombre: string,
        public direccion: string
        )
    {}
}
class Heroe extends PersonaNormal {
    //private alterEgo: string;
    //private edad: number;
    //private nombreReal: string;

    constructor(
        public alterEgo: string,
        public edad: number,
        public nombreReal: string,
        )
    {
        super(nombreReal, 'New york, USA');
    }
}


const iroman = new Heroe('Iroman',45,'Tony');


console.log(iroman);
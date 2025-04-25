class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }

    caminar() {
        console.log(`${this.nombre} está caminando.`);
    }
    get nombre(){
        return this.nombre;
    }
    set nombre(nuevoNombre){
        this.nombre = nuevoNombre;
    }
}

const persona1 = new Persona("Jersson");
persona1.caminar();
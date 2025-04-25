class Persona {
    #nombre
    constructor(nombre) {
    this.#nombre = nombre;
}
caminar(){
    console.log(`${this.#nombre} esta caminando`);
     
   }
}

class Empleado extends Persona{
    #Salario
    constructor(Salario){
        this.Salario = Salario;
        super(nombre)
    }
    trabajar(){
        console.log(`${this.#nombre} esta trabajando`);
    }

    setSalario(Salario){
     this.#Salario = Salario;
    }

    getSalario() {
        return this.#Salario;
    }
}

setEdad(edad){
    console.log("llamando al setter de la clase base persona...");
 super.setEdad(edad) ;  
}

const empleado1 = new Empleado(console.log("Jersson", 500))
Empleado.setEdad(30);

console.log(`Nombre ${empleado1.nombre}`);
console.log(`edad ${empleado1.getEdad}`);
console.log(`salario ${empleado1.getSalario}`);
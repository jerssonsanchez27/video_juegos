class Vehiculo {
    constructor(peso, Vmaxima) {
        this.peso = peso;
        this.Vmaxima = Vmaxima;
    }
    mover(){
        console.log("el vehiculo se esta moviendo");
        }
}

class Carro extends Vehiculo {
    mover(){
    
        console.log(`el carro se esta moviendo a una velocidad de ${this.Vmaxima} y  tiene un peso de ${this.peso} toneladas`); 
    }
}

class Bicicleta extends Vehiculo {
    mover(){
        console.log(`la bicicleta se esta moviendo a una velocidad de ${this.Vmaxima} km/h y tiene un peso de ${this.peso} kg`);

    }
}

const carro = new Carro (180, 14)
carro.mover();
const bicicleta = new Bicicleta (45, 25)
bicicleta.mover();
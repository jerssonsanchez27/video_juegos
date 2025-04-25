class Animal {
   HacerSonido(){
    console.log("el animal hace sonido");
    }
}

class Gato extends Animal{
    HacerSonido() {
        console.log("el gato dice: ¡miau!");
        
    }
}

class Perro extends Animal {
    HacerSonido(){
        console.log("el perro dice: ¡guau!");
    }
}

const perro = new Perro();
perro.HacerSonido(); 
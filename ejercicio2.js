class Contador {
static cuenta = 0;

static incrementar(){
    Contador.cuenta++;
    console.log(`valor de la cuenta ${Contador.cuenta}`);
  }
}

Contador.incrementar();
console.log(Contador.cuenta);

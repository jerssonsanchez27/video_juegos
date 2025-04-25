class CuentaBancaria {
    constructor (inicial){
        this.inicial = inicial;
    
     this.getSaldo = function () {
        return saldo;
     };
 
   

    this.depositar = function (monto){
        if (monto>0) {
            saldo += monto;
            console.log(`se han depositado $${monto}. saldo actual: $${saldo}`);    
            } else {
                console.log("el monto de deposito debe ser positivo");
                };
    }
    this.retirar = function(monto){
        if (monto > 0 && monto <= saldo) {
            saldo -= monto;
            console.log(`se han retirado $${monto}. Saldo actual: $${saldo}`);
        } else{
            console.log("fondos insuficientes o monto invalido.");
        }
    };
  }
}

const cuenta1 = new CuentaBancaria(1000);
 console.log("saldo inicial:", cuenta1.getSaldo());
 
 cuenta1.depositar(500);
 cuenta1.retirar(200);

 console.log("saldo final:", cuenta1.getSaldo());
 
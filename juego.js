class inventario {
    #videojuegos
    constructor(nombre, precio, categoria ) {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria =categoria;
        this.#videojuegos = [];
}
agregarVideojuego(){
this.#videojuegos.push (`nombre: ${this.nombre} precio:$${this.precio} categoria:${this.categoria}`)
}

eliminarVideojuego(nombre){
    const index = this.#videojuegos.findIndex((v) => v.nombre === nombre);
    if (index !== -1) {
      this.#videojuegos.splice(index, 1);
      console.log(`Videojuego '${nombre}' eliminado.`);
    } else {
      console.log(`Videojuego '${nombre}' no encontrado.`);
    }
 }

}






const videojuego1 = new inventario ("free fire", "gratuito", "accion")

videojuego1.agregarVideojuego()
videojuego1.eliminarVideojuego("free fire")
console.log(videojuego1);

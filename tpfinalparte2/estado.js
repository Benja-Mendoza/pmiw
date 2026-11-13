class Estado {
  constructor() {
    this.actual = "jugando";
  }

  cambiar(nuevo) {
    this.actual = nuevo;
  }

  es(nombre) {
    // true si el estado actual es el que preguntamos
    return this.actual == nombre;
  }
}

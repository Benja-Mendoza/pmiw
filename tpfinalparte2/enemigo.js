class Enemigo {
  constructor() {
    this.x = -100;
    this.y = 150;
    this.destino = -100;
    this.velocidad = 3;

    this.contador = 0;
  }

  acercarse() {
    this.destino = this.destino + 100;
  }

  mover() {
    if (this.x < this.destino) {
      this.x = this.x + this.velocidad;
    }

    
    this.contador = this.contador + 0.1;
    if (this.contador >= imagenesEnemigo.length) {
      this.contador = 0;
    }
  }

  seguir(jugador) {
    this.y = jugador.y;
  }

  dibujar() {
    image(imagenesEnemigo[int(this.contador)], this.x, this.y + 10, 80, 80);
  }
}

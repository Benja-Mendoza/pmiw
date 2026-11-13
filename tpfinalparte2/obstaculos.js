class Obstaculo {
  constructor() {
    this.tam = 75;
    this.velocidad = 5;
    this.reaparecer();
  }

  reaparecer() {
    this.x = 800 + random(0, 400);
    this.y = 50 + int(random(0, 3)) * 100;
  }

  mover() {
    this.x = this.x - this.velocidad;
  }

  dibujar() {
    image(imagenObstaculo, this.x, this.y + 15, this.tam, this.tam);
  }

  chocaCon(jugador) {
    if (jugador.saltando == true) {
      return false;
    }

    if (this.y != jugador.y) {
      return false;
    }

    if (this.x < jugador.x + 70 && this.x + this.tam > jugador.x + 30) {
      return true;
    }

    return false;
  }

  salio() {
    return this.x < -this.tam;
  }
}

class Vida {
  constructor() {
    this.cantidad = 2;
  }

  perder() {
    this.cantidad = this.cantidad - 1;
  }

  sinVidas() {

    return this.cantidad <= 0;
  }

  dibujar() {
  
    noStroke();
    fill(255, 0, 0);
    for (let i = 0; i < this.cantidad; i++) {
      ellipse(740 + i * 40, 25, 25, 25);
    }
  }
}

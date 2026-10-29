class Obstaculos {
  constructor() {
    this.tam = 25;
    this.x = 800;
    this.velocidad = 5;
    this.elegirVia();
  }

  elegirVia() {
    let via = int(random(0, 3));

    if (via == 0) {
      this.y = 87;
    } else if (via == 1) {
      this.y = 187;
    } else {
      this.y = 287;
    }
  }

  mover() {
    this.x = this.x - this.velocidad;

    if (this.x < -this.tam) {
      this.x = 800;
      this.elegirVia();
    }
  }

  dibujar() {
    noStroke();
    fill(255, 0, 0);
    rect(this.x, this.y, this.tam, this.tam);
  }
}

class Jugador {
  constructor() {
    this.x = 100;
    this.y = 150;
    this.saltando = false;
    this.contador = 0;
    this.ft = 0;       
  }

  mover() {

    this.ft = this.ft + 0.10;
    if (this.ft >= imagenesJugador.length) {
      this.ft = 0;
    }

    if (this.saltando == true) {
      this.contador = this.contador + 1;
      if (this.contador > 30) {
        this.saltando = false;
        this.contador = 0;
      }
    }
  }

  saltar() {
    if (this.saltando == false) {
      this.saltando = true;
    }
  }

  irArriba() {
    if (this.y > 75) {
      this.y = this.y - 100;
    }
  }

  irAbajo() {
    if (this.y < 275) {
      this.y = this.y + 100;
    }
  }

  dibujar() {
    let img = imagenesJugador[int(this.ft)];

    noStroke();
    if (this.saltando == true) {
      fill(0, 0, 0, 80);
  
    } else {
      image(img, this.x, this.y, 100, 100);
    }
  }
}

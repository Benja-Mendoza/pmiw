class Fondo {
  constructor() {
    this.colorVias = color(45, 45, 45, 170);
  }

  dibujar() {
    image(imagenFondo, 0, 0, 800, 400);


    noStroke();
    fill(this.colorVias);
    rect(0, 50, 800, 300);

    stroke(200, 200, 200, 180);
    strokeWeight(2);

    line(0, 150, 800, 150);
    line(0, 250, 800, 250);


    line(0, 50, 800, 50);
    line(0, 350, 800, 350);
  }
}

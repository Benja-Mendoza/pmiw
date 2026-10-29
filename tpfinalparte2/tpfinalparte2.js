let fondo;
let jugador;
let obstaculo;
let imagenFondo;
let imagenesJugador = []; 

function preload() {
  imagenFondo = loadImage("data/fondo.png");

  // NUEVO
  imagenesJugador[0] = loadImage("data/jugador0.png");
  imagenesJugador[1] = loadImage("data/jugador1.png");
}

function setup() {
  createCanvas(800, 400);

  fondo = new Fondo();
  jugador = new Jugador();
  obstaculo = new Obstaculos();
}

function draw() {
  fondo.dibujar();

  obstaculo.mover();
  obstaculo.dibujar();

  jugador.mover();
  jugador.dibujar();
}

function keyPressed() {
  if (key == " ") {
    jugador.saltar();
  }

  if (keyCode == UP_ARROW) {
    jugador.irArriba();
  }

  if (keyCode == DOWN_ARROW) {
    jugador.irAbajo();
  }
}

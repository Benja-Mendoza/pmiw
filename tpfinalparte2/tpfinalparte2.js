//https://youtu.be/IbwnpRt6B78

let juego;
let imagenFondo;
let imagenObstaculo;
let imagenesJugador = [];
let imagenesEnemigo = [];

function preload() {
  imagenFondo = loadImage("data/fondo.png");
  imagenObstaculo = loadImage("data/obstaculo.png");

  imagenesJugador[0] = loadImage("data/jugador0.png");
  imagenesJugador[1] = loadImage("data/jugador1.png");

  imagenesEnemigo[0] = loadImage("data/enemigo0.png");
  imagenesEnemigo[1] = loadImage("data/enemigo1.png");
}

function setup() {
  createCanvas(800, 400);
  juego = new Juego();
}

function draw() {
  juego.actualizar();
  juego.dibujar();
}

function keyPressed() {
  juego.teclaPresionada();
}

function mousePressed() {
  juego.clickMouse();
}

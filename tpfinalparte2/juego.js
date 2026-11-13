class Juego {
  constructor() {
    // los objetos del juego
    this.fondo = new Fondo();
    this.jugador = new Jugador();
    this.enemigo = new Enemigo();
    this.vida = new Vida();
    this.estado = new Estado();

    // la lista de obstáculos (son 3 y se van reutilizando)
    this.obstaculos = [];
    this.crearObstaculos();

    this.distancia = 0;   // cuánto avanzó por el laboratorio
    this.meta = 1800;     // cuando llega acá, escapa (unos 30 segundos)
  }

  // ---------- LO QUE PASA EN CADA VUELTA ----------

  actualizar() {
    // Zorba siempre se mueve, así se ve cómo te alcanza
    this.enemigo.mover();

    if (this.estado.es("jugando")) {
      this.jugador.mover();
      this.enemigo.seguir(this.jugador);

      this.moverObstaculos();

      this.distancia = this.distancia + 1;

      // si llegó a la meta, escapó
      if (this.distancia >= this.meta) {
        this.estado.cambiar("gano");
      }
    }
  }

  crearObstaculos() {
    // crea 3 obstáculos y los guarda en la lista
    this.obstaculos = [];
    for (let i = 0; i < 3; i++) {
      this.obstaculos[i] = new Obstaculo();
    }
  }

  moverObstaculos() {
    for (let i = 0; i < this.obstaculos.length; i++) {
      let obstaculo = this.obstaculos[i];
      obstaculo.mover();

      // si choca con el jugador, pierde una vida
      // y el obstáculo vuelve a aparecer a la derecha
      if (obstaculo.chocaCon(this.jugador) == true) {
        this.vida.perder();
        this.enemigo.acercarse();
        obstaculo.reaparecer();
      }

      // si salió por la izquierda, también vuelve a aparecer
      if (obstaculo.salio() == true) {
        obstaculo.reaparecer();
      }
    }

    // si no quedan vidas, Zorba lo atrapó
    if (this.vida.sinVidas() == true) {
      this.estado.cambiar("perdio");
    }
  }

  // ---------- LO QUE SE DIBUJA ----------

  dibujar() {
    this.fondo.dibujar();

    for (let i = 0; i < this.obstaculos.length; i++) {
      this.obstaculos[i].dibujar();
    }

    this.jugador.dibujar();
    this.enemigo.dibujar();

    this.vida.dibujar();
    this.dibujarProgreso();

    if (this.estado.es("perdio")) {
      this.dibujarPantalla("ZORBA TE ATRAPÓ", "Haz click para reiniciar");
    }
    if (this.estado.es("gano")) {
      this.dibujarPantalla("¡ESCAPASTE!", "Saliste del laboratorio. Haz click para reiniciar");
    }
  }

  dibujarProgreso() {
    // una barra arriba que muestra cuánto falta para la salida
    let largo = this.distancia / this.meta * 200;

    stroke(255);
    strokeWeight(1);
    noFill();
    rect(20, 15, 200, 20);

    noStroke();
    fill(0, 200, 0);
    rect(20, 15, largo, 20);
  }

  dibujarPantalla(titulo, subtitulo) {
    fill(0, 0, 0, 150);
    rect(0, 0, 800, 400);

    fill(255);
    noStroke();
    textAlign(CENTER, CENTER);

    textSize(50);
    text(titulo, 400, 170);

    textSize(25);
    text(subtitulo, 400, 250);
  }

  // ---------- LO QUE HACE EL JUGADOR ----------

  teclaPresionada() {
    if (this.estado.es("jugando")) {
      if (key == " ") {
        this.jugador.saltar();
      }
      if (keyCode == UP_ARROW) {
        this.jugador.irArriba();
      }
      if (keyCode == DOWN_ARROW) {
        this.jugador.irAbajo();
      }
    }
  }

  clickMouse() {
    // el click solo sirve cuando el juego terminó
    if (this.estado.es("jugando") == false) {
      this.reiniciar();
    }
  }

  reiniciar() {
    this.jugador = new Jugador();
    this.enemigo = new Enemigo();
    this.vida = new Vida();
    this.estado = new Estado();

    this.crearObstaculos();
    this.distancia = 0;
  }
}

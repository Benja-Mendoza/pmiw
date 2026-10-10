let pantalla = "inicio";
let opciones = [];
let botonElegido = -1;

let imgConcurso, imgNota, imgInspector, imgColaborar, imgRegresa;
let imgAnalizado, imgModulo, imgGenecomp, imgRidwell, imgEscapar;

let creditos = [
  "EL DESTINO DE CONRAD",
  "",
  "Basado en 'La supercomputadora'",
  "Profesor: Leonardo Garay",
  "",
  "Alumnos:",
  "Martiniano Rodríguez Barreda",
  "Benjamín Mendoza",
  "",
  "Comisión 5",
  "Diseño Multimedial",
];

let yCreditos = 450;

function preload() {
  imgConcurso = loadImage("data/concurso.jpe");
  imgNota = loadImage("data/nota.jpe");
  imgInspector = loadImage("data/inspector.jpe");
  imgColaborar = loadImage("data/colaborar.jpe");
  imgRegresa = loadImage("data/regresa.jpe");
  imgAnalizado = loadImage("data/analizado.jpe");
  imgModulo = loadImage("data/modulo.jpe");
  imgGenecomp = loadImage("data/genecomp.jpe");
  imgRidwell = loadImage("data/ridwell.jpe");
  imgEscapar = loadImage("data/escapar.jpe"); 
}

function setup() {
  createCanvas(800, 450); 
  textFont("Arial");
}

function draw() {
  background(30, 30, 50);

  // ---------- INICIO ----------
  if (pantalla === "inicio") {
    dibujarPantallaInicio();
  }
  else if (pantalla === "primerContacto") {
    dibujarPantallaPrimerContacto();
  }
  else if (pantalla === "decisionDesaparece") {
    dibujarPantallaDecisionDesaparece();
  }

  // ---------- CAMINO: LLAMAR A LA POLICÍA ----------
  else if (pantalla === "policia") {
    dibujarPantallaPolicia();
  }
  else if (pantalla === "decisionMontrose") {
    dibujarPantallaDecisionMontrose();
  }
  else if (pantalla === "montrosePropone") {
    dibujarPantallaMontrosePropone();
  }
  else if (pantalla === "decisionInstrucciones") {
    dibujarPantallaDecisionInstrucciones();
  }
  else if (pantalla === "zorbaAnalizado") {
    dibujarPantallaZorbaAnalizado();
  }
  else if (pantalla === "mantienenInformado") {
    dibujarPantallaMantienenInformado();
  }
  else if (pantalla === "decisionGenecomp") {
    dibujarPantallaDecisionGenecomp();
  }
  else if (pantalla === "genecompRetira") {
    dibujarPantallaGenecompRetira();
  }
  else if (pantalla === "zorbaAtrapado") {
    dibujarPantallaZorbaAtrapado();
  }
  else if (pantalla === "zorbaEncierra") {
    dibujarPantallaZorbaEncierra();
  }

  // ---------- CAMINO: LO ESPERÁS ----------
  else if (pantalla === "conradRegresa") {
    dibujarPantallaConradRegresa();
  }

  // ---------- FINALES ----------
  else if (pantalla === "final1") {
    dibujarPantallaFinal1();
  }
  else if (pantalla === "final2") {
    dibujarPantallaFinal2();
  }
  else if (pantalla === "final3") {
    dibujarPantallaFinal3();
  }

  // ---------- CRÉDITOS ----------
  else if (pantalla === "creditos") {
    dibujarPantallaCreditos();
  }

  botonElegido = -1;
}

function dibujarPantallaInicio() {
  mostrarPantalla(
    "El concurso",
    "Ganás un concurso de programación. Tu premio es acceder a un proyecto experimental: Conrad, una supercomputadora capaz de procesar cantidades extraordinarias de información.",
    ["Empezar"],
    imgConcurso
  );

  if (botonElegido === 0) pantalla = "primerContacto";
}

function dibujarPantallaPrimerContacto() {
  mostrarPantalla(
    "Primer contacto",
    "Estás feliz con tu premio, pero a la vez te inquieta la manera en que Conrad resuelve las cosas.",
    ["Continuar"],
    imgConcurso // <-- Actualizado para usar la imagen de concurso
  );

  if (botonElegido === 0) pantalla = "decisionDesaparece";
}

function dibujarPantallaDecisionDesaparece() {
  mostrarPantalla(
    "Conrad desaparece",
    "De un momento a otro, Conrad desaparece y solo te deja una nota. ¿Qué hacés?",
    ["Llamar a la policía", "Lo esperás"],
    imgNota
  );

  if (botonElegido === 0) pantalla = "policia";        
  if (botonElegido === 1) pantalla = "conradRegresa";  
}

function dibujarPantallaPolicia() {
  mostrarPantalla(
    "La policía",
    "La policía investiga, pero no cree que Conrad sea realmente un superordenador. Te recomiendan hablar con el inspector Montrose.",
    ["Continuar"],
    imgInspector
  );

  if (botonElegido === 0) pantalla = "decisionMontrose";
}

function dibujarPantallaDecisionMontrose() {
  mostrarPantalla(
    "El inspector Montrose",
    "Montrose necesita tu ayuda. ¿Aceptás colaborar con él?",
    ["Sí", "No"],
    imgInspector
  );

  if (botonElegido === 0) pantalla = "montrosePropone";     
  if (botonElegido === 1) pantalla = "mantienenInformado";  
}

function dibujarPantallaMontrosePropone() {
  mostrarPantalla(
    "El plan de Montrose",
    "Montrose te propone colaborar en la captura de Ridwell.",
    ["Continuar"],
    imgRidwell
  );

  if (botonElegido === 0) pantalla = "decisionInstrucciones";
}

function dibujarPantallaDecisionInstrucciones() {
  mostrarPantalla(
    "Las instrucciones",
    "Montrose te explica qué tenés que hacer. ¿Seguís sus instrucciones?",
    ["Sí", "No"],
    imgInspector
  );

  if (botonElegido === 0) pantalla = "zorbaAnalizado";  
  if (botonElegido === 1) pantalla = "zorbaEncierra";   
}

function dibujarPantallaZorbaAnalizado() {
  mostrarPantalla(
    "Conrad es analizado",
    "Conrad es enviado a Zorba para ser analizado.",
    ["Continuar"],
    imgAnalizado
  );

  if (botonElegido === 0) pantalla = "final2";
}

function dibujarPantallaMantienenInformado() {
  mostrarPantalla(
    "Mantenerte informado",
    "Te mantienen al tanto del peligro que representa Genecomp y de la posibilidad de que le retiren el módulo cerebral a Conrad.",
    ["Continuar"],
    imgGenecomp
  );

  if (botonElegido === 0) pantalla = "decisionGenecomp";
}

function dibujarPantallaDecisionGenecomp() {
  mostrarPantalla(
    "¿Permitís que retiren el módulo?",
    "Genecomp quiere retirarle el módulo cerebral a Conrad. ¿Se lo permitís?",
    ["Sí", "No"],
    imgModulo
  );

  if (botonElegido === 0) pantalla = "genecompRetira";  
  if (botonElegido === 1) pantalla = "zorbaAtrapado";   
}

function dibujarPantallaGenecompRetira() {
  mostrarPantalla(
    "Genecomp",
    "Genecomp retira el módulo cerebral de Conrad.",
    ["Continuar"],
    imgModulo
  );

  if (botonElegido === 0) pantalla = "final2";
}

function dibujarPantallaZorbaAtrapado() {
  mostrarPantalla(
    "Atrapado en Zorba",
    "Conrad es enviado a Zorba y vos quedás atrapado ahí.",
    ["Continuar"],
    imgAnalizado
  );

  if (botonElegido === 0) pantalla = "zorbaEncierra";
}

function dibujarPantallaZorbaEncierra() {
  mostrarPantalla(
    "Encerrado",
    "Zorba te encierra.",
    ["Continuar"],
    imgAnalizado
  );

  if (botonElegido === 0) pantalla = "final3";
}

function dibujarPantallaConradRegresa() {
  mostrarPantalla(
    "La espera",
    "Decidís esperar, y Conrad regresa después de haber ayudado a capturar a Victor Ridwell.",
    ["Continuar"],
    imgRegresa
  );

  if (botonElegido === 0) pantalla = "final1";
}

// ---------- FINALES ----------

function dibujarPantallaFinal1() {
  mostrarPantalla(
    "Conrad regresa",
    "Conrad vuelve a casa y todo regresa a la normalidad.",
    ["Volver a empezar", "Ver créditos"],
    imgRegresa
  );

  botonesDeFinal();
}

function dibujarPantallaFinal2() {
  mostrarPantalla(
    "Seguís siendo humano",
    "Conrad es enviado a Zorba y vos decidís seguir siendo totalmente humano.",
    ["Volver a empezar", "Ver créditos"],
    imgAnalizado
  );

  botonesDeFinal();
}

function dibujarPantallaFinal3() {
  mostrarPantalla(
    "Lográs escapar",
    "Lográs escapar de Zorba y pedís ayuda.",
    ["Volver a empezar", "Ver créditos"],
    imgEscapar 
  );

  botonesDeFinal();
}

function botonesDeFinal() {
  if (botonElegido === 0) {
    pantalla = "inicio";  
  }
  if (botonElegido === 1) {
    pantalla = "creditos";  
    yCreditos = 450;        
  }
}

// ---------- CRÉDITOS ----------

function dibujarPantallaCreditos() {
  opciones = ["Volver al inicio"];

  dibujarTextoCreditos();

  fill(30, 30, 50);
  rect(0, 395, 800, 55);
  dibujarBotonCreditos();

  if (botonElegido === 0) pantalla = "inicio";
}

function mostrarPantalla(titulo, texto, lista, img) {
  opciones = lista; 

  if (img) {
    image(img, 0, 0, width, height);
    fill(30, 30, 50, 180);
    noStroke();
    rect(0, 0, width, height);
  }

  dibujarTitulo(titulo);
  dibujarTextoHistoria(texto);
  dibujarBotones();
}

function dibujarTitulo(titulo) {
  fill(255, 220, 100);
  textSize(28);
  textAlign(LEFT, TOP);
  text(titulo, 50, 25, 700, 40);
}

function dibujarTextoHistoria(texto) {
  fill(255);
  textSize(18);
  textAlign(LEFT, TOP);
  text(texto, 50, 75, 700, 160);
}

function dibujarBotones() {
  for (let i = 0; i < opciones.length; i++) {
    dibujarBoton(opciones[i], i);
  }
}

function dibujarBoton(textoBoton, numero) {
  let y = 250 + numero * 50;

  if (mouseEnBoton(numero)) {
    fill(120, 90, 220);
  } else {
    fill(80, 60, 160);
  }
  rect(200, y, 400, 40, 8);

  fill(255);
  textSize(18);
  textAlign(CENTER, CENTER);
  text(textoBoton, 200, y, 400, 40);
}

function mouseEnBoton(numero) {
  let y = 250 + numero * 50;
  return mouseX > 200 && mouseX < 600 && mouseY > y && mouseY < y + 40;
}

function dibujarTextoCreditos() {
  fill(255);
  textSize(20);
  textAlign(LEFT, CENTER);
  for (let i = 0; i < creditos.length; i++) {
    text(creditos[i], 60, yCreditos + i * 30);
  }

  yCreditos = yCreditos - 1;

  if (yCreditos < -creditos.length * 30) {
    yCreditos = 450;
  }
}

function dibujarBotonCreditos() {
  if (mouseEnBotonCreditos()) {
    fill(120, 90, 220);
  } else {
    fill(80, 60, 160);
  }
  rect(300, 400, 200, 40, 8);
  fill(255);
  textSize(18);
  textAlign(CENTER, CENTER);
  text("Volver al inicio", 300, 400, 200, 40);
}

function mouseEnBotonCreditos() {
  return mouseX > 300 && mouseX < 500 && mouseY > 400 && mouseY < 440;
}

function mousePressed() {
  if (pantalla === "creditos") {
    if (mouseEnBotonCreditos()) {
      botonElegido = 0;
    }
  } else {
    botonElegido = detectarBotonClickeado();
  }
}

function detectarBotonClickeado() {
  let boton = -1;
  for (let i = 0; i < opciones.length; i++) {
    if (mouseEnBoton(i)) {
      boton = i;
    }
  }
  return boton;
}

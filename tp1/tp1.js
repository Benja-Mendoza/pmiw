let miImagen;
let imagenes=[];
let contador = 0;
let titulo;
let brazo=[];
let contadorbrazo= 0;
let cara=[];
let contadorcara= 0;
let animacion = 0;
let boton;

function preload(){
miImagen=loadImage("data/fondo.jpg");
titulo=loadImage("data/titulo1.png");

for(let i=0; i<5; i++){
imagenes[i]=loadImage("data/baldi"+i+".png");
}

for(let i=0; i<22; i++){
brazo[i]=loadImage("data/brazo"+i+".png"); 
}

for(let i=0; i<16; i++){
cara[i]=loadImage("data/cara"+i+".png")
}
}

function setup() {
createCanvas(800,600);
}

function draw() {
  background(0);

  image(miImagen,0,0,width,height);

  fill(255,0,0);
  rect(340,284,100,50);

  fill(0);
  textSize(20);
  text("Iniciar",360,310);

  if(frameCount%5==0){
    
    if(animacion == 0){
      contadorbrazo++;
    }

    if(contadorbrazo >= 22){
      contadorbrazo = 0;
      animacion = 1;
    }

    if(animacion == 1){
      contador++;
    }

    if(contador >= 5){
      contador = 0;
    }

    contadorcara++;

    if(contadorcara >= 16){
      contadorcara = 0;
    }
  }

  if(animacion == 0){
    image(brazo[contadorbrazo],100,300);
  }

  if(animacion == 1){
    image(imagenes[contador],100,300);
  }

  image(cara[contadorcara],550,300,200,200);

  image(titulo,0,-150,width,height);
}
function mousePressed(){
  if(mouseX > 350 && mouseX < 450 && mouseY > 275 && mouseY < 325){
    animacion = 0;
    contador = 0;
    contadorbrazo = 0;
    contadorcara = 0;
  }
}

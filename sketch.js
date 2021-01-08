var canvas;
var music;
var surface1,surface2, surface3, surface4;
var box;
var edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(100,580,150,10);
    surface1.shapeColor ='blue';

    surface2 = createSprite(300,580,150,10);
    surface2.shapeColor ='yellow';

    surface3 = createSprite(500,580,150,10);
    surface3.shapeColor ='red';

    surface4= createSprite(700,580,150,10);
    surface4.shapeColor ='green';
    //create box sprite and give velocity
    box = createSprite(random(20,750),20,20,20);
    box.shapeColor=color(255);
    box.velocityX=5;
    box.velocityY=4;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites();
    box.bounceOff(edges);

    if(surface1.isTouching(box) && box.bounceOff(surface1)){
    
              box.shapeColor="blue";
              music.stop();
              box.setVelocity(0,0);
    }
    if(surface2.isTouching(box) && box.bounceOff(surface2)){
    
        box.shapeColor="yellow";
}
if(surface3.isTouching(box) && box.bounceOff(surface3) ){
    
    box.shapeColor="red";
    music.play();
}
if(surface4.isTouching(box) && box.bounceOff(surface4)){
    
    box.shapeColor="green";
  
}
  
    //add condition to check if box touching surface and make it box
    drawSprites();
}

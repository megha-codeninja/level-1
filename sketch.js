var srithi, srithi_walking; 
var dharmesh, dharmesh_walking;
 var ground; 
 var sel; 
 function preload(){ 
     srithi_walking = loadAnimation("1.png", "2.png", "3.png");
     }
      function setup(){ 
          createCanvas(500,500); 
          srithi =createSprite(150,300,20,20) 
          srithi.addAnimation("walking",srithi_walking);
      }

            function draw(){
                 background(0); 
                 drawSprites(); }




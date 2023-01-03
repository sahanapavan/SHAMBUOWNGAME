var car,car1,car2,car3,car4,road,lamp;
var carImg,car1Img,car2Img,car3Img,car4Img,roadImg,lightImg;
var OVERTAKES = 0;
var car1Group,car2Group,car3Group,car4Group,lightsGroup;
//var PLAY = 1;
//var END = 0;
var gameState = "play";
var screen=0;
var life=3;

function preload(){
  carImg = loadImage("car.png");
  car1Img = loadImage("car 1.png");
  car2Img = loadImage("car 2.png");
  car3Img = loadImage("car 3.png");
  car4Img = loadImage("car 4.png");
  roadImg = loadImage("Road.png");
 lightImg = loadImage("l.jpg");
}

function setup(){
    var can=createCanvas(800,800);
    can.mousePressed(mp);

    road = createSprite(width/2,height/2);
    road.addImage(roadImg);
    road.velocityY = 4;

    car = createSprite(400,600,50,50);
   //car = createSprite(width/2,height-120,20,20);
    car.addImage("car_running",carImg);
    car.scale = 0.08;

   car1Group = new Group();
   car2Group = new Group();
   car3Group = new Group();
   car4Group = new Group();
   lightsGroup = new Group();
}

function draw(){
if(screen==0){
   startScreen();
}
else if(screen==1){
gameOn();
drawSprites();
}
else if(screen==2){
   EndScreen();
}
   /*background(0);
   textSize(40);
   fill("red");
   text("press SPACE to start the game ",width/4,height/2);
if(keyDown("space")){
     gameState = "play";

   }*/


    if(gameState==="play"){
        car.x = World.mouseX;
        /*edges = createEdgeSprites();
        car.collide(edges);
        Car1();
        Car2();
        Car3();
        Car4();
        Lamp();*/
        
       
        if(road.y > 400){
            road.y = height/2;

        }

       // Car1();
       // Car2();
      //  Car3();
       // Car4();
      //Lamp();


       if(car.isTouching(car1Group)){
           // gameState=END;
        //car1Group.destroyEach();
           //carsGroup.setVelocityEach(0);
          OVERTAKES = OVERTAKES + 10;
          car1Group.get(0).destroy()

        }
        else if(car.isTouching(car2Group)){
         //gameState=END;
           car2Group.destroyEach();
          // carsGroup.setVelocityEach(0);
         OVERTAKES = OVERTAKES + 10;
        }

       else  if(car.isTouching(car3Group)){
            //gameState=END;
           // car3Group.destroyEach();
//carsGroup.setVelocityEach(0);
  OVERTAKES = OVERTAKES + 10;
  car2Group.get(0).destroy()

        }

      else if(car.isTouching(car4Group)){
           // gameState=END;
          // car4Group.destroyEach();
          // carsGroup.setVelocityEach(0);
         OVERTAKES = OVERTAKES + 10;
         car4Group.get(0).destroy()

        }
        else if(car.isTouching(lightsGroup)){
         gameState = "end";
         screen=2;
        }}

    }


    /*drawSprites();
    Car1();
       Car2();
       Car3();
       Car4();
       Lamp();
    textSize(20);
    fill(20);
    text("OVERTAKES:"+OVERTAKES,width-150,30);

    if(gameState === END){
        textSize(40);
        fill("blue");
        text("GAMEOVER",width/2,height/2);
        car1Group.destroyEach();
        car2Group.destroyEach();
        car3Group.destroyEach();
        car4Group.destroyEach();
        road.velocityY = 0;
        OVERTAKES = 0;

        textSize(20);
        fill(red);
        text("press enter to restart",width/2,height-150);
        
        if(keyDown("Enter")){
           reset();
        }

    }*/
    






function Car1(){
 if(frameCount % 100 == 0){
    //var car1 = createSprite(Math.round(random(50,width-50),height-40,10,10));
    var car1 = createSprite(200, -50);
car1.x = Math.round(random(50,width-50)); 
    car1.addImage(car1Img);
    car1.scale = 0.6;
    car1.velocityY = 4;
    //car1.lifetime = 200;
    car1Group.add(car1);

 }
}

function Car2(){
    if(frameCount % 200 == 0){
       var car2 = createSprite(Math.round(random(50,width-50),height-40,10,10));
       car2.addImage(carImg);
       car2.scale = 0.08;
       car2.velocityY = 4;
       car2.lifetime = 200;
       car2Group.add(car1);
   
    }
   }
   

     function Car3(){
    if(World.frameCount % 200 == 0){
       var car3 = createSprite(Math.round(random(50,width-50),40,10,10));
      car3.addImage(carImg);
       car3.scale = 0.08;
       car3.velocityY = 4;
       car3.lifetime = 200;
    car3Group.add(car3);
   
    }
   }

   function Car4(){
    if(World.frameCount % 200 == 0){
      var car4 = createSprite(Math.round(random(50,width-50),40,10,10));
       car4.addImage(carImg);
       car4.scale = 0.08;
       car4.velocityY = 4;
       car4.lifetime = 200;
     car4Group.add(car4);
 
    }
   }
   
   function Lamp(){
      if(World.frameCount % 200 == 0){
        var lamp = createSprite(Math.round(random(50,width-50),40,10,10));
         lamp.addImage(lightImg);
         lamp.scale = 0.08;
         lamp.velocityY = 4;
         lamp.lifetime = 200;
       lightsGroup.add(lamp);
   
      }
     }

     function startScreen(){
      background(0);
      fill("red");
  textSize(40);
  strokeWeight(2);
  textAlign(CENTER);
  text("WELCOME",width/2,height/2);
  fill("white");
  textSize(20);
  strokeWeight(2);
  textAlign(CENTER);
  text("click on the SCREEN to start the game ",width/2,height/1.5+20);

 gameState="play";

  //reset();
     }

     function gameOn(){
      if(gameState==="play"){
         var can=createCanvas(800,800);
          
        textSize(40);
         fill("blue");
         text("OVERTAKES:"+OVERTAKES, 100, 30);
       
         text("life"+life,480,50)
         
         //car.velocityY=1;
         if(road.y > 400){
            road.y = height/2;

        }
         /*if(back1_img>900){
           back1_img.y=800
         }
        // SpawnCoins()
          // SpawnGhosts()*/
          Car1();
          Car2();
          Car3();
          Car4();
          Lamp();
        }
     }


     function mp(){
      if(screen==0){
         screen=1
      }/*else if(screen==1){
         screen=2;
      }else if(screen==2){
         screen=0;
     }*/
   }
     /*function mp(){
      if ( screen==0){
        screen=1
      }
      else if(screen==1){
        screen=2
      }
      else if(screen==2){
        screen=3
      }
      
      else if(screen==4){
        screen=5
    }
    else if(screen==5){
      screen=6
    }
    else if(screen==6){
      screen=7
    
    }
    else if(screen==7){
      screen=0;
    }
    else if(screen==8){
      screen=0;
    }
    }*/
function  EndScreen(){
   background(150);
   textAlign(CENTER);
   text("game over",width/2,height/2)
   text("OVERTAKES= " + score, width / 2, height / 2 + 20)
   text("click to play again",width/2,height/2+40);
  reset();
 }

 function reset(){
   gameState = "play";
   score=0;
 
 }

    
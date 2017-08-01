document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("container");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight/2;

  const stage = new createjs.Stage("container");

  const shapes = [];
  const triangle1 = new createjs.Shape();
  triangle1.graphics.beginFill("green");
  triangle1.graphics.moveTo(100,100).lineTo(400,100).lineTo(250,250).lineTo(100,100);
  stage.addChild(triangle1);
  shapes.push(triangle1);

  const triangle2 = new createjs.Shape();
  triangle2.graphics.beginFill("orange");
  triangle2.graphics.moveTo(100,100).lineTo(100,400).lineTo(250, 250).lineTo(100,100);
  stage.addChild(triangle2);
  shapes.push(triangle2);

  const triangle3 = new createjs.Shape();
  triangle3.graphics.beginFill("indigo");
  triangle3.graphics.moveTo(250,250).lineTo(175, 325).lineTo(325, 325).lineTo(250,250);
  stage.addChild(triangle3);
  shapes.push(triangle3);

  const triangle4 = new createjs.Shape();
  triangle4.graphics.beginFill("red");
  triangle4.graphics.moveTo(325,175).lineTo(400,100).lineTo(400,250).lineTo(325,175);
  stage.addChild(triangle4);
  shapes.push(triangle4);

  const triangle5 = new createjs.Shape();
  triangle5.graphics.beginFill("violet");
  triangle5.graphics.moveTo(400,400).lineTo(400, 250).lineTo(250,400).lineTo(400,400);
  stage.addChild(triangle5);
  shapes.push(triangle5);

  const square = new createjs.Shape();
  square.graphics.beginFill("yellow");
  square.graphics.moveTo(250,250).lineTo(325,175).lineTo(400,250).lineTo(325,325).lineTo(250,250);
  stage.addChild(square);
  shapes.push(square);


  const rect = new createjs.Shape();
  rect.graphics.beginFill("blue");
  rect.graphics.moveTo(100,400).lineTo(250,400).lineTo(325,325).lineTo(175,325).lineTo(100,400);
  stage.addChild(rect);
  shapes.push(rect);

  rect.addEventListener("pressmove", function(event){
    event.target.x = event.stageX;
    event.target.y = event.stageY;
  })
  rect.addEventListener("pressup", function(event) {
    console.log("up");
  })

  stage.update();
});
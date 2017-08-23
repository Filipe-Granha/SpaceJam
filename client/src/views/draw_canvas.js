var Square = require('./square.js');

var DrawCanvas = function(canvasHandler, canvas, mainObject) {
  this.canvas = canvas;

  this.canvasWidth = canvas.width;
  this.canvasHeight = canvas.height;

  this.canvasHandler = canvasHandler;
  this.context = canvas.getContext("2d");

  this.context.translate(400, 250);

  this.scale = 1;
  this.mainObject = mainObject;
  this.render();
  this.context.save();
}

DrawCanvas.prototype.makeSquare = function(x, y, width, height){
  var square = new Square(this.canvas, x*this.scale, y*this.scale, width*this.scale, height*this.scale, "transparent", "transparent");
  this.canvasHandler.squares.push(square);
  return square;
}

DrawCanvas.prototype.render = function() {
  var sun = this.makeSquare(-55, -55, 110, 110);
  sun.img = "images/sun.png";
  sun.drawImg();
  sun.data = this.mainObject.suns[0];

  var mercury = this.makeSquare(-65, 65, 20, 20);
  mercury.img = "images/mercury.png";
  mercury.drawImg();
  mercury.data = this.mainObject.planets[0];

  var venus = this.makeSquare(70, 70, 30, 30);
  venus.img = "images/venus.png";
  venus.drawImg();
  venus.data = this.mainObject.planets[1];

  var earth = this.makeSquare(90, -90, 40, 40);
  earth.img = "images/earth.png";
  earth.drawImg();
  earth.data = this.mainObject.planets[2];

  var mars = this.makeSquare(-100, -100, 30, 30);
  mars.img = "images/mars.png";
  mars.drawImg();
  mars.data = this.mainObject.planets[3];

  var jupiter = this.makeSquare(-200, 120, 70, 70);
  jupiter.img = "images/jupiter.png";
  jupiter.drawImg();
  jupiter.data = this.mainObject.planets[4];

  var saturn = this.makeSquare(250, 135, 60, 60);
  saturn.img = "images/saturn.png";
  saturn.drawImg();
  saturn.data = this.mainObject.planets[5];

  var uranus = this.makeSquare(320, -200, 45, 45);
  uranus.img = "images/uranus.png";
  uranus.drawImg();
  uranus.data = this.mainObject.planets[6]

  var neptune = this.makeSquare(-350, -75, 45, 45);
  neptune.img = "images/neptune.png";
  neptune.drawImg();
  neptune.data = this.mainObject.planets[7];

  var pluto= this.makeSquare(-390, 200, 20, 20);
  pluto.img = "images/pluto.png";
  pluto.drawImg();
  pluto.data = this.mainObject.planets[8];
}

DrawCanvas.prototype.clear = function(){
    this.context.clearRect(-this.canvasWidth/2 * this.scale, -this.canvasHeight/2 * this.scale, this.canvasWidth * this.scale, this.canvasHeight * this.scale);
}

DrawCanvas.prototype.moveToLocation = function(square){
  this.clear();

  this.scale = 7;
  var newSquare = this.makeSquare(-square.width/2, -square.height/2, square.width, square.height);
  newSquare.img = square.img;
  newSquare.drawImg()
  newSquare.data = square.data;
  console.log(newSquare);
}

DrawCanvas.prototype.zoomOut = function(){
  var loop;
  var animate = function(){
    this.clear();
    this.scale -= 0.01;
    this.render();
    if(this.scale < 0){
      clearInterval(loop);
    }
  }.bind(this);
  loop = setInterval(animate, 100);
}

module.exports = DrawCanvas;

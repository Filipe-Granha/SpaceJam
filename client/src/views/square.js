var Square = function(canvas, x, y, width, height, border, fill, img) {
  this.canvas = canvas;
  this.context = canvas.getContext("2d");
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.border = border;
  this.fill = fill;
  this.img = img;
}

Square.prototype.drawFill = function() {
  this.context.fillStyle = this.fill;
  this.context.fillRect(this.x, this.y, this.width, this.height);
}

Square.prototype.drawBorder = function() {
  this.context.strokeStyle = this.border;
  this.context.strokeRect(this.x, this.y, this.width, this.height);
}

Square.prototype.drawImg = function() {
  this.pic = document.createElement("img");
  this.pic.src = this.img;
  this.pic.addEventListener("load", function() {
    this.context.drawImage(this.pic, this.x, this.y, this.width, this.height);
    this.pic = null;
  }.bind(this))
}

Square.prototype.isWithin = function (x,y) {
  if(x > this.x && x < this.x + this.width && y > this.y && y < this.y + this.height){
    return true;
  }
  return false;
}

module.exports = Square;

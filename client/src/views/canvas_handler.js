var CanvasHandler = function(canvas) {

  this.squares = [];
  this.onClick = function() {};

  canvas.addEventListener("click", function(event) {
    var x = event.offsetX - 400;
    var y = event.offsetY - 250;
    var square = this.getSquareWithin(x,y);
    if(square !== null) {
      this.onClick(square);
    }
  }.bind(this))

  this.onHover = function() {};

  canvas.addEventListener("mousemove", function(event) {
    var x = event.offsetX - 400;
    var y = event.offsetY - 250;
    var square = this.getSquareWithin(x,y);
    this.onHover(square);
  }.bind(this))

}

CanvasHandler.prototype.getSquareWithin = function(x,y){
  for (var square of this.squares) {
    if (square.isWithin(x,y)) {
      return square
    }
  }
  return null;
}

module.exports = CanvasHandler

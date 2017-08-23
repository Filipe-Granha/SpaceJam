var populateScreen = require("./views/populate_screen.js");
var setNavEvents = require('./views/info_nav_events.js');
var DrawCanvas = require('./views/draw_canvas.js');
var CanvasHandler = require('./views/canvas_handler.js');

var canvasHandler;
var drawCanvas;
var hoverName;

var makeRequest = function(url, callback) {
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener('load', callback);
  request.send();
}

var requestComplete = function() {
  if(this.status !== 200) {
    alert("Sorry, we weren't able to connect. Please try again later.");
    return;
  }

  var jsonString = this.responseText;
  solarSystem = JSON.parse(jsonString);
  populateScreen(solarSystem.details[0]);
  drawCanvas = new DrawCanvas(canvasHandler, canvas, solarSystem);
}

// taken from http://codentronix.com/2011/07/22/html5-canvas-3d-starfield/ - start point
var starField = function(){
  MAX_DEPTH = 10; // controls how far away are the stars created in space

   var canvas, ctx;
   var stars = new Array(200);

    canvas = document.getElementById("star-field");
    if( canvas && canvas.getContext ) {
      ctx = canvas.getContext("2d");
      initStars();
      setInterval(loop,37); // sets the speed of looping
     }
 
  function randomRange(minVal,maxVal) {
    return Math.floor(Math.random() * (maxVal - minVal -1)) + minVal;
  }

  function initStars() {
    for( var i = 0; i < stars.length; i++ ) {
      stars[i] = {
        x: randomRange(-30,30),
        y: randomRange(-30,30),
        z: randomRange(20,MAX_DEPTH)
       }
    }
  }

  function loop() {
    var halfWidth  = canvas.width/5;
    var halfHeight = canvas.height/5;

    ctx.fillStyle = "rgb(0,0,0)";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    for( var i = 0; i < stars.length; i++ ) {
      stars[i].z -= 0.2; // sets the speed of the stars

      if( stars[i].z <= 0 ) {
        stars[i].x = randomRange(-25,25);
        stars[i].y = randomRange(-25,25);
        stars[i].z = MAX_DEPTH;
      }

      var k  = 128.0 / stars[i].z;
      var px = stars[i].x * k + halfWidth;
      var py = stars[i].y * k + halfHeight;

      if( px >= 0 && px <= 500 && py >= 0 && py <= 400 ) {
        var size = 1; // size of the stars
        var shade = parseInt((1 - stars[i].z / 128.0) * 255);
        ctx.fillStyle = "rgb(" + shade + "," + shade + "," + shade + ")";
        ctx.fillRect(px,py,size,size);
      }
    }
  }
}
// taken from http://codentronix.com/2011/07/22/html5-canvas-3d-starfield/ - end point

window.addEventListener('load', function() {

  starField();

  var storedFavourites = localStorage.getItem("favourites");
  if(!storedFavourites){
    var emptyArray = JSON.stringify([]);
    localStorage.setItem("favourites", emptyArray);
  } else {
    var finalFavourites = JSON.parse(storedFavourites);
    populateFavourites(finalFavourites);

  }

  var canvas = document.querySelector('#canvas');
  canvasHandler = new CanvasHandler(canvas);
  makeRequest("/solar_system", requestComplete);
  setNavEvents();

  var currentSquare;
  hoverName = document.querySelector("#hover");
  canvasHandler.onClick = function(square){
    if(currentSquare === square) return;

    currentSquare = square;
    populateScreen(square.data);
    manageMoveToLocation(square);

    var favouritesButton = document.querySelector("#favouritesButton");
    favouritesButton.addEventListener("click", function() {

      var storedFavourites = localStorage.getItem("favourites");
      var favouritesArray = JSON.parse(storedFavourites);

      for(var item of favouritesArray){
        if(item.Name === square.data.Name){
          return;
        }
      }

      favouritesArray.push(square.data);

      var jsonString = JSON.stringify(favouritesArray);
      localStorage.setItem("favourites", jsonString);

      populateFavourites(favouritesArray);
    })
  }

  canvasHandler.onHover = function(square){
    if(square){
      hoverName.innerText = square.data.Name;
    }else{
      hoverName.innerText = "Solar System";
    }
  }

  var deleteButton = document.querySelector("#deleteFavouritesButton");
  deleteButton.addEventListener("click", function() {
    var emptyArray = JSON.stringify([]);
    localStorage.setItem("favourites", emptyArray);
    removeFavourites();
  });
})

var manageMoveToLocation = function(square){
  drawCanvas.moveToLocation(square);
  hoverName.innerText = square.data.Name;
  var form = document.querySelector("#form");
  form.style.display = "block";
  canvasHandler.onClick = function(){};
  canvasHandler.onHover = function(){};
}

var populateFavourites = function(favourites) {
  removeFavourites();
  var newArray = []
  var ul = document.createElement("ul");
  ul.id= "favUl"

  var liEvent = function(){

  }

  favourites.forEach(function (favourite, index) {
    var li = document.createElement("li");
    li.innerHTML = "<a href='#'>" + favourite.Name + "</a>";
    li.addEventListener('click', function(){
      var squares = canvasHandler.squares;
      for(var square of squares){
        if(square.data.Name === favourites[index].Name){
          manageMoveToLocation(square);
          break;
        }
      }
      populateScreen(favourites[index]);
    })
    ul.appendChild(li);
    newArray.push(li);
  });

  var box = document.querySelector("#left-side");
  box.appendChild(ul);
}

var removeFavourites = function(favourites) {
  var sidebar = document.querySelector("#left-side");
  var ul = document.querySelector("#favUl");
  if(ul){
  sidebar.removeChild(ul);
}
}

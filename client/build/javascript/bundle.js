/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var setNavEvents = function() {
  var infoBox = document.querySelector("#info-box");
  var gallery = document.querySelector("#gallery");
  var funFact = document.querySelector("#fun-facts")
  var descriptionButton = document.querySelector("#description-button");
  var galleryButton = document.querySelector("#gallery-button");
  var funFactButton = document.querySelector("#fun-facts-button");
  gallery.style.display = "none";
  funFact.style.display = "none";

  descriptionButton.addEventListener("click", function() {
    gallery.style.display = "none";
    infoBox.style.display = "block";
    funFact.style.display = "none";
  })

  galleryButton.addEventListener("click", function() {
    gallery.style.display = "block";
    infoBox.style.display = "none";
    funFact.style.display = "none";
  })

  funFactButton.addEventListener("click", function() {
    gallery.style.display = "none";
    infoBox.style.display = "none";
    funFact.style.display = "block";
  })
}

module.exports = setNavEvents;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var populateScreen = __webpack_require__(2);
var setNavEvents = __webpack_require__(0);
var DrawCanvas = __webpack_require__(3);
var CanvasHandler = __webpack_require__(5);

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


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var setNavEvents = __webpack_require__(0)

var populateScreen = function(object){
  populateRightBar(object);
  populateInfoBox(object);
  populateGallery(object);
  populateFunFacts(object);
  setNavEvents();
}


var populateRightBar = function(object){
  var rightBar = document.querySelector("#right-side");
  var dl = document.querySelector("#rside");
  if(dl) rightBar.removeChild(dl);

  var dl2 = document.createElement("dl");
  dl2.id = "rside";

  for(var property of object.sideBar){
    var hr = document.createElement("hr");
    var dt = document.createElement("dt");
    dt.innerText = property.label;
    var dd = document.createElement("dd");
    dd.innerText = property.value;

    dl2.appendChild(hr);
    dl2.appendChild(dt);
    dl2.appendChild(dd);

  }

  rightBar.appendChild(dl2);
}

var addBottomDivClass = function(divToAddTo) {
  divToAddTo.classList.add('bottom-div');
}

var populateInfoBox = function(object){
  var infoBox = document.querySelector("#info-box");
  var infoContainer = document.querySelector("#info-container");
  if(infoBox) infoContainer.removeChild(infoBox);
  var sectionDiv = document.createElement("section");
  sectionDiv.id = "info-box";
  addBottomDivClass(sectionDiv);

  for(var property of object.description){
    var div = document.createElement("div");
    var h2 = document.createElement("h2");
    h2.innerText = property.title;
    var pTag = document.createElement("p");
    pTag.innerText = property.value;

    div.appendChild(h2);
    div.appendChild(pTag);
    sectionDiv.appendChild(div)

  }
    infoContainer.appendChild(sectionDiv);
}

var populateGallery = function(object) {
  var gallery = document.querySelector("#gallery");
  var infoContainer = document.querySelector('#info-container');
  if(gallery) infoContainer.removeChild(gallery);
  var newGalleryDiv = document.createElement('section')
  newGalleryDiv.id = "gallery";
  addBottomDivClass(newGalleryDiv);

  for(var property of object.gallery){
    var image = document.createElement("img");
    image.src = property.lowRes;
    newGalleryDiv.appendChild(image);
  }

  var spaceDiv = document.createElement('div')
  spaceDiv.id = "space-div";
  newGalleryDiv.appendChild(spaceDiv);

  infoContainer.appendChild(newGalleryDiv);

}

var populateFunFacts = function(object){
  var infoContainer = document.querySelector('#info-container');
  var funFactsSection = document.querySelector('#fun-facts');
  infoContainer.removeChild(funFactsSection);
  var newFunFacts = document.createElement("section");
  newFunFacts.id = "fun-facts";
  addBottomDivClass(newFunFacts);

  var div = document.createElement("div");
  var h2 = document.createElement("h2");
  h2.innerText = "Fun Facts";
  var ul = document.createElement("ul");

  for(var property of object.facts){
    var li = document.createElement("li");
    li.innerText = property;
    ul.appendChild(li);
  }

  div.appendChild(h2);
  div.appendChild(ul);
  newFunFacts.appendChild(div);

  infoContainer.appendChild(newFunFacts);
}

module.exports = populateScreen;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var Square = __webpack_require__(4);

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


/***/ }),
/* 4 */
/***/ (function(module, exports) {

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


/***/ }),
/* 5 */
/***/ (function(module, exports) {

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


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map
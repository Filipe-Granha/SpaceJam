var setNavEvents = require('./info_nav_events')

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

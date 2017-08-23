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

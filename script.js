function showPage(pageId) {

  var pages = document.getElementsByClassName("page");
  for (var i = 0; i < pages.length; i++) {
    pages[i].classList.remove("active");
  }

  document.getElementById(pageId).classList.add("active");

  var navButtons = document.querySelectorAll(".nav-links button");
  for (var j = 0; j < navButtons.length; j++) {
    navButtons[j].classList.remove("active");
  }

  document.getElementById("btn-" + pageId).classList.add("active");

  window.scrollTo(0, 0);
}


function filterGallery(category) {

  var photos = document.querySelectorAll(".gallery figure");
  for (var i = 0; i < photos.length; i++) {

    if (category === "all" || photos[i].dataset.category === category) {
      photos[i].style.display = "block";   // show
    } else {
      photos[i].style.display = "none";    // hide
    }
  }

  var filterButtons = document.querySelectorAll(".filters button");
  for (var j = 0; j < filterButtons.length; j++) {
    filterButtons[j].classList.remove("active");
  }

  var clicked = document.getElementById("filter-" + category);
  if (clicked) {
    clicked.classList.add("active");
  }
}

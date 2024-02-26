window.onload = function() {
  document.getElementById('top').scrollIntoView()
};
window.onscroll = function() {
  myFunction()
};



document.addEventListener("DOMContentLoaded", function() {
  var fadeText = document.querySelector(".load-screen");

  fadeText.classList.add("fade-in");

  fadeText.addEventListener("animationend", function() {
    fadeText.classList.remove("fade-in");
  });
});



function myFunction() {
  if (document.documentElement.scrollTop > 750) {
    document.getElementById("top").style.backgroundColor = "#FCF7E5";
    updateNavLinksColor(true);
  } else {
    document.getElementById("top").style.backgroundColor = "#9FB8AD";
    updateNavLinksColor(true);

    if (document.documentElement.scrollTop > 100) {
      document.getElementById("aboutme").style.backgroundColor = "black";
      document.getElementById("mywork").style.backgroundColor = "black";
    } else {
      document.getElementById("aboutme").style.backgroundColor = "#9FB8AD";
      document.getElementById("mywork").style.backgroundColor = "#9FB8AD";
    }


  }
}




function updateNavLinksColor(isScrollPast750) {
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
      if (isScrollPast750) {
          link.classList.add("scroll-past-750");
      } else {
          link.classList.remove("scroll-past-750");
      }
  });
}

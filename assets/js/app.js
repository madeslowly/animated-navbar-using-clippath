/*
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});
*/

const navSlide = ()=>{
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".nav-links li");

  // watch for touch clicks on the whole navbar
  hamburger.addEventListener('click', () => {
    // animate accordinaly
    navLinks.classList.toggle("open");

    links.forEach((link, index) => {
      if ( link.style.animation ) {
        link.style.animation = ``
      } else {
        link.style.animation = `navLinksFade 0.35s ease-out forwards ${index / 10 + 0.1 }s`
      }
    });
  });
}

navSlide();

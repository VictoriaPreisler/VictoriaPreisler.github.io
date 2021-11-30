const hamburgerMenu = document.getElementsByClassName("hamburger-menu")[0];
const topnavLinks = document.getElementsByClassName("topnav__list")[0];
const bodyTag = document.getElementsByTagName("body")[0];

hamburgerMenu.addEventListener("click", () => {
  topnavLinks.classList.toggle("--visible");
  bodyTag.classList.toggle("--disable-scroll");
});

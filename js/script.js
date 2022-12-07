const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 100);
});

const navlist = document.querySelector(".navlist");
navlist.addEventListener("click", function (e) {
  const target = e.target;
  if (target.classList.contains("menu__link")) {
    const linkActive = document.querySelector("ul li a.active");
    if (
      linkActive !== null &&
      target.getAttribute("href") !== linkActive.getAttribute("href")
    ) {
      linkActive.classList.remove("active");
    }
    target.classList.add("active");
  }
});

let menu = document.querySelector("#menu-icon");
let navlistMobile = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlistMobile.classList.toggle("open");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("open");
};

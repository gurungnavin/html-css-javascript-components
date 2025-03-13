const menu = document.querySelector(".nav-links");
const links = document.querySelectorAll("li");
const highlight = document.querySelector(".highlight");
const btn = document.querySelector(".btn");
const icon = btn.querySelector("i"); // To access the icon inside the button


btn.addEventListener("click", function () {
  if (this.dataset.open === "close") {
    menu.style.clipPath = "circle(100% at 50% 50%)";
    this.dataset.open = "open";
    icon.classList.remove("bx-menu");
    icon.classList.add("bx-x");
    icon.style.color = "white";


  } else {
    // clipPath does not display is menu close
    menu.style.clipPath = "";
    // button dataset also close
    this.dataset.open = "close";
    // nav-links highlight with white background
    highlight.style = "";
    // add menu icons
    icon.classList.add("bx-menu");
    // remove x icons
    icon.classList.remove("bx-x");
    // menu should be in #E761A4 color 
    icon.style.color = "#E761A4";
  }
});


links.forEach((link) => {
  link.addEventListener("pointerover", function () {
    const w = this.offsetWidth,
      h = this.offsetHeight,
      t = this.offsetTop;
    highlight.style.cssText = `transform: translateY(${t}px); width: ${w}px; height: ${h}px`;
  });
});

// Close menu on window scroll
window.onscroll = () => {
  if (btn.dataset.open === "open") {
    menu.style.clipPath = "";
    btn.dataset.open = "close";
    highlight.style = "";
    icon.classList.add("bx-menu");
    icon.classList.remove("bx-x");
    icon.style.color = "#E761A4";
  }
};
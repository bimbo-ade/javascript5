const sideNav = document.querySelector(".side-nav");
const menu = document.getElementById("menu");

menu.addEventListener("click", function () {
  sideNav.classList.toggle("navNav");
});

const para = document.querySelectorAll(".para");
para.forEach(function (paragraph) {
  paragraph.addEventListener("click", function () {
    if (
      paragraph.dataset.number === "23" ||
      paragraph.dataset.number === "123"
    ) {
      paragraph.innerHTML = paragraph.dataset.id;
    }
  });
});

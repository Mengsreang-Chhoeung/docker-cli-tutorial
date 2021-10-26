const navbar = document.querySelector(".responsive-nav");
const hambugur = document.querySelector(".hambugur");
hambugur.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

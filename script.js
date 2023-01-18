const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navMenu.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.classList !== hamburguer) {
      navMenu.classList.remove("active");
      hamburguer.classList.remove("active");
    }
  });
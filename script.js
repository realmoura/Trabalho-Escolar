// Burger menu toggle
const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  burger.classList.toggle("toggle");
});

// Form submission simulation
const form = document.getElementById("form-contato");
const msgSucesso = document.getElementById("msg-sucesso");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Aqui você pode integrar envio real, por enquanto simulamos:
  msgSucesso.classList.remove("hidden");

  form.reset();

  setTimeout(() => {
    msgSucesso.classList.add("hidden");
  }, 3500);
});

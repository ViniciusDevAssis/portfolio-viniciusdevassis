// Mobile Menu Toggle com animação
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.contains("opacity-100");

  if (isOpen) {
    // Fechar
    mobileMenu.classList.remove("opacity-100", "translate-y-0", "pointer-events-auto");
    mobileMenu.classList.add("opacity-0", "-translate-y-4", "pointer-events-none");
  } else {
    // Abrir
    mobileMenu.classList.remove("opacity-0", "-translate-y-4", "pointer-events-none");
    mobileMenu.classList.add("opacity-100", "translate-y-0", "pointer-events-auto");
  }
});

// Fechar menu ao clicar em link
mobileMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("opacity-100", "translate-y-0", "pointer-events-auto");
    mobileMenu.classList.add("opacity-0", "-translate-y-4", "pointer-events-none");
  });
});

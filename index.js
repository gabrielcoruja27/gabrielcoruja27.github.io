function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 100; // margem de ativação

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active"); // opcional (pra sumir de novo se rolar pra cima)
      }
    }
  }

  window.addEventListener("scroll", revealOnScroll);

  // Chama uma vez para elementos que já estão visíveis ao carregar
  revealOnScroll();
// SPA: cambiar páginas
function showPage(pageId) {
  const pages = document.querySelectorAll(".page");
  pages.forEach(page => page.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");

// RESPONSIVE
const menuBtn = document.getElementById("menuToggle");
const sidebar = document.querySelector(".sidebar");

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

// Marcar tab activo
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach(tab => tab.classList.remove("active"));
  const activeTab = document.querySelector(`.tab[data-target="${pageId}"]`);
  if(activeTab) activeTab.classList.add("active");
}

// Música
const btn = document.getElementById("musicToggle");
const music = document.getElementById("music");

btn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    btn.textContent = "♫ OFF";
  } else {
    music.pause();
    btn.textContent = "♫ PLAY";
  }
});

//para que aparezca el logo del side bar

document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(".logo-slot img");
  const hero = document.querySelector(".hero");

  // inicio invisible
  logo.style.opacity = 0;
  logo.style.transform = "translateY(-10px)";
  logo.style.transition = "opacity 0.4s ease, transform 0.4s ease";

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        // Hero ya salió del viewport -> mostrar logo
        logo.style.opacity = 1;
        logo.style.transform = "translateY(0)";
      } else {
        // Hero aún visible -> ocultar logo
        logo.style.opacity = 0;
        logo.style.transform = "translateY(-10px)";
      }
    });
  }, {
    root: null,
    threshold: 0
  });

  if (hero) observer.observe(hero);
});

//para que las imagenes del proyecto aparezcan

const projectImages = document.querySelectorAll(".projects img");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});

projectImages.forEach(img => {
  observer.observe(img);
});
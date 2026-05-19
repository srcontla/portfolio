// SPA: cambiar páginas ---------------
function showPage(pageId) {
  const pages = document.querySelectorAll(".page");
  pages.forEach(page => page.classList.remove("active"));

  document.getElementById(pageId).classList.add("active");

  // SCROLL AL TOP ---------------

window.scrollTo({
  top: 0,
  behavior: "smooth"
});

//  CERRAR SIDEBAR + OVERLAY --------------

  const sidebar = document.querySelector(".sidebar");
  const overlay = document.getElementById("overlay");

  sidebar.classList.remove("open");
  overlay.classList.remove("active");

  // Marcar tab activo ------------------------------------------
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach(tab => tab.classList.remove("active"));

  const activeTab = document.querySelector(`.tab[data-target="${pageId}"]`);
  if (activeTab) activeTab.classList.add("active");
}

// RESPONSIVE HAMBURGER ------------------------------------------

const menuToggle = document.getElementById("menuToggle");
const sidebar = document.querySelector(".sidebar");
const overlay = document.getElementById("overlay");

menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  sidebar.classList.remove("open");
  overlay.classList.remove("active");
});

// Música -------------------------------------------------------
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

//para que aparezca el logo del side bar --------------------------

document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(".logo-slot img");
  const hero = document.querySelector(".hero");

  // inicio invisible -----------
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

// MAIN PAGE IMAGES COVERS  ------------------------

const projectImages = document.querySelectorAll(".projects img");

const projectObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".projects img")
  .forEach(img => projectObserver.observe(img));

// LIGTH BOX -------------------------------------

function openLightbox(img){
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const caption = document.getElementById("lightbox-caption");

  lightbox.style.display = "flex";
  lightboxImg.src = img.src;
  caption.textContent = img.dataset.desc || "";
}

function closeLightbox(){
  document.getElementById("lightbox").style.display = "none";
}

// No deja que se de click derecho para descargar
document.addEventListener("contextmenu", function(e){
  e.preventDefault();
});

// Cerrar con click fuera de la imagen

document.getElementById("lightbox").addEventListener("click", function(e){
  if (e.target === this) {
    closeLightbox();
  }
});

//Cerrar con tecla ESC:

document.addEventListener("keydown", function(e){
  if (e.key === "Escape") {
    closeLightbox();
  }
});

// HERO PROJECTS IMAGES -------------------------------------

const heroImages = document.querySelectorAll(".project-hero img");

const heroObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".project-hero img")
  .forEach(img => heroObserver.observe(img));

heroImages.forEach(img => {
  heroObserver.observe(img);
});

// IMAGENES CON ANIMACION HOVER  -------------------------------------

const animatedElements = document.querySelectorAll(".animate");

// IMAGENES SIN CLICKLEAR-------------------------------------

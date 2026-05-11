const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

const zoomInBtn = document.getElementById("zoomIn");
const zoomOutBtn = document.getElementById("zoomOut");
const resetZoomBtn = document.getElementById("resetZoom");

let currentIndex = 0;
let scale = 1;

// Open image
images.forEach((img, index) => {
    img.addEventListener("click", () => {
        currentIndex = index;
        openLightbox();
    });
});

function openLightbox() {
    lightbox.style.display = "flex";
    lightboxImg.src = images[currentIndex].src;
    scale = 1;
    updateZoom();
}

// Close
closeBtn?.addEventListener("click", () => {
    lightbox.style.display = "none";
});

// Next / Prev
nextBtn?.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    openLightbox();
});

prevBtn?.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    openLightbox();
});

// Zoom
function updateZoom() {
    lightboxImg.style.transform = scale(${scale});
}

zoomInBtn?.addEventListener("click", () => {
    scale += 0.2;
    updateZoom();
});

zoomOutBtn?.addEventListener("click", () => {
    scale = Math.max(0.5, scale - 0.2);
    updateZoom();
});

resetZoomBtn?.addEventListener("click", () => {
    scale = 1;
    updateZoom();
});

// Close on background click
lightbox?.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});

// Keyboard controls
document.addEventListener("keydown", (e) => {
    if (lightbox.style.display === "flex") {
        if (e.key === "Escape") lightbox.style.display = "none";
        if (e.key === "ArrowRight") nextBtn.click();
        if (e.key === "ArrowLeft") prevBtn.click();
    }
});


/* =======================
   SKILLS ANIMATION
======================= */
const fills = document.querySelectorAll(".fill");

function animateSkills() {
    fills.forEach(fill => {
        const value = fill.getAttribute("data-width");
        fill.style.width = value;
    });
}

window.addEventListener("load", animateSkills);
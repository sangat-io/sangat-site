// Simple click-to-zoom lightbox for project gallery images
document.addEventListener("DOMContentLoaded", function () {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  document.querySelectorAll(".gallery img").forEach(function (img) {
    img.addEventListener("click", function () {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add("open");
    });
  });

  lightbox.addEventListener("click", function () {
    lightbox.classList.remove("open");
    lightboxImg.src = "";
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      lightbox.classList.remove("open");
      lightboxImg.src = "";
    }
  });
});

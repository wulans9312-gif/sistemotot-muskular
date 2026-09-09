document.addEventListener("DOMContentLoaded", function () {
  // Ambil semua tombol bertingkat
  const allButtons = document.querySelectorAll(
    ".chapter-btn, .topic-btn, .nested-btn, .sub-btn"
  );

  allButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Dapatkan elemen konten langsung setelah tombol yang diklik
      const content = this.nextElementSibling;
      const icon = this.querySelector(".icon");

      // Toggle penampakan konten
      if (content.style.display === "block") {
        content.style.display = "none";
        if (icon) icon.textContent = "+";
      } else {
        content.style.display = "block";
        if (icon) icon.textContent = "-";
      }
    });
  });
});
// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

document.addEventListener('DOMContentLoaded', (event) => {
  let preveiwContainer = document.querySelector(".products-preview");
  let previewBox = preveiwContainer.querySelectorAll(".preview");

  document.querySelectorAll(".products-container .product").forEach((product) => {
    product.addEventListener("click", () => {
      preveiwContainer.style.display = "flex";
      let name = product.getAttribute("data-name");
      previewBox.forEach((preview) => {
        let target = preview.getAttribute("data-target");
        if (name === target) {
          preview.classList.add("active");
        } else {
          preview.classList.remove("active");
        }
      });
    });
  });

  previewBox.forEach((preview) => {
    preview.querySelector(".fa-times").addEventListener("click", () => {
      preview.classList.remove("active");
      preveiwContainer.style.display = "none";
    });
  });

  let purchaseModal = document.getElementById("purchaseModal");
  let closeModal = document.querySelector(".close-modal");
  let purchaseForm = document.getElementById("purchaseForm");
  let priceElement = document.getElementById("price");

  document.querySelectorAll(".buy").forEach((buyButton) => {
    buyButton.addEventListener("click", (e) => {
      e.preventDefault();
      // Get the price of the product
      let product = e.target.closest('.preview');
      let price = product.querySelector('.price').innerText;

      // Set the price in the modal
      priceElement.innerText = `Price: ${price}`;

      // Hide the preview container and show the modal
      preveiwContainer.style.display = "none";
      purchaseModal.style.display = "flex";
    });
  });

  closeModal.addEventListener("click", () => {
    purchaseModal.style.display = "none";
    // Show the preview container again
    preveiwContainer.style.display = "flex";
  });

  window.addEventListener("click", (event) => {
    if (event.target === purchaseModal) {
      purchaseModal.style.display = "none";
      // Show the preview container again
      preveiwContainer.style.display = "flex";
    }
  });

  purchaseForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Pembelian berhasil!");
    purchaseModal.style.display = "none";
  });
});


document.querySelectorAll(".buy").forEach((buyButton) => {
  buyButton.addEventListener("click", (e) => {
    e.preventDefault();
    // Sembunyikan tampilan preview produk
    document.querySelector(".products-preview").style.display = "none";
    // Tampilkan modal pembelian
    purchaseModal.style.display = "flex";
  });
});

closeModal.addEventListener("click", () => {
  purchaseModal.style.display = "none";
  // Tampilkan kembali tampilan preview produk
  document.querySelector(".products-preview").style.display = "flex";
});

window.addEventListener("click", (event) => {
  if (event.target === purchaseModal) {
    purchaseModal.style.display = "none";
    // Tampilkan kembali tampilan preview produk
    document.querySelector(".products-preview").style.display = "flex";
  }
});
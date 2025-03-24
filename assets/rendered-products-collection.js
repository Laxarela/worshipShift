document.addEventListener("DOMContentLoaded", function () {
  var collectionImage = document.getElementById("collectionImage");
  var referencedProducts = document.getElementById("referencedProducts");

  if (collectionImage && referencedProducts) {
    collectionImage.addEventListener("click", function () {
      // Toggle the display of referenced products
      if (referencedProducts.style.display === "none") {
        referencedProducts.style.display = "block";
      } else {
        referencedProducts.style.display = "none";
      }
    });
  }
});

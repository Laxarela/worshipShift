// tggeling the active class 
document.addEventListener("DOMContentLoaded", function () {
  const optionButtons = document.querySelectorAll(".option-button");

  optionButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const siblings = button.closest('.options').querySelectorAll('.option-button');
      siblings.forEach((btn) => btn.classList.remove("active"));

      button.classList.toggle("active", true); 
    });
  });
});
// tggeling the active class 
document.addEventListener("DOMContentLoaded", function () {
  const optionButtons = document.querySelectorAll(".option-button");

  optionButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const nextButton = button.closest('.options').querySelectorAll('.option-button');
      nextButton.forEach((btn) => btn.classList.remove("active"));

      button.classList.toggle("active", true); 
    });
  });
});
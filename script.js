"use strict";
const container = document.querySelectorAll(".container__miniBox");
console.log(container);
const modelBox = document.querySelector(".model");
const closeModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
function close(){
  modelBox.classList.toggle("toggle");
  overlay.classList.toggle("hidden");
}
for ( let i = 0; i < container.length; i++)
container[i].addEventListener("click",close);
closeModal.addEventListener("click",close)

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !overlay.classList.contains("hidden")) {
    close()
  }
});
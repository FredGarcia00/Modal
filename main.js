const modalBtn = document.querySelector(".modal__btn");
const modalCloseBtn = document.querySelector(".modal__closeBtn");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".modal__overlay");

const openModal = function () {
  modal.classList.remove("modal__hidden");
  overlay.classList.remove("modal__hidden");
};
const closeModal = function () {
  modal.classList.add("modal__hidden");
  overlay.classList.add("modal__hidden");
};

modalBtn.addEventListener("click", openModal);
modalCloseBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  //   console.log(e);
  if (e.key === "Escape" && !modal.classList.contains("modal__hidden")) {
    closeModal();
  }
});

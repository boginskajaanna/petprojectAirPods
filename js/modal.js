document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("backdrop");
  const btns = document.querySelectorAll(".request-call-btn");
  const closeBtn = document.querySelector(".backdrop__close-btn");
  const innerModal = document.querySelector(".backdrop__inner");

  // Открываем модальное окно по клику на любую кнопку
  btns.forEach((btn) => {
    btn.addEventListener("click", function () {
      modal.style.display = "block";
    });
  });

  // Закрываем модальное окно по клику на крестик
  closeBtn.addEventListener("click", function (event) {
    event.stopPropagation(); // Остановка всплытия события
    modal.style.display = "none";
  });

  // Закрываем модальное окно по клику вне его
  window.addEventListener("click", function (event) {
    if (event.target === modal && !event.target.contains(innerModal)) {
      modal.style.display = "none";
    }
  });

  // Закрываем модальное окно по клику внутри innerModal
  innerModal.addEventListener("click", function (event) {
    event.stopPropagation(); // Остановка всплытия события
  });
});

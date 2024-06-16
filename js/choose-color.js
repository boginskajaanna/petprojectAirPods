document.addEventListener("DOMContentLoaded", function () {
  const chooseColor = document.querySelectorAll(".choose-color__btn");
  const contentItem = document.querySelectorAll(".content-item");
  const innerModal = document.querySelector(".backdrop__inner");

  let activeColor = "color--red"; // Default active color

  // Логика изменения цвета элементов
  chooseColor.forEach(function (element) {
    element.addEventListener("click", function (event) {
      const target = event.currentTarget;
      const button = target.dataset.button;
      const contentActive = document.querySelectorAll(`.${button}`);

      chooseColor.forEach(function (item) {
        item.classList.remove("choose-color__btn--active");
      });

      target.classList.add("choose-color__btn--active");

      contentItem.forEach(function (item) {
        item.classList.remove("content-item--active");
      });

      contentActive.forEach(function (item) {
        item.classList.add("content-item--active");
      });

      // Изменение цвета фона модального окна
      innerModal.classList.remove(
        "color--red",
        "color--blue",
        "color--white",
        "color--green",
        "color--black"
      );
      innerModal.classList.add(button);
    });
  });
});

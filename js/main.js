document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("backdrop");
  const btns = document.querySelectorAll(".request-call-btn");
  const closeBtn = document.querySelector(".backdrop__close-btn");
  const innerModal = document.querySelector(".backdrop__inner");
  const form = document.getElementById("requestCallForm");
  const formMessage = document.getElementById("formMessage");
  const chooseColor = document.querySelectorAll(".choose-color__btn");
  const contentItem = document.querySelectorAll(".content-item");

  let activeColor = "color--red"; // Default active color

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

  // Обработчик события отправки формы
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Отправка данных формы на сервер с использованием Fetch API
    fetch(form.action, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: form.name.value,
        phone: form.phone.value,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        form.reset(); // Очистка полей формы после успешной отправки

        // Показываем сообщение об успешной отправке
        formMessage.style.display = "block"; // Показываем сообщение
      })
      .catch((error) => {
        console.error("Error:", error);
        formMessage.textContent = "There was an error processing your request. Please try again later."; // Вывод сообщения об ошибке
        formMessage.style.display = "block"; // Показываем сообщение об ошибке
      });
  });

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

      // // Изменение цвета фона backdrop__inner
      // innerModal.classList.remove(
      //   "color--red",
      //   "color--blue",
      //   "color--white",
      //   "color--green",
      //   "color--black"
      // );
      // innerModal.classList.add(button);
    });
  });
});

//ВАЛИДАЦИЯ ИНПУТА ТЕЛ
document.addEventListener("DOMContentLoaded", function () {
  const phoneInput = document.getElementById("phone");

  // Добавляем обработчик события input для поля ввода телефона
  phoneInput.addEventListener("input", function () {
    // Удаляем все символы, кроме +, цифр, -, ( и )
    this.value = this.value.replace(/[^+0-9\-()]/g, "");
  });
});

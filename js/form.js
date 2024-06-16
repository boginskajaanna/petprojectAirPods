document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("requestCallForm");
  const formMessage = document.getElementById("formMessage");

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
});

//ВАЛИДАЦИЯ ИНПУТА НОМЕР ТЕЛЕФОНА
document.addEventListener("DOMContentLoaded", function () {
  const phoneInput = document.getElementById("phone");

  // Добавляем обработчик события input для поля ввода телефона
  phoneInput.addEventListener("input", function () {
    // Удаляем все символы, кроме +, цифр, -, ( и )
    this.value = this.value.replace(/[^+0-9\-()]/g, "");
  });
});

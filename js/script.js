alert("Нажміть на кнопки щоб змінити стиль сторінки");

function changeColor(newColor) {
    const elem = document.getElementById('body');
    elem.style.color = newColor;
  }
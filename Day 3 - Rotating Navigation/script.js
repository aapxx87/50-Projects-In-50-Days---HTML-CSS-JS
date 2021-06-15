// Selectors
const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')


// Добавляем событие на кнопку open menu
open.addEventListener('click', function() {
  container.classList.add('show-nav')
})


// Добавляем событие на кнопку close menu
close.addEventListener('click', function() {
  container.classList.remove('show-nav')
})

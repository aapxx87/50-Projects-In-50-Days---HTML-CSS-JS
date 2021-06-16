const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')


btn.addEventListener('click', function() {
  // переключаем класс при нажатии на кноку Поиска путем метола toggle
  search.classList.toggle('active')

  // сразу фиксируем курсор в поле инпута поиска
  input.focus()
})

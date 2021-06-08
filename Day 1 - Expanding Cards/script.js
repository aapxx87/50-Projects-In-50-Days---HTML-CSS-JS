// Step 3

// создаем переменные для dom-элементов

// выбираем ВСЕ панели
const panels = document.querySelectorAll('.panel')


// перебираем массив panels со всеми элементами panel
panels.forEach(function(panel) {

  // вешаем на каждую panel (то есть на каждый элемент массива panels) слушатель событий по клику
  panel.addEventListener('click', function() {

    // удаляем класс ative у предыдущей активной панели, вызываем для этого функцию
    removeActiveClasses()

    // при клике на определенную панель мы будем добавлять ей класс active
    panel.classList.add('active')
  })
})




const removeActiveClasses = function() {

  // проходимся по массиву с панелями и удаляем везде где есть класс active
  panels.forEach(function(panel) {
    panel.classList.remove('active')
  })

}

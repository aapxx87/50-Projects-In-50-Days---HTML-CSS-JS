// Step 3

// 3.1 - выбираем массив со всеми боксами
const boxes = document.querySelectorAll('.box')

// 3.2 - нам нужно добавить слушатель событий на скролл в само окно, в нее передаем функцию, котооая будет отслеживатьс ами боксы
window.addEventListener('scroll', checkBoxes)



// 3.2 - создаем функцию checkBoxes
function checkBoxes() {

  // нам нужно определить триггер поинт, точку после пересечения которой будет выезжать бокс
  // window.innerHeight - это высота окна (можно проверить через console.log(window.innerHeight)) - причем именно видимая часть окна
  // чтобы установить триггер поинт раньше чем заканчивается экран, нам нужно поделить это значение на нужное число
  const triggerBottom = window.innerHeight / 5 * 4;


  boxes.forEach(function(box) {
    const boxTop = box.getBoundingClientRect().top

    //дальше нам нужно проверять что верх бокса ниже триггер поинта, если это так то мы добавляем класс show
    if(boxTop < triggerBottom) {
      box.classList.add('show')
    } else {
      box.classList.remove('show')
    }
  })

}



// f

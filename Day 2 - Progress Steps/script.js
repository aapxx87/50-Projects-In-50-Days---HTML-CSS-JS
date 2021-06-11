// Step 3


// 3.1 - назначаем переменные для необходимых элементов
const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')

// 3.2 - ыбираем все круги, это будет массив из всех нод элементов с классом .circle
const circles = document.querySelectorAll('.circle')


// 3.3 - устанвливаем стартовое условие для активного круга, это будет переменная которая будет меняться при нажатии на кнопки prev и next, а к смене этой переменной мы привяжем дугие условия смены стилей
let currentActive = 1


// 3.4 - добавляем слушатель событий на кнопку Next
next.addEventListener('click', function() {

  // увеличиваем currentActive - то есть текущий активный шаг на 1, при каждом нажатии к текущему шагу будет прибавляться единица
  currentActive++

  // нам нужно установить предел счетчика шагов, так как их в нашем случае всего 4, ставим условие = если текущий счет строго боьше кол-ва элементов в массиве с кругами. В этом случае мы останавливаем значение переменной счета на значении длинны массива, тое сть 4. То есть дальше 4 счетчик шагов считаться не будет.
  if(currentActive > circles.length) {
    currentActive = circles.length
  }

  // 3.6 - add function update()
  update()
})



// 3.4.1 - добавляем слушатель событий на кнопку Prev
prev.addEventListener('click', function() {

  // увеличиваем currentActive  на 1
  currentActive--

  // нам нужно установить предел счетчика шагов, если он стал меньше 1, то есть 0, то мы фиксируем его на значении 1, то есть ниже первого шага не уйти
  if(currentActive < 1) {
    currentActive = 1
  }

  // 3.6 - add function update()
  update()
})


// 3.5 - создаем функцию update
function update() {

  circles.forEach(function(circle, idx) {

    if(idx < currentActive) {

      circle.classList.add('active')
    } else {

      circle.classList.remove('active')
    }
  })

  // по мере движения каждого шага каждый circle получает класс active, нам нужно сделать так чтобы активная линия прогресс бара тоже появлялась по мере активации последующего шага
  // для этого создаем переменную для сохраннеия в массив всех нод с классом active
  const active = document.querySelectorAll('.active')

  // у нас всегда будет определенное соотношение числа элементов в массиве с классом active к длинне массива с кругами
  // console.log(active.length, circles.length) - к примеру на втором шаге это будет 2 и 4; на третьем шаге 3 и 4: на 4 шаге 4 и 4; - мы используем эти соотношения, чтобы увеличивать длинну активного прогресс бара в качестве свойства width в сss, по дефолту это значение стоит в своейтс ена 0%
  // мы будем делить одно значени ан другое и получать соответствую значение соотношения console.log(active.length / circles.length) - 0,5 - 2 step; 0,75 - 3 step; 1 - 4 step; умножим это значеи на 100, чтобы получить %, которые мы будем вставлять в свойство width
  // отнимаем по единице, чтобы значения процента были на 50, 75 и 100, а 33, 66 и 100
  progress.style.width = (active.length - 1) / (circles.length - 1) * 100 + '%'


  // нужно активировать кнопку prev , так как по фефолту она у нас disabled
  if(currentActive === 1) {
    prev.disabled = true
  } else if(currentActive === circles.length) {
    // если мы находимся на последнем шаге, то выключаем кнопку next
    next.disabled = true
  } else {
    prev.disabled = false
    next.disabled = false
  }

}








































// f

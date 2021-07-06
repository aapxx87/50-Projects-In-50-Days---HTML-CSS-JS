// Step 3
const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')


// событие когда наводим курсовна контейнер - добаляем класс
left.addEventListener('mouseenter', function() {
  container.classList.add('hover-left')
})

// событие, когда убираем курсор - удаляем класс
left.addEventListener('mouseleave', function() {
  container.classList.remove('hover-left')
})



right.addEventListener('mouseenter', function() {
  container.classList.add('hover-right')
})


right.addEventListener('mouseleave', function() {
  container.classList.remove('hover-right')
})

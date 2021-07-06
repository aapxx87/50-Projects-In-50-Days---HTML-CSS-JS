// Step 3

// Мы будем вставлять вмсето обычного label тот в котором каждая буква в span обернута

const labels = document.querySelectorAll('.form-control label')

labels.forEach(function(label) {

  // 1) берем текущий текст который лежит в label - label.innerText -> Email
  // 2) разбиваем этот текст по буквам в массив методом split('')
  // 3) методом map преобразуем каждый элемент массива, то есть каждую букву
  // 4) обратно собираем в строку методом join, чтобы вставить строку в html

  label.innerHTML = label.innerText
  .split('')
  .map((letter, idx) => `<span style="transition-delay: ${idx * 50}ms;">${letter}</span>`)
  .join('')
})

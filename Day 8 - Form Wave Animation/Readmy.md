__Описание__: форма логина с эффектом волны для названия полей email и password. При клике по инпуту заголовок волной поднимается вверх, а потом волной возвращается обратно.


__Логика__:
- каждый символ заголовка инпута будет браться в спан, потом к каждому элементу будет добавляться transform:translateY при клике по инпуту и будет добавлен transition для плавности. При помощи js мы добавим задержку к каждому символу trasition-delay, которая будет увеличиваться к каждому символу.

- можно было бы и ручками это сделать через html и css, либо инлайн стилями добавлением стиля к каждому спан либо присваивая каждому span свой id и на каждый навешать задержку transition с разным значением

<span style="transition-delay: 50ms;">m</span>



__Интересности__:
- очень просто стилизовали инпут только с одним нижним подчеркиванием и фоном поля как у контейнера

.form-control input {
  background-color: transparent;
  border: 0;
  border-bottom: 2px #fff solid;
}

- убираем бордер при активном состоянии инпута

.btn:focus {
  outline: 0;
}

- формат совмещения нескольких css свойств. то есть когда становится активен один класс - это аффектит на другой класс

.form-control input:focus + label span,
.form-control input:valid + label span {
  color: lightblue;
  transform: translateY(-30px);
}



__Steps__:
1) index.html
2) style.css
3) script.js
4) style.css

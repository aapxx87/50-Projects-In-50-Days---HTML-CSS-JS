__Описание__: анимация выезжающий блоков при скролле страницы - по мере прокручивания (скролла) страницы вниз, слева и справа будут выезжать прямоугольные боксы.


__Логика__:
1) добавляем в HTML нужное кол-во боксов через div
2) изначально размещаем их свойством *transform: translateX()* слева и справа за пределами экрана через один
3) создаем *css класс show*, при *назначении которого контейнер будет возвращаться в исходное положение* - transform: translateX(0) (выплывать слева и с права в центр через один)
4) класс show мы присваиваем через JS
5) в JS определяем триггер поинт для назначения класса show  и выезжания блока - слушатель событий вешаем на объект window
6) при помощи *window.innerHeight* высчитываем триггер поинт для скролла
6) дальше функцией *getBoundingClientRect()* мы определяем положение top бокса и если она ниже триггер поинта, то добавляем ему класс show и он появляется



__Steps__:
1) index.html
2) style.css
3) script.js

// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, 
// после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount 
// и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>

// <div id="boxes"></div>

const controlsref = document.querySelector('#controls');
const inputRef = document.querySelector('input');
const renderRef = document.querySelector('button[data-action="render"]');
const removeRef = document.querySelector('button[data-action="destroy"]');
const boxesRef = document.querySelector('#boxes'); 

const createBox = size => {
   const box =  document.createElement('div');
   box.style.width = size + 'px';
   box.style.height = size + 'px';
   box.style.backgroundColor = rgbCreate()
return box;
}

const rgbCreate = () => {
    const r = (Math.floor(Math.random()* 256))
    const g = (Math.floor(Math.random()* 256))
    const b = (Math.floor(Math.random()* 256))
    return `rgb(${r}, ${g}, ${b})`;
}


const createBoxes = (amount) => {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < amount; i++) {
        const size = 30 + i * 10
        const div = createBox(size) 
        fragment.appendChild(div);
    }
  boxesRef.appendChild(fragment)
}

const createBoxesList = () =>{
   const amount = Number(inputRef.value);
   createBoxes(amount)
}

const removeList = () => {
    boxes.innerHTML = ""
}


renderRef.addEventListener('click', createBoxesList);

removeRef.addEventListener('click', removeList);
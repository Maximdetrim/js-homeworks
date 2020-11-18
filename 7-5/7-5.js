// Напиши скрипт который, при наборе текста в инпуте  (событие input), 
// подставляет его текущее значение в span#name-output.
//  Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>

const inputRef = document.querySelector('#name-input');
const nameRef = document.querySelector('#name-output');

const handleNameChange = event => {
    event.target.value === ''
    ? nameRef.textContent = 'Незнакомец':nameRef.textContent = event.target.value;
}

inputRef.addEventListener('input',handleNameChange );

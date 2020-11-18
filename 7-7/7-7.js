// Напиши скрипт, который реагирует на изменение значения input#font-size-control 
// (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться 
// размер текста.

{/* <input id="font-size-control" type="range" />
<br />
<span id="text">Абракадабра!</span> */}

// min="0" max="100" value="90" step="1"

const rangeRef = document.querySelector('#font-size-control');
  rangeRef.setAttribute('min','0');
  rangeRef.setAttribute('max','100');
  rangeRef.setAttribute('step','1');

const textref = document.querySelector('#text');
textref.style.fontSize = '50px';




rangeRef.addEventListener('input', event => {
    textref.style.fontSize = event.target.value + 'px';
    console.log();
});
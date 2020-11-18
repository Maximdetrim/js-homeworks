// Задание
// Создай галерею с возможностью клика по ее элементам и просмотра полноразмерного изображения в модальном окне.
//  Превью результата посмотри по ссылке.(https://monosnap.com/file/KKoRHdov8Thm2oWpzURSOg2L6iDCp3)
// Разбей задание на несколько подзадач:

// Создание и рендер разметки по массиву данных и предоставленному шаблону.
// Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
// Открытие модального окна по клику на элементе галереи.
// Подмена значения атрибута src элемента img.lightbox__image.
// Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].
// Очистка значения атрибута src элемента img.lightbox__image. Это необходимо для того, чтобы при следующем открытии модального окна, пока грузится изображение, мы не видели предыдущее.
// Стартовые файлы
// В папке src ты найдешь стартовые файлы проекта с базовой разметкой и готовыми стилями.
// В файле gallery-items.js есть массив объектов содержащих информацию о изображениях: маленькое изображение, оригинальное и описание.
// Разметка элемента галереи
// Ссылка на оригинальное изображение должна храниться в data-атрибуте source на элементе img, и указываться в href ссылки (это необходимо для доступности).

// <li class="gallery__item">
//   <a
//     class="gallery__link"
//     href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
//   >
//     <img
//       class="gallery__image"
//       src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
//       data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
//       alt="Tulips"
//     />
//   </a>
// </li>
// Дополнительно
// Следующий функционал не обязателен при сдаче задания, но будет хорошей практикой по работе с событиями.

// Закрытие модального окна по клику на div.lightbox__overlay.
// Закрытие модального окна по нажатию клавиши ESC.
// Пролистывание изображений галереи в открытом модальном окне клавишами "влево" и "вправо".
import galleryItems from './gallery-items.js';

const refs = {
  gallery : document.querySelector('.js-gallery'),
  lightbox : document.querySelector('.js-lightbox'),
  largeImageModal : document.querySelector('.lightbox__image'),
  closeModalButton : document.querySelector('.lightbox__button'),
  modalOverlay : document.querySelector('.lightbox__overlay'),
}
const galleryCreate = (arr, obj, index) => {
  // console.log('arr1:',arr);
   const li = document.createElement('li');
   li.classList.add('gallery__item');
  
  
  const a = document.createElement('a');
   a.classList.add('gallery__image');
   a.href = obj.original;
   a.dataset.index = index;

  const img = document.createElement('img');
   img.classList.add('gallery__link');
   img.src = obj.preview;
   img.dataset.source = obj.original;
   
  a.appendChild(img);
  li.appendChild(a);

 arr.push(li);
//  console.log('arr2:', arr);
 return arr
}
  
  function createGalleryMarkup(items) {
  const galleryMarkupArr = items.reduce(galleryCreate, []);
  refs.gallery.append(...galleryMarkupArr);
}

createGalleryMarkup(galleryItems)

const clickOpenHandler = event => {
  window.addEventListener('keydown', event => {
    if(event.code === 'ArrowLeft'){
      console.log('event.target:',event.target);
    }
  })

  window.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
     clickCloseHandler()
    }})

  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    console.log('ПАШОЛ НАХУЙ');
    return
  }

refs.lightbox.classList.add('is-open');
refs.largeImageModal.src = event.target.dataset.source;
}

const clickCloseHandler = () => {
  refs.largeImageModal.src = '';
  refs.lightbox.classList.remove('is-open');
}

refs.gallery.addEventListener('click', clickOpenHandler);

refs.closeModalButton.addEventListener('click', clickCloseHandler);

refs.modalOverlay.addEventListener('click', clickCloseHandler);



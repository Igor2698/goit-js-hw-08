import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const list = document.querySelector('.gallery')
const markup = galleryItems.map(({ preview, original, description }) => `
    <li class ='gallery__item'>
        <a href="${original}" class="gallery__item">
            <img src="${preview}" alt="${description}"  class="gallery__image">
        </a>
    </li>`).join('');
list.innerHTML = markup;
let gallery = new SimpleLightbox('.gallery a', { overlay: true, overlayOpacity: 0.98, animationSpeed: 1000, captionsData: 'alt', captionDelay: 250,  });



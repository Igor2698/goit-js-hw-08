import { galleryItems } from './gallery-items.js';
// Change code below this line
const list = document.querySelector('.gallery')
const markup = galleryItems.map(({ preview, original, description }) => `
    <li class ='gallery__item'>
        <a href="${original}" class="gallery__item">
            <img src="${preview}" alt="${description}" data-source="${original}" class="gallery__image">
        </a>
    </li>`).join('');
list.innerHTML = markup;
list.addEventListener('click', onListClick);

function onListClick(ev) {
    ev.preventDefault();
    if (ev.target.nodeName !== 'IMG') {
        return
    }
    console.log(ev.target.dataset.source);
    const instance = basicLightbox.create(` < div class= "modal" >
    <img src="${ev.target.dataset.source}">
       </div>`, { closable: false, })
    instance.show();


    function onKeyDown(event) {
        if (event.key === 'Escape') {
            instance.close();
            document.removeEventListener('keydown', onKeyDown);
        }
    }

    document.addEventListener('keydown', onKeyDown);
}



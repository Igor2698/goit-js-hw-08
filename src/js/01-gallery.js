import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items.js';
// Change code below this line
// Change code below this line

const list = document.querySelector('.gallery');

list.style.setProperty("display", "flex")
list.style.setProperty("gap", "10px")
list.style.setProperty("list-style", "none")
list.style.setProperty("flex-wrap", "wrap")

const markup = galleryItems.map(image => {
    return `<li class = "gallery__item" style="width: calc((100% - 10px * 2) / 3);"><a class="gallery__link" href="${image.original}"><img src="${image.preview}"  class="gallery__image" alt ="${image.description}" /></a></li>`
}).join('');

list.insertAdjacentHTML("afterbegin", markup)

list.addEventListener('click', clickOnImage)
let lightbox
function clickOnImage(event) {
    event.preventDefault()
    if (event.target.nodeName !== "IMG") {
        return
    }

    lightbox = new SimpleLightbox('.gallery li a', { captionType: 'attr', captionsData: 'alt', captionDelay: 250 });
}
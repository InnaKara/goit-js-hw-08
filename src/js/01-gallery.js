// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

import { createMarkup } from '../templates/templatePic';
// Change code below this line

const container = document.querySelector('.gallery');
// createMarkup(galleryItems);
container.insertAdjacentHTML('beforeend', createMarkup(galleryItems));

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  heightRatio: 1,
  showCounter: false,
});

function itemsClickHandler(event) {
  event.preventDefault();
  if (event.currentTarget === event.target) {
    return;
  }
}

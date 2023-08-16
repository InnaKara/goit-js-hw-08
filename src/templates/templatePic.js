function createMarkup(array) {
  return array
    .map(
      ({ description, original, preview }) =>
        `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`
    )
    .join('');
}
export { createMarkup };

import {closeBigPicture} from './bigPicture.js';

const template = document.getElementById('picture');
const fragment = document.createDocumentFragment();
const closeModalButton = document.getElementById('picture-cancel');

closeModalButton.addEventListener('click', () => {
  closeBigPicture();
});

const createPhotoElement = (photo, openImageCallback) => {
  const miniature = template.content.cloneNode(true);
  const link = miniature.querySelector('a');
  const img = miniature.querySelector('img');
  const likes = miniature.querySelector('.picture__likes');
  const comments = miniature.querySelector('.picture__comments');

  link.href = photo.url;
  img.src = photo.url;
  img.alt = photo.description;
  likes.textContent = photo.likes;
  comments.textContent = photo.comments.length;

  img.addEventListener('click', (evt) => {
    evt.preventDefault();
    openImageCallback(photo);
  });

  return miniature;
};

export const renderPhotoElements = (photoData, openImageCallback) => {
  const pictures = document.querySelector('.pictures');

  photoData.forEach((photo) => {
    const miniature = createPhotoElement(photo, openImageCallback);
    fragment.appendChild(miniature);
  });

  pictures.appendChild(fragment);
};



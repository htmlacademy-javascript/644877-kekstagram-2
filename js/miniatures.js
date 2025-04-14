import {closeBigPicture} from './bigPicture';

const template = document.getElementById('picture');
const fragment = document.createDocumentFragment();
const closeModalButton = document.getElementById('picture-cancel');

closeModalButton.addEventListener('click', () => {
  closeBigPicture();
});

function createPhotoElement(photo, openImageCb) {
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

  img.addEventListener('click', (e) => {
    e.preventDefault();
    openImageCb(photo);
  });

  return miniature;
}

export function addPhotoElements(photoData, openImageCb){
  const pictures = document.querySelector('.pictures');

  photoData.forEach((photo) => {
    const miniature = createPhotoElement(photo, openImageCb);
    fragment.appendChild(miniature);
  });

  pictures.appendChild(fragment);
}

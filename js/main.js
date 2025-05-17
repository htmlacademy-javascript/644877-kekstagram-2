import { editImage} from './uploadImageModal.js';
import { renderPhotosByFilter, savePhotosData } from './photosFilters.js';
import { loadImages } from './api.js';

const uploadPhotoInput = document.getElementById('upload-file');
const errorTemplate = document.getElementById('data-error');

const showLoadError = () => {
  const message = errorTemplate.content.cloneNode(true);
  document.body.appendChild(message);

  const closeError = () => {
    const container = document.querySelector('.data-error');
    container.remove();
  };

  setTimeout(closeError, 5000);
};

loadImages()
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error();
    }
  })
  .then((loadedPhotos) =>{
    savePhotosData(loadedPhotos);
    renderPhotosByFilter('default');
  })
  .catch(() => {
    showLoadError();
  });

uploadPhotoInput.addEventListener('change', () => {
  editImage();
});


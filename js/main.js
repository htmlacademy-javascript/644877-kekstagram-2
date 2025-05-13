import { editImage} from './uploadImageModal.js';
import { renderPhotos } from './photosFilters.js';

const uploadPhotoInput = document.getElementById('upload-file');

renderPhotos('default');

uploadPhotoInput.addEventListener('change', () => {
  editImage();
});

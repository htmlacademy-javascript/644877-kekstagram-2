import { openBigPicture } from './bigPicture.js';
import { generatePhotos } from './generatePhotos.js';
import { addPhotoElements } from './miniatures.js';
import { editImage} from './uploadImage.js';

const imageInput = document.getElementById('upload-file');

const photos = generatePhotos();

// function openImageCallback(data) {
//   openBigPicture(data);
// }

addPhotoElements(photos, openBigPicture);

imageInput.addEventListener('change', () => {
  editImage();
});

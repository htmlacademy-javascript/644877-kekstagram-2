import { openBigPicture } from './bigPicture';
import { generatePhotos } from './generatePhotos';
import { addPhotoElements } from './miniatures';
import { editImage} from './uploadImage';

const photos = generatePhotos();

function openImageCallback(data) {
  openBigPicture(data);
}

addPhotoElements(photos, openImageCallback);

const imageInput = document.getElementById('upload-file');
imageInput.addEventListener('change', () => {
  editImage();
});

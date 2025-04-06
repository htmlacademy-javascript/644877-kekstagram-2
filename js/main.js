import { openBigPicture } from './bigPicture';
import { generatePhotos } from './generatePhotos';
import { addPhotoElements } from './miniatures';

const photos = generatePhotos();

function openImageCallback(data) {
  openBigPicture(data);
}

addPhotoElements(photos, openImageCallback);

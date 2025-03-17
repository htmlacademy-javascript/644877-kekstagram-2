import { generatePhotos } from './generatePhotos';
import { addPhotoElements } from './miniatures';

const photos = generatePhotos();

addPhotoElements(photos);

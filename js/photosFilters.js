import { debounce } from './utils.js';
import { getRandomNumber } from './getRandomNumber.js';
import { renderPhotoElements } from './miniatures.js';
import { openBigPicture } from './bigPicture.js';

const photosFilters = document.querySelector('.img-filters');
const photosByDefaultButton = document.getElementById('filter-default');
const photosByRandomButton = document.getElementById('filter-random');
const photosByDiscussedButton = document.getElementById('filter-discussed');
const activeFilterButtopnClass = 'img-filters__button--active';
let allPhotosData = [];

export const savePhotosData = (photosData)=> {
  allPhotosData = photosData;
};

const getPhotosDataByFilter = (filter) => {
  const allPhotosDataCopy = [...allPhotosData];

  if (filter === 'default') {
    return allPhotosDataCopy;
  }

  if (filter === 'random') {
    const photosToRender = 10;
    const photos = [];
    for (let i = 0; i < photosToRender; i++) {
      const randomIndex = getRandomNumber(0, allPhotosDataCopy.length - 1);
      const randomPhoto = allPhotosDataCopy.splice(randomIndex, 1)[0];
      photos.push(randomPhoto);
    }
    return photos;
  }

  if (filter === 'discussed') {
    return allPhotosDataCopy.sort((photo1,photo2) => {
      if (photo1.comments.length === photo2.comments.length) {
        return 0;
      }
      if (photo1.comments.length > photo2.comments.length) {
        return -1;
      }
      return 1;
    });
  }
};

export const renderPhotosByFilter = (filter) => {
  photosFilters.classList.remove('img-filters--inactive');
  const renderedPhotos = document.querySelectorAll('.picture');
  renderedPhotos.forEach((photo) => photo.remove());
  const photosData = getPhotosDataByFilter(filter);
  renderPhotoElements(photosData, openBigPicture);
};

const renderPhotosDebounced = debounce(renderPhotosByFilter);

photosByDefaultButton.addEventListener('click', () => {
  photosByDefaultButton.classList.add(activeFilterButtopnClass);
  photosByRandomButton.classList.remove(activeFilterButtopnClass);
  photosByDiscussedButton.classList.remove(activeFilterButtopnClass);
  renderPhotosDebounced('default');
});

photosByRandomButton.addEventListener('click', () => {
  photosByDefaultButton.classList.remove(activeFilterButtopnClass);
  photosByRandomButton.classList.add(activeFilterButtopnClass);
  photosByDiscussedButton.classList.remove(activeFilterButtopnClass);
  renderPhotosDebounced('random');
});

photosByDiscussedButton.addEventListener('click', () => {
  photosByDefaultButton.classList.remove(activeFilterButtopnClass);
  photosByRandomButton.classList.remove(activeFilterButtopnClass);
  photosByDiscussedButton.classList.add(activeFilterButtopnClass);
  renderPhotosDebounced('discussed');
});

import {getPhotoes} from './getPhotoes';
const photoes = getPhotoes();
const template = document.getElementById('picture');
const fragment = document.createDocumentFragment();

photoes.forEach((photo) => {
  const miniature = template.content.cloneNode(true);
  miniature.href = photo.url;
  miniature.querySelector('img').src = photo.url;
  miniature.querySelector('img').alt = photo.description;
  miniature.querySelector('.picture__likes').textContent = photo.likes;
  miniature.querySelector('.picture__comments').textContent = photo.comments.length;

  fragment.appendChild(miniature);
});

const pictures = document.querySelector('.pictures');
pictures.appendChild(fragment);

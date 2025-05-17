import { onEscape } from './onEscape.js';

const COMMENTS_COUNT_STEP = 5;
const template = document.querySelector('.social__comment');
const bigPicture = document.querySelector('.big-picture');
const img = bigPicture.querySelector('img');
const likes = bigPicture.querySelector('.likes-count');
const commentShown = bigPicture.querySelector('.social__comment-shown-count');
const commentTotal = bigPicture.querySelector('.social__comment-total-count');
const socialComments = bigPicture.querySelector('.social__comments');
const description = bigPicture.querySelector('.social__caption');
const commentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
let allPhotoCommentsData = [];
let renderedCommentsCount = 0;

const createCommentElement = (commentData) => {
  const comment = template.cloneNode(true);
  const socialPicture = comment.querySelector('.social__picture');
  const socialText = comment.querySelector('.social__text');

  socialPicture.src = commentData.avatar;
  socialPicture.alt = commentData.name;
  socialText.textContent = commentData.message;

  return comment;
};

const addComments = () => {
  const newCommentsData = allPhotoCommentsData.slice(renderedCommentsCount, renderedCommentsCount + COMMENTS_COUNT_STEP);
  const fragment = document.createDocumentFragment();

  newCommentsData.forEach((comment) => {
    fragment.appendChild(createCommentElement(comment));
  });

  socialComments.appendChild(fragment);

  const newCommentsCount = renderedCommentsCount + newCommentsData.length;
  commentShown.textContent = newCommentsCount;
  if (newCommentsCount >= allPhotoCommentsData.length){
    commentsLoader.classList.add('hidden');
  }
  renderedCommentsCount = newCommentsCount;
};

const onCommentsLoaderClick = () => {
  addComments();
};

export const closeBigPicture = () => {
  document.body.classList.remove('modal-open');
  bigPicture.classList.add('hidden');
  commentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  commentsLoader.removeEventListener('click', onCommentsLoaderClick);
};

const onDocumentKeydown = (evt) => {
  onEscape(evt, closeBigPicture);
};

document.addEventListener('keydown', onDocumentKeydown);

export const openBigPicture = (photo) => {
  bigPicture.classList.remove('hidden');
  commentCount.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');
  document.body.classList.add('modal-open');

  img.src = photo.url;
  likes.textContent = photo.likes;
  commentTotal.textContent = photo.comments.length;
  description.textContent = photo.description;
  socialComments.innerHTML = '';
  renderedCommentsCount = 0;
  allPhotoCommentsData = photo.comments;
  commentsLoader.addEventListener('click', onCommentsLoaderClick);

  addComments();
};

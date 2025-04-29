import { onEscape } from './onEscape.js';

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

export function openBigPicture(photo) {
  bigPicture.classList.remove('hidden');
  commentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  document.body.classList.add('modal-open');

  img.src = photo.url;
  likes.textContent = photo.likes;
  commentShown.textContent = photo.comments.length;
  commentTotal.textContent = photo.comments.length;
  description.textContent = photo.description;

  addComments(photo.comments);
  document.addEventListener('keydown', onDocumentKeydown);
}

function addComments(commentsData){
  const fragment = document.createDocumentFragment();

  commentsData.forEach((comment) => {
    fragment.appendChild(createCommentElement(comment));
  });

  socialComments.innerHTML = '';
  socialComments.appendChild(fragment);
}

function createCommentElement(commentData){
  const comment = template.cloneNode(true);
  const socialPicture = comment.querySelector('.social__picture');
  const socialText = comment.querySelector('.social__text');

  socialPicture.src = commentData.avatar;
  socialPicture.alt = commentData.name;
  socialText.textContent = commentData.messages;

  return comment;
}

export function closeBigPicture(){
  document.body.classList.remove('modal-open');
  bigPicture.classList.add('hidden');
  commentCount.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
}

function onDocumentKeydown (evt) {
  onEscape(evt, closeBigPicture);
}

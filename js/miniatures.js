const template = document.getElementById('picture');
const fragment = document.createDocumentFragment();

function createPhotoElement(photo) {
  const miniature = template.content.cloneNode(true);
  const link = miniature.querySelector('a');
  const img = miniature.querySelector('img');
  const likes = miniature.querySelector('.picture__likes');
  const comments = miniature.querySelector('.picture__comments');

  link.href = photo.url;
  img.src = photo.url;
  img.alt = photo.description;
  likes.textContent = photo.likes;
  comments.textContent = photo.comments.length;

  return miniature;
}

export function addPhotoElements(photoData){
  const pictures = document.querySelector('.pictures');

  photoData.forEach((photo) => {
    fragment.appendChild(createPhotoElement(photo));
  });

  pictures.appendChild(fragment);
}

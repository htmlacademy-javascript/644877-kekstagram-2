import {getRandomNumber} from './getRandomNumber';

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const names = [
  'Андрей',
  'Елизар',
  'Нафаня',
  'Марта',
  'Анисья',
  'Марк'
];

function getOneComment(i) {
  const oneComment = {};

  oneComment.id = getRandomNumber(i * 10 + 1, (i + 1) * 10);
  oneComment.avatar = `img/avatar-${getRandomNumber(1,6)}.svg`;
  oneComment.message = '';
  const messagesCount = getRandomNumber(1,2);
  for(let j = 1; j <= messagesCount; j++) {
    const messageIndex = getRandomNumber(0, messages.length - 1);
    oneComment.message += messages[messageIndex];
  }
  const nameIndex = getRandomNumber(0, names.length - 1);
  oneComment.name = names[nameIndex];

  return oneComment;
}

export function getComments () {
  const comments = [];

  const maxComments = getRandomNumber(0,30);
  for(let i = 0; i <= maxComments; i++){
    const comment = getOneComment(i);
    comments.push(comment);
  }

  return comments;
}

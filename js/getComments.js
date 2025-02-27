import {getRandomNumber} from './getRandomNumber';

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Андрей',
  'Елизар',
  'Нафаня',
  'Марта',
  'Анисья',
  'Марк'
];

function getOneComment(i) {
  const oneComment = {};
  const minId = i * 10 + 1;
  const maxId = (i + 1) * 10;
  const avatarsCount = 6;
  const randomAvatarId = getRandomNumber(1,avatarsCount);
  const maxMessage = 2;
  const messagesCount = getRandomNumber(1,maxMessage);


  oneComment.id = getRandomNumber(minId, maxId);
  oneComment.avatar = `img/avatar-${randomAvatarId}.svg`;
  oneComment.message = '';
  for(let j = 1; j <= messagesCount; j++) {
    const messageIndex = getRandomNumber(0, MESSAGES.length - 1);
    oneComment.message += MESSAGES[messageIndex];
  }
  const nameIndex = getRandomNumber(0, NAMES.length - 1);
  oneComment.name = NAMES[nameIndex];

  return oneComment;
}

export function getComments () {
  const comments = [];
  const maxComments = 30;

  const currentComments = getRandomNumber(0,maxComments);
  for(let i = 0; i <= currentComments; i++){
    const comment = getOneComment(i);
    comments.push(comment);
  }

  return comments;
}

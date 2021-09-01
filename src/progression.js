import random from './randomNumber.js';

const progression = () => {
  const number = random();
  const diff = Math.floor(Math.random() * 10);
  const arr = [];
  let answer = '';
  for (let i = 1; i <= 10; i += 1) {
    if (i === diff) {
      answer = number + (diff * i);
      arr.push('..');
    } else {
      arr.push(number + (diff * i));
    }
  }
  return [arr.join(' '), answer.toString()];
};
export default progression;

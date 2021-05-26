import random from '../src/randomNumber.js';

const description = 'What is the result of the expression?';

const gameDetails = () => {
  const first = random();
  const second = random();
  const localRandom = Math.floor(Math.random() * 3);
  let question = '';
  let correctAnswer = '';
  switch (true) {
    case (localRandom === 0):
      question = `${first} - ${second}`;
      correctAnswer = first - second;
      break;
    case (localRandom === 1):
      question = `${first} * ${second}`;
      correctAnswer = first * second;
      break;
    default:
      question = `${first} + ${second}`;
      correctAnswer = first + second;
  }
  return [question, correctAnswer.toString()];
};

export default () => [gameDetails, description];

import random from '../src/randomNumber.js';

const description = 'What is the result of the expression?';
const Arr = ['+', '-', '*'];
const localRandom = Math.floor(Math.random() * 3);

const gameDetails = () => {
  const first = random();
  const second = random();
  let question = '';
  let correctAnswer = NaN;
  switch (Arr[localRandom]) {
    case Arr[localRandom] === '-':
      question = `${first} - ${second}`;
      correctAnswer = first - second;
      break;
    case Arr[localRandom] === '*':
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

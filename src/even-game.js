import random from './randomNumber.js';
import evenCheck from './evenCheck.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameDetails = () => {
  const number = random();
  const question = number.toString();
  const correctAnswer = evenCheck(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => [gameDetails, description];

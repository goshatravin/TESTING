import random from '../src/randomNumber.js';
import evenCheck from '../src/evenCheck.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameDetails = () => {
  const number = random();
  const question = number.toString();
  const correctAnswer = evenCheck(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => [gameDetails, description];

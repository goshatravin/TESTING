import prime from '../src/prime.js';
import random from '../src/randomNumber.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameDetails = () => {
  const number = random();
  const correctAnswer = prime(number) ? 'yes' : 'no';
  return [number, correctAnswer];
};
export default () => [gameDetails, description];

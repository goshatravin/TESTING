import getRandomNum from '../getRandomNum.js';

const description = 'What is the result of the expression?';

const getGameData = () => {
  const first = getRandomNum(5, 10);
  const second = getRandomNum(1, 5);
  const operators = ['+', '-', '*'];
  const randomOperator = getRandomNum(1, 3);
  let question = '';
  let correctAnswer = '';
  switch (operators[randomOperator]) {
    case ('-'):
      question = `${first} - ${second}`;
      correctAnswer = first - second;
      break;
    case ('*'):
      question = `${first} * ${second}`;
      correctAnswer = first * second;
      break;
    default:
      question = `${first} + ${second}`;
      correctAnswer = first + second;
  }
  return [question, correctAnswer.toString()];
};

export default () => [getGameData, description];

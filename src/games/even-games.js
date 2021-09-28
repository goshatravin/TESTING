import getRandomInt from '../randomNumber.js';

const isEven = (number) => {
    if (number % 2 === 0) {
        return true;
    }
    return false;
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameData = () => {
    const number = getRandomInt(1,10);
    const question = number.toString();
    const correctAnswer = isEven(number) ? 'yes' : 'no';
    return [question, correctAnswer];
};

export default () => [getGameData, description];

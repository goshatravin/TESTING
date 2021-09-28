import getRandomInt from '../randomNumber.js';

const prime = (a) => {
    const sqrt = Math.floor(Math.sqrt(a));
    for (let i = 2; i <= sqrt; i++) {
        if(a % i === 0) return false
    }
    return true
};


const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getGameData = () => {
    const number = getRandomInt(1,100);
    const correctAnswer = prime(number) ? 'yes' : 'no';
    return [number, correctAnswer];
};
export default () => [getGameData, description];

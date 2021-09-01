import random from './randomNumber.js';

const progression = () => {
    let number = random();
    let diff = Math.floor(Math.random() * 10);
    let arr = [];
    let answer = ''
    for(let i = 1 ; i <= 10 ; i ++  ) {
        if( i === diff ) {
            answer = number + (diff * i);
            arr.push('..');
        }else {
            arr.push(number + (diff * i));
        }
    }
    return [arr.join(' '), answer.toString()];
}
export default progression;

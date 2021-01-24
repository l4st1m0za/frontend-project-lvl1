import readlineSync from 'readline-sync';
const foo = () => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + userName)
    console.log(`Answer "yes" if the number is even, otherwise answer "no".`)


    const ranNum1 = Math.floor((Math.random() * 10) + Math.random() * 10)
    console.log('Question: ' + ranNum1)
    const firstAnsw = readlineSync.question('Your answer: ');

    if (ranNum1 % 2 !== 0 && firstAnsw === 'no' || ranNum1 % 2 === 0 && firstAnsw === 'yes') {
        console.log('Correct!')
    } else {
        console.log(`'${firstAnsw}' is wrong answer ;(. Correct answer was 'no'.`)
        return 'Let\'s try again, ' + userName
    };


    const ranNum2 = Math.floor((Math.random() * 10) + Math.random() * 10)
    console.log('Question: ' + ranNum2)
    const secondAnsw = readlineSync.question('Your answer: ');

    if (ranNum2 % 2 !== 0 && secondAnsw === 'no' || ranNum2 % 2 === 0 && secondAnsw === 'yes') {
        console.log('Correct!')
    } else {
        console.log(`'${secondAnsw}' is wrong answer ;(. Correct answer was 'no'.`)
        return 'Let\'s try again, ' + userName
    };


    const ranNum3 = Math.floor((Math.random() * 10) + Math.random() * 10)
    console.log('Question: ' + ranNum3)
    const thirdAnsw = readlineSync.question('Your answer: ');

    if (ranNum3 % 2 !== 0 && thirdAnsw === 'no' || ranNum3 % 2 === 0 && thirdAnsw === 'yes') {
        console.log('Correct!')
        return `Congratulations, ` + userName + '!'

    } else {
        console.log(`'${thirdAnsw}' is wrong answer ;(. Correct answer was 'no'.`)
        return 'Let\'s try again, ' + userName
    };

};

export default foo;
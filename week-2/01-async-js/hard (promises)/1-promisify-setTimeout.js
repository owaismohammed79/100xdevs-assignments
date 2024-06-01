/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    let m = n * 1000;
    return new Promise(resolve => setTimeout(resolve, m));
}
let n = 5;
wait(n).then(() => console.log(`You waited for ${n} seconds!`))

module.exports = wait;

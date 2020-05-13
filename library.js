function outer() {
    let counter = 0;
    return function inner() {
        counter++;
        return counter;
    }
}
const callOuter = outer();
callOuter();
callOuter();
callOuter();

const callOuterToo = outer();
callOuterToo();
console.log(callOuterToo());
//Closure 
document.body.innerText = "Hello Body"
function outer() {
    const name = "NodeJS";
    function displayName() {
        console.log(name);
    }
    return displayName;
}

function makeAdder(x) {
    return function (y) {
        return x + y;
    }
}
const adder5 = makeAdder(5);
const adder10 = makeAdder(10);

function makeSize(size) {
    return function () {
        document.body.style.fontSize =  `${size}px`
    }
}
const size10 = makeSize(10);
const size12 = makeSize(12)
const size14 = makeSize(14)
const size16 = makeSize(16)
const size20 = makeSize(20)
const size30 = makeSize(30)


function makeCounter(){
    let privateCounter = 0;
    function changeBy(value) {
        privateCounter += value // p = p + v
    }
    return {
        increment() {
            changeBy(1);
        },
        decrement(){
            changeBy(-1);
        },
        value() {
            return privateCounter;
        }
    }
}
const counter = makeCounter();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.value());
counter.decrement();
console.log(counter.value());
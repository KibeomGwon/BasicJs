/**
 * 
 * function -> 함수
 */

var test = function(num) {
    return num * 10 / 2 % 3;
}

console.log(test(2));

//y is default parameter
function multiply(x, y =10){
    return x * y;
}

console.log(multiply(10));

/**
 * Arrow 함수
 */

const multiply2 = (param1, param2)=>{
    return param1 * param2;
}

console.log(multiply2(1,3));

// multiply2와 같음
const multiply3 = (x,y) => x * y;

console.log(multiply3(2,5));

const multiply4 = x => x * 2;

console.log(multiply4(2));


// x를 받는 함수가 y를 매개변수로 받는 함수를 반환 하고, y를 매개변수로 받는 함수는 z를 매개변수로 받는 함수를 반환한다. 
//그러면 이 함수가 비로소 시작이 된다.
const multiply5 = x => y => z => `x:${x} y:${y} z:${z}`;
console.log(multiply5(1)(2)(3));

//위 함수의 구조 : multiply5와 같다.
function multiply6(x){
    return y=>{
        return z => {
            return `x:${x} y:${y} z:${z}`;
        }
    }
}

console.log(multiply6(1)(2)(3));

//arguments : 모든 인자들을 나타낸다.
const multiplyThree = function(x,y,z){
    console.log(arguments);
    return x * y * z;
}

console.log(multiplyThree(2,4,6));

const multiplyAll = function(...arguments){
    return Object.values(arguments).reduce((a,b)=> a * b, 1);
}

console.log(multiplyAll(3,4,5,6,7,8,9,10));

//immediately invoked function
(function(x,y){
    console.log(x * y);
})(4,5)

console.log(typeof multiply);
console.log(multiply instanceof Object);
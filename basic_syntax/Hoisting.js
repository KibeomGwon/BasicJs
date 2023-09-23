/**
 * Hoisting
 * 
 * 모든 변수의 선언문이 코드 최상단에 이동하는 것 같은 현상을 말한다.
 */

console.log("hello");
console.log("world");


console.log(name); //출력값 : undefined 
var name = '코드팩토리';
console.log(name);

//hoisting이 나타난다.
//defined가 되었지만, initialization이 되지않아서 오류가 난다.
console.log(yuJin);
let yuJin = '안유진';


//hoisting이 나타난다.
//defined가 되었지만, initialization이 되지않아서 오류가 난다.
console.log(hojin);
const hojin = '호진';

/**
 * 타입 변환
 * 
 * Typecoversion
 * 
 * 1) 암묵적
 * 2) 명시적
 */

let age = 32;
let stringAge = age.toString();

console.log(typeof stringAge, stringAge);


let test = age +"";

console.log(typeof test, test);

console.log('98' + 2);
console.log('98' * 2);
console.log('98' - 2);


console.log(typeof true.toString());

console.log(typeof parseInt('1'));
console.log(typeof parseFloat('0.99'), parseFloat('0.99'));


/**
 * Boolean 타입으로의 변환
 */

// 문자열 안에 문자가 있으면 true, 없으면 false : 값이 있으면 ture, 없으면 false
console.log(!'x');
console.log(!!'x');
console.log(!!'');

// 1은 true, 0은 false
console.log(!!1);

console.log(!!'false');
console.log(!!undefined);

// object는 값이 있든 없든 무조건 true이다. 
console.log(!!{});

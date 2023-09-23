var name = 'codefactory';
console.log(name);

let ive = '아이브';
console.log(ive);

/**
 * 여섯개의 primtive type과
 * 한개의 오브젝트 타입이있다.
 * 
 * 1)Number
 * 2)String
 * 3)Boolean
 * 4)undefined
 * 5)null
 * 6)Symbol
 * 
 * 7)Object (객체)
 *   function
 *   object
 *   array
 */

console.log(Infinity);

console.log(typeof name);

let init = null;
console.log(init); // null로 출력
console.log(typeof init); // 타입이 Object로 됨 => 개발자가 오류라고 인정함. but 바꾸지 않는 이유는 레거시 코드들이 너무 많기 때문에 선뜻 바꾸지 못함

/**
 * Symbol
 * 
 * 유일무일한 값을 생성할 때 사용한다.
 * Symbol을 호출해서 사용한다.
 */

const test1 = '1';
const test2 = '1';

console.log(test1 === test2);

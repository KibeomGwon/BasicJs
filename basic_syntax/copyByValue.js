/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 * 
 * 1) 기본적으로 모든 primitive 값은 copy by value다.
 * 2) 객체는 copy by reference다.
 */

let original = '안녕하세요';
let clone = original;

console.log(original);
console.log(clone);

clone += ' 안유진 입니다.';
console.log('---------------');
console.log(original);
console.log(clone);

let originalObj = {
    name : '안유진',
    group : '아이브',
};

let cloneObj = originalObj;

console.log(originalObj);
console.log(cloneObj);
console.log('---------------');

originalObj['group'] = 'codeFactory';

console.log(originalObj);
console.log(cloneObj);

console.log('---------------');

console.log(originalObj === cloneObj);

// copy by value는 값 자체를 복사해서 할당된 주소에 값을 저장한다. : primitive는 copy by value를 한다.
// copy by reference는 변수의 값이 주소값이다. object는 copy by reference이다.

const yuJin1 = {
    name : '안유진',
    group : '아이브'
};

const yuJin2 = yuJin1

const yuJin3 = {
    name : '안유진',
    group : '아이브'
};

console.log(yuJin1 === yuJin2);
console.log(yuJin1 === yuJin3);
console.log(yuJin2 === yuJin3);

//spread operator

const yuJin4 = {
    ...yuJin3
}

console.log(yuJin4);
console.log(yuJin4 === yuJin1);
console.log(yuJin4 == yuJin1);

const yuJin5 = {
    year : 2000,
    ...yuJin3
};

console.log(yuJin5);

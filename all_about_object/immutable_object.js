/**
 * Immutable Object
 */

const yuJin = {
    name : '안유진',
    year : 2003,
    get age(){
        return new Date().getFullYear() - this.year;
    },
    set age(age){
        this.year = new Date().getFullYear() - age;
    },
}

console.log(yuJin);
console.log(Object.isExtensible(yuJin));

yuJin.position = 'vocal';
console.log(yuJin);

// 값 추가를 못하게 함 
Object.preventExtensions(yuJin);
console.log(Object.isExtensible(yuJin));

yuJin.groupName = '아이브';
console.log(yuJin);


delete yuJin['position'];
console.log(yuJin);

/**
 * Seal : 봉인한다.
 */

const yuJin2 = {
    name : '안유진',
    year : 2003,
    get age(){
        return new Date().getFullYear() - this.year;
    },
    set age(age){
        this.year = new Date().getFullYear() - age;
    },
}

console.log(yuJin2);
// 봉인이 되어 있냐?
console.log(Object.isSealed(yuJin2));


//봉인
Object.seal(yuJin2);

yuJin2.groupName = '아이브';
console.log(yuJin2);

//preventExtension하면 추가는 불가능, 삭제는 가능
// seal을 하면 추가,삭제 둘 다 불가능, 프로퍼티 값은 변경가능
delete yuJin2.year;
console.log(yuJin2);


yuJin2.name = '코드팩토리';
console.log(yuJin2);

//seal을 하는 것은 configuration을 false, writable을 true로 놔둔 것과 똑같음.

/**
 * Freeze
 * 
 * 읽기 외에 모든 것을 불가능하게 만든다.
 */


const yuJin3 = {
    name : '안유진',
    year : 2003,
    get age(){
        return new Date().getFullYear() - this.year;
    },
    set age(age){
        this.year = new Date().getFullYear() - age;
    },
}

console.log(Object.isFrozen(yuJin3));
Object.freeze(yuJin3);

yuJin3.groupName = '아이브';
console.log(yuJin3);

delete yuJin3.name;
console.log(yuJin3);

// Object.defineProperty(yuJin3,'name');

console.log(Object.getOwnPropertyDescriptor(yuJin3,'name'));

console.log(Object.getOwnPropertyDescriptors(yuJin3));


const yuJin4 = {
    name : '안유진',
    year : 2003,
    wonYoung : {
        name : '장원영',
        year : 2002,
    },
    get age(){
        return new Date().getFullYear() - this.year;
    },
    set age(age){
        this.year = new Date().getFullYear() - age;
    },
}

Object.freeze(yuJin4);
console.log(Object.isFrozen(yuJin4));
console.log(Object.isFrozen(yuJin4['wonYoung']));

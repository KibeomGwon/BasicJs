/**
 * property_attribute
 * 
 * 1) 데이터 프로퍼티 - 키와 값으로 형성된 실질적 값을 갖고있는 프로퍼티
 * 2) 엑세서 프로퍼티 - 자체적으로 값을 갖고 있지 않지만 다른 값을 가져오거나 설정할 때
 *                  호출되는 함수로 구성된 프러퍼티 예를 들면 getter, setter
 */

const yuJin = {
    name : '안유진',
    year : 2003
}

console.log(Object.getOwnPropertyDescriptor(yuJin,'name'));
console.log(Object.getOwnPropertyDescriptor(yuJin,'year'));
/**
 * 객체의 프로퍼티 즉 프로퍼티들이 name, year가 있을 때 value에 name을 입력하면 name에 관한 설정값을 의미한다.(내가 이해한 것)
 * 1) Value - 실제 프로퍼티의 값
 * 2) writable = 값을 수정 할 수 있는지 여부. false로 설정하면 프로퍼티 값을
 *               수정할 수 없다.
 * 3) enumerable - 열거가 가능한지 여부이다. for ... in 룹 등을 사용할 수 있으면 true를 반환한다.
 * 4) configurable - 프로퍼티 어트리뷰트의 재정의가 가능한지 여부를 판단한다.
 *                   false 일 경우 프로퍼티 삭제나 어트리뷰트 변경이 금지된다.
 *                   단, writable이 true인 경우 값 변경과 writable을 변경하는 건 가능하다.
 */

console.log(Object.getOwnPropertyDescriptors(yuJin));

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
console.log('=======================')
console.log(yuJin2);
console.log(yuJin2.age);


yuJin2.age = 32;
console.log(yuJin2.age);
console.log(yuJin2.year);


console.log(Object.getOwnPropertyDescriptor(yuJin2, 'age'));



Object.defineProperty(yuJin2,'height',{
    value :172,
    writable : true,
    enumerable : true,
    configurable : true,
})

console.log(yuJin2);
console.log('---------------------------')
Object.defineProperty(yuJin2,'height',{
    value :172,
    writable : false,
    enumerable : true,
    configurable : true,
})

yuJin2.height = 180;
console.log(yuJin2);


/**
 * enumerable
 */

console.log(Object.keys(yuJin2));

Object.defineProperty(yuJin2,'year',{
    enumerable : false
});

console.log(Object.keys(yuJin2));
console.log('---------------------------')

for(let key in yuJin2){
    console.log(key);
}

/**
 * Configurable
 */

Object.defineProperty(yuJin2,'height',{
    writable : true,
    configurable : false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2,'height'));

Object.defineProperty(yuJin2,'height', {
    value : 180,
})

console.log(Object.getOwnPropertyDescriptor(yuJin2,'height'));

// configuration이 false, writable이 true인 경우에는 writable을 false로 바꾸는 것이 가능
// 하지만 writable을 true로 바꾸는 것은 불가능
// configuration이 false, writable이 true인 경우에는 프로퍼티의 값을 변경할 수 있음.

/**
 * This
 * 
 * Js는 Lexical Scope를 사용하기 때문에 함수의 상위 스코프가
 * 정의 시점에 평가된다. 하지만 this 키워드는 바인딩이 객체가 생성되는 시점에 결정된다.
 */

const testFunction = function(){
    return this;
}

// console.log(testFunction());
console.log(testFunction() === global);

const yuJin = {
    name : '안유진',
    year : 2003,
    sayHello : function(){
        return `안녕하세요 저는 ${this.name}입니다.`;
    },
}

console.log(yuJin.sayHello());

function Person(name, year){
    this.name = name;
    this.year = year;
    this.sayHello = function(){
        return `안녕하세요 저는 ${this.name}입니다.`;
    };
}

const yuJin2 = new Person('안유진', 2003);
console.log(yuJin2.sayHello());

// 클래스의 바로 하위의 영역에 있는 프로퍼티가 아니면
// this 키워드는 글로벌을 가리킨다.
// 밑의 메소드 dance2()는 클래스 바로 하위의 메소드가 이니기 때문에
// this가 global을 가리킨다.
// undefined를 출력한다.
Person.prototype.dance = function(){
    function dance2(){
        return `${this.name}이 춤을 춥니다.`;
    }
    return dance2();
}

console.log(yuJin2.dance());

/**
 * this 키워드가 어떤 걸 가르키냐는 세가지만 기억하면 된다.
 * 
 * 1) 일반 함수 호출할 땐 this가 최상위 객체 (global 또는 window)를 가리킨다.
 * 2) 메소드를 호출할 땐 호출된 객체를 가리킨다.
 * 3) new 키워드를 사용해서 객체를 생성했을땐 객체를 가리킨다.
 */

/**
 * 원하는 this로 호출하는 방법
 * 1) apply()
 * 2) call()
 * 3) bind()
 */

function returnName(){
    return this.name;
}

// global mapping
console.log(returnName());

const yuJin3 = {
    name : '안유진',
}
// call keyword
console.log(returnName.call(yuJin3));
// apply keyword
console.log(returnName.apply(yuJin3));
/**
 * 1) call -> 컴마를 기반으로 argument를 순서대로 넘겨주고
 * 2) apply ->  argument를 리스트로 입력해야한다.
 */

function multiply(x,y,z){
    return `${this.name} / 결과값 : ${x * y * z}`;
}

console.log(multiply.call(yuJin3,3,4,5));
console.log(multiply.apply(yuJin3,[3,4,5]));

/**
 * bind()
 * this를 binding을 해놓고 함수를 실행시키지 않음.
 */

const laterFunc = multiply.bind(yuJin3,3,4,5);
// 출력값: [Function: bound multiply]
console.log(laterFunc);
console.log(laterFunc());


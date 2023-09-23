/**
 * prototype
 */

// prototype은 function으로 구현된 객체에서만 있다.
const testObject ={};


//__proto__ 모든 객체에 존재하는 프로퍼티다. => __proto__는 객체의 상속 체인을 의미한다.
// class 강의에서 배울때 상속에서 부모 클래스에 해당되는 값이다.
console.log(testObject.__proto__);

function IdolModel(name,year){
    this.name = name;
    this.year = year;
}

console.log(IdolModel.prototype);

// console.dir(IdolModel.prototype, {
//     showHidden :true,
// });

// 같은 메모리 주소를 참고하고 있다.
// circular reference
console.log(IdolModel.prototype.constructor === IdolModel);

console.log(IdolModel.prototype.constructor.prototype === IdolModel.prototype);

const yuJin = new IdolModel('안유진', 2003);

console.log(yuJin.__proto__);
console.log(yuJin.__proto__ === IdolModel.prototype);

console.log(testObject.__proto__ === Object.prototype);
console.log(yuJin.__proto__ === Object.prototype);


//

console.log(IdolModel.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(IdolModel.prototype.__proto__ === Object.prototype);


console.log(yuJin.toString());
console.log(Object.prototype.toString());

function IdolModel2(name, year){
    this.name = name;
    this.year = year;

    this.sayHello = function(){
        return `${this.name}이 인사를 합니다.`;
    }
}

const yuJin2 = new IdolModel2('안유진', 2003);
const wonYoung2= new IdolModel2('장원영', 2004);

console.log(yuJin2.sayHello());
console.log(wonYoung2.sayHello());
//false
// 각각의 고유 값을 갖는다.
console.log("===========================")
console.log(yuJin2.sayHello === wonYoung2.sayHello);

// sayHello는 유진이 갖고있는 고유의 메소드다.
// 상속을 받은 것이 아니다.
console.log(yuJin2.hasOwnProperty('sayHello'));


function IdolModel3(name,year){
    this.name = name;
    this.year = year;
}

IdolModel3.prototype.sayHello = function(){
    return `${this.name}이 인사를 합니다.`;
}

const yuJin3 = new IdolModel3('안유진', 2003);
const wonYoung3 = new IdolModel3('장원영', 2004);

console.log(yuJin3.sayHello());
console.log(wonYoung3.sayHello());

console.log(yuJin3.sayHello === wonYoung3.sayHello);

// 상속을 받은 값이어서 false
console.log(yuJin3.hasOwnProperty('sayHello'));


IdolModel3.sayStaticHello = function(){
    return `안녕하세요 저는 static method 입니다.`;
}

console.log(IdolModel3.sayStaticHello());

/**
 * Overriding
 */

function IdolModel4(name,year){
    this.name = name;
    this.year = year;

    this.sayHello = function(){
        return `안녕하세요. 저는 인스턴스 메소드입니다!`;
    }
}

IdolModel4.prototype.sayHello = function(){
    return `안녕하세여 저는 prototype method입니다.`;
}

const yuJin4 = new IdolModel4('안유진', 2003);
//프로퍼티 셰도잉 - class에서 override
console.log(yuJin4.sayHello());


/**
 * getPrototypeof, setPrototpyeof
 * 
 * 인스턴스의 __proto__변경 vs 함수의 prototype 변경
 */

function IdolModel(name,year){
    this.name = name;
    this.year = year;
}

IdolModel.prototype.sayHello = function(){
    return `${this.name}인사를 합니다.`;
}

function FemaleIdolModel(name,year){
    this.name = name;
    this.year = year;

    this.dance = function(){
        return `${this.name}이 춤을 춥니다.`;
    }

}

FemaleIdolModel.prototype.singing = function(){
    return `${this.name}이 노래를 부릅니다.`;
}

const gaEul = new IdolModel('가을', 2004);
const ray = new FemaleIdolModel('레이', 2004);

console.log(gaEul.__proto__);
console.log(gaEul.__proto__ === IdolModel.prototype);
console.log(Object.getPrototypeOf(gaEul)===IdolModel.prototype);


console.log(gaEul.sayHello());
console.log(ray.dance());

Object.setPrototypeOf(ray, IdolModel.prototype);
console.log(ray.sayHello());
console.log(ray.dance());
// console.log(ray.singing());
console.log(ray.constructor === FemaleIdolModel);
console.log(ray.constructor === IdolModel);


// FemaleIdolModel과 ray객체의 prototype의 연결이 끊어지고, ray객체의  __proto__는 IdolModel의 prototype을 가리킨다.

FemaleIdolModel.prototype = IdolModel.prototype;

const eSeo = new FemaleIdolModel('이서', 2007);
console.log(Object.getPrototypeOf(eSeo) === FemaleIdolModel.prototype);
console.log(eSeo.sayHello());



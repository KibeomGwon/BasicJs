/**
 * Class Keyword
 */

class IdolModel{
    // 멤버 변수를 선언안해도 된다.
    // name;
    // year;
    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    sayName(){
        return `안녕하세요. 저는 ${this.name}입니다`;
    }
}

const yuJin = new IdolModel('안유진',2003);
console.log(yuJin);

console.log(yuJin.name);
console.log(yuJin.sayName());

console.log(typeof yuJin);
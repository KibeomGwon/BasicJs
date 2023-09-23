/**
 * All about objects
 * 
 * 객체를 선언할 때 사용할 수 있는 방법
 * 1) object를 생성해서 객체 생성 - 기본기 {}
 * 2) class를 인스턴스화해서 생성 - Classdhk OOP
 * 3) function을 사용해서 객체 생성
 */

const yuJin = {
    name : '유진',
    year : 2003,
}

class IdolModel{
    name;
    year;
    constructor(name,year){
        this.name = name;
        this.year = year;
    }
}


// this키워드를 사용하면 함수도 객체로 될 수 있다. : 생성자 함수 constructor function
function IdolFunction(name, year){
    this.name = name;
    this.year = year;
}

// 객체를 반환한다.
const gaEul = new IdolFunction('가을',2002);
console.log(gaEul);



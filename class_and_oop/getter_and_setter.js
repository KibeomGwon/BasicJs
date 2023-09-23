/**
 * Getter and Setter
 */

class IdolModel{
    constructor(name,year){
        this.name = name;
        this.year = year;
    }
    /**
     * 1) 데이터를 가공해서 새로운 데이터를 반환할때
     * 2) private한 값을 반환할 때
     */

    // getter
    get nameAndYear(){
        return `${this.name} - ${this.year}`;
    }

    // setter : param을 무조건 한개만 받음
    set setName(name){
        this.name = name;
    }
}

let yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
console.log(yuJin.nameAndYear);

//setter를 쓰는 방법
yuJin.setName = '장원영';
console.log(yuJin);

class IdolModel2{
    // #은 private를 설정할 때 사용, #은 ex7이다.
    #name;
    year;
    
    constructor(name,year){
        this.#name = name;
        this.year = year;
    }

    get name(){
        return this.#name;
    }

    set name(name){
        this.#name = name;
    }
}

const yuJin2 = new IdolModel2('안유진', 2003);
console.log(yuJin2);
console.log(yuJin2.name);

yuJin2.name = '코드팩토리';
console.log(yuJin2.name);

//immutable programming할 때 setter는 안 쓴다.
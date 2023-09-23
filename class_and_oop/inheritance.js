/**
 * inheritance (상속)
 */

class IdolModel{
    name;
    year;
    constructor(name,year){
        this.name = name;
        this.year = year;
    }
    get name(){
        return this.name;
    }
    getName(){
        return this.name;
    }
}

class FemaleIdolModel extends IdolModel{
    gender;
    constructor(name,year,gender){
        super(name,year);
        this.gender = gender;
    }
    dance(){
        return `여자 아이들이 춤을 춥니다.`;
    }
    getName(){
        return super.getName();
    }
}

class MaleIdolModel extends IdolModel{
    gender;
    constructor(name,year,gender){
        super(name, year)
        this.gender = gender;
    }
    sing(){
        return `남자 아이들이 춤을 춥니다`;
    }
}

const yuJin = new FemaleIdolModel('안유진', 2003, '여성');
console.log(yuJin);
console.log(yuJin.getName());

const jiMin = new MaleIdolModel('지민', 2000, '남성');
console.log(jiMin);
console.log(jiMin.getName());

console.log(yuJin instanceof IdolModel);

const yuJin2 = new FemaleIdolModel();

// /**
//  * static은 클래스에 귀속된다.
//  */

// class IdolModel{
//     name;
//     year;
//     static groupName = '아이브';
//     constructor(name,year){
//         this.name = name;
//         this.year = year;
//     }

//     static returnGroupName(){
//         return '아이브';
//     }
// }

// const yuJin = new IdolModel('안유진', 2003);
// console.log(yuJin);
// console.log(IdolModel.groupName);
// console.log(IdolModel.returnGroupName());

class IdolModel{
    name;
    year;

    constructor(name,year){
        this.name = name;
        this.year = year;
    }

    static fromObject(object){
        return new IdolModel(
            object.name,
            object.year,
        );
    }

    static fromList(list){
        return new IdolModel(
            list[0],
            list[1]
        )
    }
}

const yuJin2 = IdolModel.fromObject({
    name: '안유진',
    year: 2003,
});

const wonYoung = IdolModel.fromList([
    'wonYoung',
    2003,
])

console.log(yuJin2);
console.log(wonYoung);
//static 함수로 객체를 생성하는 식의 방법이 많다.
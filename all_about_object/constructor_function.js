/**
 * Using function to create objects
 */

function IdolModel(name,year){
    //console.log(this);
    console.log(new.target);
    this.name = name;
    this.year = year;
    this.dance = function(){
        return `${this.name}이 춤을 춥니다.`;
    }
    // return은 권장 안 한다.
}

const yuJin = new IdolModel('안유진',2003);
// console.log(yuJin);
// console.log(yuJin.dance());

//undefined without keyword "new" => 이렇게 되면 this를 global으로 선언돼 버린다.
const yuJin2 = IdolModel('안유진',2003);
// console.log(yuJin2);

// 이렇게 되니까 사용하지마라.
// console.log(global.name);

console.log('====================');

// new keyword 입력이 안됐을 때를 처리하고자 if문을 넣음.
function IdolModel2(name,year){
    if(!new.target){
        return new IdolModel2(name,year);
    }

    this.name= name;
    this.year = year;
    this.dance = function(){
        return `${this.name}이 춤을 춥니다.`;
    }
}

const yuJin3 = new IdolModel('안유진',2003);
const yuJin4 = new IdolModel('안유진',2003);


/**
 * arrow function
 */

// arrow 함수에서는 constructor function이 안된다.
// const IdolModelArrow = (name,year) => {
//     this.name = name;
//     this.year = year;
// }

// const yuJin5 = new IdolModelArrow('안유진',2003);
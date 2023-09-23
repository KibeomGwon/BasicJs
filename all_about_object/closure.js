/**
 * Closure
 * 
 * A closure is the combination of a function and the lexical enviroment
 * within which that function was declared
 * "클로저는 어떤 함수와 해당 함수가 선언된 렉시컬 환경의 조합이다."
 * 
 * "상위 함수보다 하위 함수가 더 오래 살아있는 겨우를 closure라고 한다."
 */

function getNum(){
    var number = 5;

    function innerGetNumber(){
        return number;
    }

    return innerGetNumber();
}

// console.log(getNum());

function getNumber(){
    var number = 5;

    function innerGetNumber(){
        return number;
    }

    return innerGetNumber;
}

const runner = getNumber();

console.log(runner);
console.log(runner());

/**
 * data caching
 */

function cacheFunction(){
    // 아래 계산은 매우 오래걸린다 가정 했을 때
    var number = 10 * 10;
    // closure을 사용하면 위의 계산을 한번만 하고 
    // 계산으로 나온 값을 innerCacheFunction이 호출될 때마다 전달을 한다.
    // 이러면 만약 오래 걸리는 계산을 한번만 해서 자원을 아낄 수 있다.

    function innerCacheFunction(newNumber){
        return number * newNumber;
    }

    return innerCacheFunction;
}

console.log(cacheFunction(10));

const runner2= cacheFunction();
console.log(runner2(10));
console.log(runner2(20));

function cacheFunction2(){
    var number = 99;

    function incremet(){
        number++;
        return number;
    }

    return incremet;
}

const runner3 = cacheFunction2();
const runner4 = cacheFunction2();
// 이렇게 선언을 하고 cacheFunction2안에 있는 변수에 접근하여 값을 바꾸면 
// 그 값 변형이 계쏙해서 반영된다.
// 객체를 만든 것 같네.
console.log(runner3());
console.log(runner3());

/**
 * 3) 정보은닉
 */

function Idol(name, year){
    this.name = name;

    var _year = year;

    this.sayNameAndYear = function(){
        return `안녕하세요. 저는 ${this.name}입니다. \n${_year}년에 태어났습니다.`;
    }
}

const yuJin = new Idol('안유진', 2003);
console.log(yuJin.sayNameAndYear());

console.log(yuJin.name);
//undefined
console.log(yuJin._year);


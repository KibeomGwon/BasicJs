/**
 * Scope
 */

var num1 =20;

function levelOne(){
    console.log(num1);
}

// levelOne();

function levelOne(){
    var num1 = 40;
    console.log(num1);
}

// levelOne();

// console.log(num1);

function levelOne(){
    var num1 = 40;

    function levelTwo(){
        var num2 = 90;

        console.log(`levelTwo num2 : ${num2}`);
        console.log(`levelOne num1 : ${num1}`);
    }
    levelTwo();
    console.log(`levelOne num1 : ${num1}`);
}

levelOne();


//var keyword는 function에서만 새로운 스코프가 생성되고, 나머지는 global 스코프 그대로 가져간다.

console.log('+++++++++++++++++++++++++++++++');

//let, const keyword는 block level scope에서도 새롭게 만들 수 있다.
//block level ( for loop, if )

let i = 999;

for(let i = 0; i < 10; i++){
    console.log(i);
}

console.log(i);

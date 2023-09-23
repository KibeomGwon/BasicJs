/**
 * 
 */

let iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서'
];

console.log(iveMembers);

//push() : 추가한 다음의 길이를 반환
let pu = iveMembers.push('코드팩토리');
console.log(iveMembers);
console.log(pu);

console.log(iveMembers.pop());
console.log(iveMembers);

//첫번째 값을 삭제 및 반환
console.log(iveMembers.shift());
console.log(iveMembers);

//unshift : 맨 처음에 추가후 길이를 반환
console.log(iveMembers.unshift('안유진'));  
console.log(iveMembers);


console.log(iveMembers.splice(0,3));
console.log(iveMembers);

iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서'
];

// 새로운 리스트를 만들어서 반환한다.
//원래 리스트는 변경되지 않는다.
console.log(iveMembers);
console.log(iveMembers.concat('코드팩토리'));

//slice()
//원래 리스트는 변경되지 않는다.
console.log(iveMembers.slice(0, 3));
console.log(iveMembers);

//spread operator
let iveMembers2 = [
    ...iveMembers, // 리스트를 펼쳐서 입력한다.
];

console.log(iveMembers2);

let iveMembers3 = [
    iveMembers // 리스트 자체를 넣어버린다.
]; 
console.log(iveMembers3);

//join() : string type으로 리스트를 바꾼다. 리스트를 콤마로 묶어서 결과값을 반환
console.log(typeof iveMembers.join(), iveMembers.join());

//sort()
//오름차순
iveMembers.sort()
console.log(iveMembers);

console.log(iveMembers.reverse());


let numbers =[
    1,9,7,4,9,3
]

console.log(numbers);
numbers.sort();
console.log(numbers);

numbers =[
    1,9,7,4,9,3
]
console.log(numbers);
//a,b를 비교했을 때
//1) a를 b보다 나중에 정렬하려면 (뒤에 두려면)0보다 큰 숫자를 반환
//2)  ''      먼저 정렬하려면 (앞에 두려면) 0보다 작은 숫자를 반환
//3) 원래 순서를 그대로 두려면 0을 반환
numbers.sort((a,b)=>{
    return a > b ? 1 : -1;
});
console.log(numbers);

numbers =[
    1,9,7,4,9,3
]
numbers.sort((a,b)=> a >b ? -1 : 1);
console.log(numbers);

//map() return new array;
console.log('--------------------');
console.log(iveMembers.map( x => x));
console.log(iveMembers.map( x => `아이브 : ${x}`));

console.log(iveMembers.map(x=>{
    if(x==='안유진'){
        return `아이브 : ${x}`
    } else return x;
}));

console.log(iveMembers);
// filter()
numbers = [1,8,7,4,5];
console.log(numbers.filter(x=> x % 2 === 0));
console.log(numbers.filter(x=> true));

//find()
console.log(numbers.find(x => x % 2===0));
console.log(numbers.findIndex(x => x % 2 === 0));

//reduce()

console.log(numbers.reduce((p,n) => p + n ,0));

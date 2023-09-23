/**
 * Object / 객체
 */

let yuJin = {
    name : '안유진',
    group : 'ive',
    //method
    dance : function(){
        return `${this.name}이 춤을 춥니다.`;
    }
}

console.log(yuJin.dance());

const key = 'name';
console.log(yuJin[key]);

const nameKey = 'name';
const nameValue = '안유진';

const groupKey = 'group';
const groupValue = '아이브';

const yuJin2 = {
    [nameKey] : nameValue,
    [groupKey] : groupValue,
    dance : function() {
        return `${this.name}이 춤을 춥니다.`;
    }
}

console.log(yuJin2);
console.log(yuJin2.dance());

yuJin2['group'] = 'codeFactory';
console.log(yuJin2);

yuJin2['englishName'] = 'An yuJin';
console.log(yuJin2);

delete yuJin2['englishName'];
console.log(yuJin2);

/**
 * 객체의 특징
 * 
 * 1) const로 선언할 경우 객체 자체를 변경 할 수는 없다.
 * 2) 객체 안의 프로퍼티나 메서드는 변경 할 수 있다.
 */
const wonYoung = {
    name : '장원영',
    group : '아이브',
}

console.log(wonYoung);
// wonYoung = {} // 오류가 남 1번 특징

wonYoung['group'] = '코드팩토리';
console.log(wonYoung);

/**
 * 모든 키값 가져오기
 */

console.log(Object.keys(wonYoung));

/**
 * 모든 벨류 값 다 가져오기
 */

console.log(Object.values(wonYoung));

const name = '안유진';

const yuJin3 = {
    //name : name, // 밑이랑 똑같다.
    name,
}

console.log(yuJin3);
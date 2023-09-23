/**
 * async_theory
 * js는 single thread언어이다.
 * 
 */

/**
 * sync function
 */
// function longWork(){
//     const now = new Date();

//     /**
//      * milliseconds since epoch
//      * 1970년도 1월 1일 부터 지금 코드가 실행되는 순간까지의 시간을
//      * 밀리초로 반환한다.
//      */

//     const milliseconds = now.getTime();
//     const afterTwoSeconds = milliseconds + 2 * 1000;

//     while(new Date().getTime() < afterTwoSeconds){

//     }

//     console.log('complete');

// }

// console.log('Hello');
// longWork();
// console.log('World');

function longWork(){
    setTimeout(()=>{
        console.log('complete');
    },2000);
}

console.log('Hello');
longWork();
console.log('World');
/**
 * event loop를 통해 비동기 처리된 함수가 task Queue/ Event Queue에 들어감.
 * Queue에서 처리가 완료되고 다시 call stack에 들어감.
 */


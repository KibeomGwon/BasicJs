/**
 * callback
 */
function waitAndRun(){
    setTimeout(()=>{
        console.log('complete');
    },2000);
}

// waitAndRun();

function waitAndRun2(){
    setTimeout(()=>{
        console.log('1 callback end');

        setTimeout(()=>{
            console.log('2 callback end');
            setTimeout(()=>{
                console.log('3 callback end');
            },2000);
        },2000);
    },2000);
}

// waitAndRun2();


const timeoutPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('end');
    },2000);
});

// //res에 Promise객체의 resolve함수의 인자를 받아온다.
// timeoutPromise.then((res)=>{
//     console.log('----then----');
//     console.log(res);
// });

const getPromise = (seconds) => new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('complete');
    },seconds*1000);
});

// getPromise(1).
// then((res)=>{
//     console.log('----first then----');
//     console.log(res);
//     return getPromise(1);
// }).
// then((res)=>{
//     console.log('---second then---');
//     console.log(res);
//     return getPromise(3);
// }).
// then((res)=>{
//     console.log('---third then---');
//     console.log(res);

//     return getPromise(2);
// }).
// then((res)=>{
//     console.log('---fourth then---');
//     console.log(res);
// });

const getPromise2 = (seconds) => new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject('error');
    },seconds*1000);
});

// getPromise2(1).
// then((res)=>{
//     console.log('----first then----');
//     console.log(res);
//     return getPromise2(1);
// }).catch((res)=>{
//     console.log('---first catch---');
//     console.log(res);
// }).finally(()=>{
//     console.log('---finally---');
// });

//list
// 가장 느린 객체를 기준으로 then이 호출돼 리스트를 반환한다.
// 실행은 동시에 된다.
Promise.all([
    getPromise(1),
    getPromise(4),
    getPromise(1),
]).then((res)=>{
    console.log(res);
});
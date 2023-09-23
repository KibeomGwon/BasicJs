/**
 * Async / Await
 */

const getPromise = (seconds) => new Promise((resolve,reject)=> {
    setTimeout(()=>{
        resolve('complete');
    },seconds*1000);
});

async function runner(){
    // await keyword는 promise에만 사용할 수 있다.
    try{
        const result1 = await getPromise(1);
        console.log(result1);
        const result2 = await getPromise(2);
        console.log(result2);
    } catch(e){

    } 
}

runner();
console.log('exec end');
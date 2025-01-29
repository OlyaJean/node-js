
function delayFn(time){
    return new Promise((resolve)=>setTimeout(resolve,time)
        
    )
};

console.log('Lecture starts');
delayFn(2000).then(()=> console.log('The promise was resolved after 2 seconds'));
console.log("The End");


function divideFn(arg1,arg2){
    return new Promise((resolve,reject)=>{
        if(arg2 === 0){
            reject("Can not divide by 2");
            return
        }else{
            resolve(arg1/arg2)
        }
    })
}

divideFn(10,0).then((result)=>console.log(result)).catch(error=>console.log(error,'err'))
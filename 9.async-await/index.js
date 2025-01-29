function delayFn(time){
    return new Promise((resolve)=> setTimeout(resolve,time))
}

async function delayedGreet(name){
   await delayFn(2000);
  console.log(name)
}

delayedGreet('Olga')

async function division(arg1,arg2){

    try{
        if(arg2 === 0)
            throw new Error('Can not divide by 0');
            return arg1/arg2
        
    }catch(error){ console.error('error', error);
        return null
    }
}

async function mainFn(){
    console.log(await division(20,3));
    console.log(await division(20,0));
}

mainFn();
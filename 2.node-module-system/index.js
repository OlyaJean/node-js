//module.exports -> export
//require -> import 



const firstModule = require('./first-module')

console.log(firstModule.add(5,6))

try{
    console.log('trying to divide by 0')
    console.log(firstModule.divide(0,0))
}catch(error){
    console.log('caught an error', error.message)
}
const {readFile, writeFile, readFileSync, writeFileSync, read, write} = require('fs')
const path = require('path')


//Task 1
console.log('This is Synchronous')

setTimeout(() => {
    console.log("This is Asynchronous");
}, "2000");

console.log('End of Script')//synchronous


//Task 2
console.log('Interval started')//synchronous
//Asynchronous
const interval = setInterval(() => {
    console.log('Repeating Message...')
}, 3000)
//Asynchronous
setTimeout(function(){
    clearInterval(interval);
},10000)


//Task 3
//Asynchronous
readFile(path.join(__dirname, 'input.txt'), 'utf8', (err,result)=>{
    if(err) throw err
    console.log("\n Async : " + result)
})
//Synchronous
const content = readFileSync(path.join(__dirname, 'input.txt'), 'utf8')//this reads input.txt
console.log("\n Sync : " + content)

//Task 4

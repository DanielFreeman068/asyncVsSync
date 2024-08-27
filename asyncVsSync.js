const {readFile, readFileSync} = require('fs')
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
const data = readFileSync(path.join(__dirname, 'data.txt'), 'utf8')//this reads input.txt
console.log(data)//synchronous

setTimeout(() => {
    console.log("Starting async operation...");//asynchronous
    //asynchronously reads and logs asyncData.txt
    readFile(path.join(__dirname, 'asyncData.txt'), 'utf8', (err,result)=>{
        if(err) throw err
        console.log("\n Async : " + result)
    })
}, "2000");
console.log("Script Complete")//synchronous

//Task 5
console.log("Countdown initiated")//Synchronous
let counter = 0;
// extension to delay
for(let i = 0; i < 1000000; i+=1.001){
    i--
}
//asynchronously logs 10-1 incrementing by one second
const interval2 = setInterval(() => {
        console.log(10 - counter);
        counter++;
        //if statement asynchronously logging "Liftoff!"
        if(counter == 10) setTimeout(function liftoff() {
            clearInterval(interval2);
            console.log("Liftoff!")
        }, 1000)
}, 1000)
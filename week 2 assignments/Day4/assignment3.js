//Rest parameter
function findSum(a,...b){
    console.log(a,b)
}

findSum(10,20,30,40);

//Exercise 3: Create a function that receives any number of args as arguments and return their sum using REST parameter

function sum(a,...b){
    let sum=a;
    for(let element of b){
        sum+=element
    }   
    return sum;
    
}
let result=sum(10,20,30,40,50,60)
console.log(result)

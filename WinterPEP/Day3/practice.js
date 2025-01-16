// question 1
function calculatediscount(price,discount=10){
    
    return price-discount
}
res=calculatediscount(100)
console.log(res)




// question 2
function mergeArrays(a,b){
    c=[...a,...b]
    return c
}
console.log(mergeArrays([1,2,3],[4,5,6]))




// question 3
function logArguments(...a){
    return a
}
console.log(logArguments(1,2,3,"hello",4,5))




// question 4
function createMessage(a,...b){
const message = []
for(let i=0;i<b.length;i++){
    message.push(a+" , "+b[i])
}
return message
}
console.log(createMessage("hello","a","b","c"))





// question 5
function sum(a,b,c){
    return a+b+c
}
numbers=[1,2,3]
console.log(sum(...numbers))




// question 6
function createUserProfile(user,age=25,country="unknown"){
    return{
        user: user,
        age: age,
        country: country,

    };
}
console.log(createUserProfile("Harshit"))
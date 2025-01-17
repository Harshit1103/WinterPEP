
// question 1
let ask = (question,yes,no)=>{
    
    if(confirm(question)) yes();
    else no();
}

ask(
    "do you agree",
    () =>{alert("you agreed");},
    ()=> {alert("you cancelled the execution");}
);


// question 2
const materials = ["hydrogen","helium","lithium","beryllium"];
console.log(materials.map(material) =>material.length);
// this will give syntax error


// question 3
let square =(a)=>{
    return a*a;
}
console.log(square(4));



// question 4
const arr = [1,2,3]
const squares = arr.map(a=>
    a*a)
    console.log(squares)


// question 5
const reverseString = str =>{
    let reversed = ''
    for(let i=str.length-1;i>=0;i--){
        reversed+=str[i]
    }
    return reversed
}
console.log(reverseString("hello"))


// question 6
const chainable =(value) =>({
    
        add: (num)=>chainable(value+num),
        multiply: (num)=>chainable(value*num),
        getValue: ()=>value
    });


const result = chainable(5).add(3).multiply(2).getValue()
console.log(result)
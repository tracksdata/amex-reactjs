console.log('-- Data types --');

emp={
    id:1024,
    name:'Praveen',
    salary:7674444.55
}
var e1=new Object();
e1.empId=1200;
e1.empName='James';
e1.salary=84784;

//----------------------------------------------

// Q1 : Which one is better? why?


// JS Blocks and Cont

var a=100;
var a=200;
var a=300;

// Q2: What is the issue with var?

var i=100;
{
    var i=300;
    console.log('Block i: '+i);
}
console.log('After Block i: '+i);

// Q3: What is the issues with block scopes? why?

//------------------------------------------

// Final Q: Issues with var. What is the alternate of var?

const b=100;
{
const b=200;
console.log('Const inside block: '+b);
}
console.log('Const outside block: '+b);

// Q: Why Separate scopes for cont in blocks ? and how they are created


// Functions
//--------------------

/*

Q1: Function Types
Q2: Types of Functional Programming
Q3: Scopes in Fuynctions
Q4: Return type of a Function
Q5: Parameters / Arguments in Functions
Q6: Can We Overload / override functions in JS?

*/

//-----------------------------------






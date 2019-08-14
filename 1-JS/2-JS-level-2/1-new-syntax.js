"use strict"
/*
ES6
---------
New Syntax
------------
1. String interpolation
2. let & const keywords with block-scope
3. function qith default and rest params
4. new OO coding with class syntax
5. Obj literal enhancements
6. De-Structuring
7. Spread Operators
8. symbol type, iteratable object ans for-of loop
9. Arrow-functions
10. Generator functions

*/

//----------------------------
// 10. Generator Functions
//----------------------------

function normalFun(){
    console.log('statement-1');
    console.log('statement-2');
    console.log('statement-3');
}
function normalFun1(){
    console.log('statement-11');
    console.log('statement-22');
    console.log('statement-33');
}
//normalFun();
//normalFun1();

function* generatorFunction(){
    console.log('statrted');
    console.log('statement-1');
    yield 10; 
    console.log('statement-2 with value '+v1);
    yield 20;
    console.log('statement-3');
    yield 30;
}
 //const it=generatorFunction();

 function* foo(){
    let x= yield  "Please give me a value of x";
    console.log('X: '+x);
    let y= yield  "Please give me a value of y";
    console.log('Y: '+y);
    let z= yield  "Please give me a value of x";
    console.log('X: '+z);
    return x+y+z;
 }

 //let it=foo();

 //-------------------------------------------------------
 
 // Arraw Functiuons 

 // function name equals to ()

 //function test(){
   //  console.log('--- testing....');
     
 //}

 // or with arrow functions

 let f1=()=> console.log('testing... 123');

 let f2=()=>{
     console.log('s1');
     console.log('s2');
     console.log('s3');    
 }

 let f3=(name)=>{
    console.log('hello '+name);   
 }

 let f4=(name,age)=>{
     console.log('hello '+name+" and age is "+age); 
 }

 let sum=(a,b,c)=>{
    return a+b+c;
 }

 let sum1=(a,b,c)=> a+b+c;

//-----------------------------------

function getFood1(){
    let promise=new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('idly');
        }, 3000);
        
    }); 
    return promise;
}

function getFood2(){
    let promise=new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('sambar');
        }, 4000);
        
    }); 
    return promise;
}

 
function* eat(){
    console.log('start eating');
    let food1=yield getFood1();
    console.log(food1); 
    let food2=yield getFood2();
    console.log(food2);
    console.log('yummy '+food1+" + "+food2);
    
}
//let it=eat();

//it.next()
//.value.then(food1=>{
 //   it.next(food1)
 //   .value
   // .then(food2=>it.next(food2))
//})

//------------------------------------------


// why/where we need arrow functions, how it diferent fri normal functions

//let nums=[1,3,5,7,9,2,4,6,8,10];

//nums.sort(function(x,y){
  //  return x-y;
//})

// or 
//nums.sort((x,y)=>{return x-y});

// or

//nums.sort((x,y)=>x-y);

// use-2 to capture 'this' operator


let tnr={
    name:'Praveen',
    doTeach:  function(){
        console.log(this.name+' is teaching java script');

       // let askQues=function(q){
          //  console.log(this.name+' is answering '+q);
      //  }
      

      let askQues=q=>console.log(this.name+ ' is answering '+q);
      
        console.log('treaching ends');
        return askQues;
    }
};

//let askQues=tnr.doTeach();
//askQues("Q1");

//-------------------

// symbol

// Unique  and immutable value, used as objects identofier property.

//Eg.

let menu=['idly','vada','poori'];

//for(let item of menu){
  //  console.log(item); 
//xs}

menu.push('My Biryani');




let newMenu=[...menu,'biryani'];

//let m1=newMenu[0];
//let m2=newMenu[1];
//let m3=newMenu[2];
//let m4=newMenu[3];

let [m1,m2,m3]=menu;

// Spread operator

let nums=[10,20,30,70,40,20,5];
//console.log(nums[0],nums[1],nums[2]);
//console.log(...nums);
let max=Math.max(...nums);

let arr1=[1,2,3];
let arr2=[7,8,9];

let arr3=[...arr1,4,5,6,...arr2];

let o1={x:1,y:2};
let o2={z:3,x:10};

let o3={...o1,...o2};









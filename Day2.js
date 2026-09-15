//callback function 
// function hello (n1,n2,callback){
// console.log("Hello World");
// callback();
// }

// let a=10;
// let b=20;
// console.log(hello(a,b,sayHi));
// console.log(hello(a,b,sayHello()))
// console.log(hello(a,b,function demo(){
//     console.log("callback is calling")
// }));
// function sayHi(){
//     console.log("callback function");

// }
// sayHi();
// function sayHello(){
// console.log("this is 2nd callback func")
// }
// sayHello();

//Promises
// const promiseOne=new Promise((resolve,reject)=>{
// console.log("successful data passed.....")
// });
// promiseOne.then((result)=>{
//      console.log(result);
     
// }).catch(()=>{
// console.log(error);
// })
new Promise(function(resolve,reject){
setTimeout(function(){
     let msg=true;
     if(!msg){
          resolve("user : ASynsh task")
     }else{
          reject("ERROR :undefined data...")
     }
     console.log("asynchoronous function");
    

     
},1000)
console.log("asynch task 2");

}).then().catch()


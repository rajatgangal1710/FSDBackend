//Asynchronous js using asyncawait
// async function test(){
//     await console,log("2:message");
//     await console.log("3:message");
//     console.log("4:message");
// }
// console.log("1:message");

// test()
// console.log("5:message");
//create promises that resole with Assigment submitted 
//and print using then(),reject with submission failed
let assignment = new Promise((resolve, reject) => {
    let isSubmitted = true; // Change to false to test rejection

    if (isSubmitted) {
        resolve("Assignment submitted");
    } else {
        reject("Submission failed");
    }
});
//async function that display user data
//event
//EventEmitter is class in which we have to use emit("event emit parameter")
//program 1 and 2
//emit() on()
const EventEmitter=require("events");
const vent=new EventEmitter();
// event.on("greet",()=>{
//     console.log("this is event emitter");
// })
event.once("greet",()=>{
    console.log("event trigger only one time")
})
event.emit("greet");
event.emit("greet");
event.emit("greet");
event.emit("greet");
//Program 1:create custom EventEmitter that trigger "greet" or "exit"

const EventEmitter = require("events");

const myEmitter = new EventEmitter();

myEmitter.on("greet", (name) => {
    console.log(`Hello, ${name}!`);
});

myEmitter.on("exit", () => {
    console.log("Program exited.");
});

myEmitter.emit("greet", "Rajat");
myEmitter.emit("exit");
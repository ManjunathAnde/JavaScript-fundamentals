const name = "Manju";     // can't reassign
let age = 20;              // can reassign
age = 21;                  // works

// const doesn't freeze the VALUE, the value is mutable.
const arr = [1, 2, 3];
arr.push(4);  
console.log(arr)
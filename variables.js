const name = "Manju";     // can't reassign
let age = 20;              // can reassign
age = 21;                  // works

// const doesn't freeze the VALUE, the value is mutable.
const arr = [1, 2, 3];
arr.push(4);  
console.log(arr)

//Pre increment and Post increment
let x = 5;
let a = ++x;   // x becomes 6 first, a = 6 --- PRE INCREMENT
let y = 5;
let b = y++;   // b = 5 (old value assigned), then y becomes 6  -- POST INCREMENT

let arr2 = ["a", "b", "c"];
let i = 0;
console.log(arr2[i++]); // prints "a" first as initial i value is zero, then i becomes 1 , hence operation then increment is Post Increment


// Functions and scope

// let/const are scoped to the nearest { } block, not just the function
function outer() {
  let count = 0;
  {
    let count = 100;   // separate variable, SHADOWS the outer one
    console.log(count); // 100 -- The scope of this 'let' variable is restricted to the inner block only 
  }
  console.log(count);   // 0, outer untouched
}

// var leaks values and does not respect scope. Hence it is avoided in functions. 


// Type conversion

console.log("5" + 3);  // "53" + means concatenation if a string is involved
console.log("5" - 3);  // 2    -> - forces both sides to numbers, no string meaning

// == AND ===

console.log(1 == "1");   // true because it converts types before comparing (coercion)
console.log(1 === "1");  // false, stricter comparison, no conversion, different types = not equal

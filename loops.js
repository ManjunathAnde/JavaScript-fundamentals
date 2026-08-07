
// for: use when we know how many times / iterating a known range
// start value of j =0 ; post increment j until j remains less than 5
for (let j = 0; j < 5; j++) {
  console.log(j);
}

// while: use when we don't know how many iterations ahead of time
let k = 0;
while (k < 5) {
  console.log(k);
  k++;
}
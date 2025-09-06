

console.log("Printing the numbers from 1 to 100 with the interval of 10");

for (let i=1;i<=100;i=i+9)
{
console.log(i);
}


console.log("Printing the number from 10 to 1");
for (let i=10;i>=1;i=i-1)
{
console.log(i);
}

console.log("printing the multiple of 2 until 10");

for (let i=1;i<=10;i=i+1)
{
    if (i%2 === 0) 
    {
        console.log(i);
    }
}

console.log("Printing the number from 100 to 1 with the difference of 10");

for (let i=100;i>=1;i=i-10)
{
console.log(i);
}

/*write a function to print the eligble, Not eligble voters separately from the list
of array [18,17,16,15,10,8,7,9,35,40,86,75,0]. Note: print invalid if the voter age is 0.*/

console.log("Printing the eligible, inEligble ages for voting in Array");
var eligible = [];
var inEligible = [];
var invalid = [];


function printVoters(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 1) {
      invalid.push(arr[i]);
    } else if (arr[i]  < 18) {
      inEligible.push(arr[i]);
    } else {
      eligible.push(arr[i]);
    }
  }
  return {
    EligbleAge: eligible,
    InEligbleAge : inEligible,
    invalidAge: invalid
  }
}
console.log(printVoters([18,17,16,15,10,8,7,9,35,40,86,75,0]));

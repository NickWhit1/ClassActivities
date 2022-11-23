// Named Parameters
// write a function that takes two named parameters:
// print each named parameter,
// then return the parameters added together

function functionWithTwoParams(x=1, y=2, ...z) { // Changes to parameter from questions below have been implemented
  console.log(x);
  console.log(y);
  console.log(z);
  return x + y;
}

// invoke the function and pass in two numbers
console.log(functionWithTwoParams(5, 10));
// invoke the function and pass in more than two numbers
console.log(functionWithTwoParams(5, 10, 15, 20));
// invoke the function and pass in only one number
console.log(functionWithTwoParams(5));

// change the function to set default values for the parameters
  //changed parameters to be (x=1, y=2)


// again, invoke the function and pass in only one number
console.log(functionWithTwoParams(5));
// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator
  // changed parameters to be (x=1, y=2, ...z)

// again, invoke the function and pass in more than two numbers
console.log(
  functionWithTwoParams(5, 10, 10, 15, 20, 25, 1, 2, 4, 4, 5, 10, 102)
);

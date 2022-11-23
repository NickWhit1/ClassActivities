let x = 5;
let y = [1, 2, 30];
let z = {
  id: 100,
  name: "myName",
  loggedIn: false
};
// reassign x, y, and z to FALSY values
let x = 0;
let y = false;
let z = {
  id: 100,
  name: "myName",
  loggedIn: false
};
// print x, y, and z

// const a = "name";
// const b = [];
// const c = {};

// try to reassign a, b, and c to FALSY values
a = "Nick";
b = "city";
c = "obj";

b[0] = "Nick"
// using BRACKET NOTATION, assign a value to b

// using DOT NOTATION, assign a PROPERTY to c
c.age = 21;
// using DOT NOTATION, assign a METHOD to c

c.method = function(message) {console.log(message)};

b.push('Alex');

c.town = 'Alton';

// using BRACKET NOTATION, call the method in c

const word = "method"

c[word]('Hello');

// print a, b, and c
console.log(a);
console.log(b);
console.log(c);

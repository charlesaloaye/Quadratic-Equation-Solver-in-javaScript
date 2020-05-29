// a program to solve quadratic equation

var a = 2; // put your own values here
var b = 5; // put your own values here
var c = -3; // put your own values here

// checking if the giving equation is quadratic

if(a > 0 ){
  // is a quadratic equation
  console.log('This is a Quadratic Equation');

  var d = (Math.pow(b, 2) - (4 * a * c));

  // or var d = ((b * b) - (4 * a * c));

 if(d == 0){
  // One Solution
  console.log('This Equation has one solution');

}

else if(d < 0){
  // Complex Solutions
  console.log('This Equation hashas Complex solution');

}
else {
  // Two Solutions
  console.log('This Equation has has Two solution');

}
// this will output  value of X1
  var X1 = ((-b) + Math.sqrt(d)) / (2 * a );

// this will output value of X2
  var X2 = ((-b) - Math.sqrt(d)) / (2 * a );

  console.log('x2 = '+ X1) //display 0.5 

  console.log('x1 = '+ X2) //display -3

} 

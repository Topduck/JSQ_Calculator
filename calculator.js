// $(document).ready(function() {
//   // Your code here...
//   //we need 4 event listeners one for numbers, operators, equals, and clear
//   //create on click event triggered function, that must take numbers only for first input
//   //set variables for each input and operator
// });

const setState = () => {
  numholder = "0";
  num1 = null;
  num2 = null;
  opholder = "";
};
const setDisplay = () => {
  document.getElementById("first-number").innerHTML = numholder;
};
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let operators = ["power", "divide", "equals", "minus", "plus"];
document.addEventListener("click", e => {
  console.log(e.target.value);
  if (nums.indexOf(parseInt(e.target.textContent)) !== -1) {
    console.log("nums function here");
    numholder = numholder += e.target.textContent;
  }
  if (operators.indexOf(e.target.value) !== -1) {
    console.log("reached operator function");
    opholder = e.target.textContent;
    console.log(opholer);
  }
  if (e.target.classList.contains("clear")) {
    setState();
  }
  if (e.target.classList.contains("equal")) {
    opholder = e.target.textContent;
  }

  if (e.target.value === "clear") {
    setState();
  }
});
setState();

// document.getElementsByClassName('number').addEventListener("click", (e) => {
//     if(numholder == "0"){
//         numholder = e.target.value
//     }
//     else {
//         numholder = numholder += e.target.value
//     }
//     setDisplay()
//     console.log(e.target.value)
// })

// document.getElementsByClassName('operator').addEventListener("click", e => {
//     if(num1 == null){
//         num1 = parseInt(numholder);
//         numholder = "0"
//         // Operator stuff here
//     }
//     // else if(num1 !== nul && num2 == null){
//     //     // num2 stuff here
//     // }
//     console.log('operator ' + e.target.value)
// })

// document.getElementsByClassName('equal').addEventListener("click", e => {
//     console.log('operator ' + e.target.value)
// })

// document.getElementsByClassName('').addEventListener("click", e => {
//     setState()
// })
// document.getElementById('first-number').innerHTML = numholder
// setState()

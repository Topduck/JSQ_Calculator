$(document).ready(function() {

    // Your code here...
    //we need 4 event listeners one for numbers, operators, equals, and clear
    //create on click event triggered function, that must take numbers only for first input
    //set variables for each input and operator 
    

    
    
    });
    
const setState = () => {
    let numholder = "0"
    let num1 = null;
    let num2 = null;
    let opholder = ''
}
const setDisplay = () => {
    document.getElementById('first-number').innerHTML = numholder
}


    document.getElementsByClassName('number').addEventListener("click", (e) => {
        if(numholder == "0"){
            numholder = e.target.value
        }
        else {
            numholder = numholder += e.target.value
        } 
        setDisplay()
        console.log(e.target.value)
    })

    document.getElementsByClassName('operator').addEventListener("click", e => {
        if(num1 == null){
            num1 = parseInt(numholder);
            numholder = "0"
            // Operator stuff here
        }
        // else if(num1 !== nul && num2 == null){
        //     // num2 stuff here
        // }
        console.log('operator ' + e.target.value)
    })

    document.getElementsByClassName('equal').addEventListener("click", e => {
        console.log('operator ' + e.target.value)
    })
    
    document.getElementsByClassName('').addEventListener("click", e => {
        setState()
    })
    document.getElementById('first-number').innerHTML = numholder
    setState()
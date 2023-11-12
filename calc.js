var number1 = "";
var number2 = "";

var previousResult = ""; // Initialize the variable to store the previous result
var operatorPressed = false; // Track if an operator has been pressed


var equalSign =  document.getElementById("equal")

var isNumber1Ready = false;

function forNumber(n) {
    if (!isNumber1Ready) {
        number1 += n
        document.getElementById("displayNum").textContent = number1;
    } else{
        number2 += n;
        document.getElementById("displayNum").textContent = number2;
    }
}

function sum(n1,n2) {
    return n1 + n2
}
function subtract(n1,n2) {
    return n1 - n2
}
function multiply(n1,n2) {
    return n1 * n2
}
function divide(n1,n2) {
    return n1 / n2
}


function calc(num1,num2,operation) {
    num2 = Number(num2)
    result = operation(num1,num2)
    document.getElementById("displayNum").textContent = result


    // Update the previous result only if an operator has been pressed
    if (operatorPressed) {
        previousResult = result;
        operatorPressed = false
    }

    // Clear number1 and number2 for the next input
    number1 = ""
    number2 = ""
    // Set isNumber1Ready to false
    isNumber1Ready = false
}

function clearDisplay() {
        number1 = ""
        number2 = ""
        isNumber1Ready = false
        document.getElementById("displayNum").textContent = "0"; // Set the display to "0"
}

function deleteLast() {
     if (!isNumber1Ready && number1.length > 0) {
        // Remove the last character from number1
        number1 = number1.slice(0, -1);
        document.getElementById("displayNum").textContent = number1;
    } else if (!isNumber1Ready && number2.length > 0) {
        // If number1 is ready and number2 has characters, remove from number2
        number2 = number2.slice(0, -1);
        document.getElementById("displayNum").textContent = number2;
    } else if (!isNumber1Ready && number1.length === 0) {
        // If both numbers are empty and trying to delete, display "0"
        document.getElementById("displayNum").textContent = "0";
    }

}

function opSum() {
    number1 = Number(number1)
    isNumber1Ready = true
    equalSign.setAttribute("onclick","calc(number1,number2,sum)")
}
function opSub() {
    number1 = Number(number1)
    isNumber1Ready = true
    equalSign.setAttribute("onclick","calc(number1,number2,subtract)")
}
function opMul() {
    number1 = Number(number1)
    isNumber1Ready = true
    equalSign.setAttribute("onclick","calc(number1,number2,multiply)")
}
function opDiv() {
    number1 = Number(number1)
    isNumber1Ready = true
    equalSign.setAttribute("onclick","calc(number1,number2,divide)")
}
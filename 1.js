// Create a program where user inputs 2 int values in 2 input boxes and you display the greatest of them on the alert box, when a button is clicked.

let num1 = prompt("Enter the first integer:");
let num2 = prompt("Enter the second integer:");

function myfunction() {
if (num1 > num2) {
        window.alert(num1 + " is the greatest number");
    }
    else if (num1 < num2) {
        window.alert(num2 + " is the greatest number");
    }
}
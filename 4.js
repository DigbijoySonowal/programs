// Finding whether a number is prime number or not.
let num = prompt("Enter a number to check");
let temp = 0;
for (let i = 2; i <= num / 2; i++){
    if (num % i == 0) {
        temp++;
        break;
    }
}
if (temp == 0 && num != 1) {
    window.alert(num + " is a Prime Number.");
}
else {
    window.alert(num + " is not a Prime Number");
}
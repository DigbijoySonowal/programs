// Create a program where user enters a number in a text box and you should display its table(upto 10) on a div.The table should be created on the button click event.Also prevent user to enter string on the text box(give appropriate error on alert box when input is string).

function myfunction() {
    let table;
    let value = document.getElementById("num").value;
    if (value % 1 === 0) {
        for (let i = 1; i <= 10; i++){
            table += value + "*" + i + "=" + value * i + "<br>";
            document.getElementById("demo").innerHTML = table;
        }
    }
    else {   
        window.alert("Please enter an integer value");  
    }
}

//Giving undefined error. Can't Understand Why?
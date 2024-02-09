// Create a small form for Job Application.It should have 5 fields – name, age, education, address and expected salary.These 5 fields should have HTML controls where user enter his / her information, there should be a button which on clicking shown the user information on a div controls.

function myfunction() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const education = document.getElementById("education").value;
    const address = document.getElementById("address").value;
    const salary = document.getElementById("salary").value;
    document.getElementById("demo").innerHTML = "Name: " + name + "<br>" + "Age: " + age + "<br>" + "Education: " + education + "<br>" + "Address: " + address + "<br>" + "Salary: " + salary;
}
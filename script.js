// Salary slider 

function rangeSlide(value) {
    document.getElementById('rangeValue').innerHTML = value;
}

// Form validation using regex

function validateForm(name, pass) {

    let nameRegex = /^[A-Z]{1}[a-z]{2,}$/;
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+-={}?|:;,.]).{8,32}$/;

    if (!nameRegex.test(name)) {
        alert("Invalid Name");
        return false;
    }

    if (!passwordRegex.test(pass)) {
        alert("Invalid Password");
        return false;
    }

    return true;

}

// Alert message

document.getElementById('myForm').addEventListener("submit", function(event){
    event.preventDefault();

    let name = document.getElementById('name').value;
    let pass = document.getElementById('pass').value;

    if (validateForm(name, pass)) {
        alert(`Form Submitted Successfully!\n\nName: ${name}\n\nPassword: ${pass}`);
    }

});
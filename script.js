// Salary slider 

function rangeSlide(value) {
    document.getElementById('rangeValue').innerHTML = value;
}

// Form validation using regex

function validateForm(name) {

    let nameRegex = /^[A-Z]{1}[a-z]{2,}$/;

    if(!nameRegex.test(name)) {
        alert("Invalid Name");
        return false;
    }

    return true;

}

// Alert message

document.getElementById('myForm').addEventListener("submit", function(event){
    event.preventDefault();

    let name = document.getElementById('name').value;

    if (validateForm(name)) {
        alert(`Form Submitted Successfully!\n\nName: ${name}`);
    }

});
class FormModel {
    // name password email mobile

    get name() { return this._name; }

    set name(name) {
        let nameRE = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
        if (nameRE.test(name))
            this._name = name;
        else throw 'Invalid Name';
    }

    get email() { return this._email }

    set email(email) {
        let emailRE = RegExp('^[0-9a-zA-Z]+[+._-]{0,1}[0-9a-zA-Z]+[@][a-zA-Z0-9]+[.][a-zA-Z]{2,3}([.][a-zA-Z]{2,3}){0,1}$');
        if (emailRE.test(email))
            this._email = email;
        else throw 'Invalid Email';
    }

    get phone() { return this._phone }

    set phone(phone) {
        let phoneRE = RegExp('^((\\+91)|91|0)?[789][0-9]{9}$');
        if (phoneRE.test(phone))
            this._phone = phone;
        else throw 'Invalid Phone Number';
    }

}

// Salary slider 

const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');

output.textContent = salary.value;
salary.addEventListener('input', function() {
    output.textContent = salary.value;
});

window.addEventListener('DOMContentLoaded', (event) => {

    // validate name

    const textError = document.querySelector('.name-error');
    const name = document.querySelector('#name');

    name.addEventListener('input', function() {
        if (name.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try {
            (new FormModel()).name = name.value;
            textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
        }
    });

    // validate email

    const emailError = document.querySelector('.email-error');
    const email = document.querySelector('#email');

    email.addEventListener('input', function() {
        if (email.value.length == 0) {
            emailError.textContent = "";
            return;
        }
        try {
            (new FormModel()).email = email.value;
            emailError.textContent = "";
        } catch (e) {
            emailError.textContent = e;
        }
    });

    // Validate phone

    const phoneError = document.querySelector('.phone-error');
    const phone = document.querySelector('#phone');

    phone.addEventListener('input', function() {
        if(phone.value.length == 0) {
            phoneError.textContent = "";
            return;
        }
        try {
            (new FormModel()).phone = phone.value;
            phoneError.textContent = "";
        } catch (e) {
            phoneError.textContent = e;
        }
    });

});
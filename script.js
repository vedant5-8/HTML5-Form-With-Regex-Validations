class FormModel {
    // name password email mobile

    get name() { return this._name; }

    set name(name) {
        let nameRE = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
        if (nameRE.test(name))
            this._name = name;
        else throw 'Invalid name';
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

    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');

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

});
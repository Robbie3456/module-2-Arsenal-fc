// seperate script as these id's dont exist on index.html

const form = document.getElementById('form')
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const subject = document.getElementById('subject');
const ans_check = document.getElementById('answer_check');

form.addEventListener('submit', (form_submit) => {
    let errors = [];

    // make sure the form isn't empty
    if (fname.value === '' || fname.value == null ) {
        errors.push('First name is required.');
    }
    ['fname error']
    if (lname.value === '' || lname.value == null ) {
        errors.push('Last name is required.');
    }
    ['fname error', 'lname error']
    if (subject.value === '' || subject.value == null ) {
        errors.push('Subject is required.');
    }
    ['fname error', 'lname error', 'SUBJECT ERROR']
    if (errors.length > 0) {

        // form won't be submitted without this info
        form_submit.preventDefault();

        // list all the errors and make text red.
        ans_check.innerText = errors.join('\n');
        ans_check.style = 'color:red;';
    } else {
        ans_check.innerText = '';
    }
})


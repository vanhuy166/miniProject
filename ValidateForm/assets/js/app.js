var username = document.querySelector('#username');
var email = document.querySelector('#email');
var password = document.querySelector('#password');
var confirmPass = document.querySelector('#confirm-password');
var form = document.querySelector('form');
var btnSubmit = document.querySelector('.btn-submit');

function showError(input, errorText) {
    let parent = input.parentElement;
    let small = parent.querySelector('small');

    parent.classList.add('error');
    small.innerText = errorText;
}

function showSuccess(listInput) {
    listInput.forEach(input => {
        let parent = input.parentElement;
        let small = parent.querySelector('small');

        parent.classList.remove('error');
        small.innerText = '';
    });
}

function checkEmptyError(listInput) {
    let isEmpty = false;
    listInput.forEach(input => {
        if (!input.value.trim()) {
            isEmpty = true;
            showError(input, "This is required");
        }
    });

    return isEmpty;
}

function checkEmail(input) {
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (!regexEmail.test(input.value.trim())) {
        showError(input, "Email invalid");
    }

    return regexEmail.test(input.value.trim());
}

function checkLengthError(input, min, max) {
    if (input.value.trim().length < min) {
        showError(input, `Phải có ít nhất ${min} ký tự`);
        return true;
    }
    if (input.value.trim().length > max) {
        showError(input, `Phải có nhiều nhất ${max} ký tự`);
        return true;
    }
    return false;
}

function checkConfirmPassError(input, confirm) {
    if (input.value !== confirm.value) {
        showError(confirm, "Mật khẩu không khớp");
        return true;
    } else {
        return false;
    }
}


form.addEventListener('submit', function(event) {
    event.preventDefault();

    showSuccess([username, email, password, confirmPass]);

    let isUsernameLengthError = checkLengthError(username, 3, 15);
    let isPasswordLengthError = checkLengthError(password, 3, 8);
    let isConfirmPass = checkConfirmPassError(password, confirmPass);
    let isEmail = checkEmail(email);
    let isEmpty = checkEmptyError([username, email, password, confirmPass]);

    if (isUsernameLengthError || isPasswordLengthError || isEmail || isEmpty || isConfirmPass) {
        console.log("Error");
    } else {
        console.log("Success");
    }
});


btnSubmit.addEventListener('blur', function(e) {
    e.preventDefault();
    showSuccess([username, email, password, confirmPass]);
});
class ErrorsOutput {
    static completeErrorFields(action_type, errors_array) {
        let error_fields = Array(errors_array.length);
        for(let i = 0; i < errors_array.length; i++) {
            error_fields[i] = document.querySelector(`.auth-${action_type}-errorMessage_${errors_array[i].error_field}`);
            ErrorsOutput.clearErrorField(action_type, errors_array[i].error_field);
            error_fields[i].textContent = errors_array[i].error_message;
            error_fields[i].style.display = '';
        }
    }

    static clearErrorField(window, field) {
        let error_field = document.querySelector(`.auth-${window}-errorMessage_${field}`);
        error_field.textContent = '';
        error_field.style.display = 'none'; 
    }

    static clearLoginErrorFields() {
        let fields = ['login', 'password'];
        fields.forEach(field => {ErrorsOutput.clearErrorField('login', field);});
    }

    static clearRegistrationErrorFields() {
        let fields = ['login', 'email', 'name', 'password', 'password_repetition'];
        fields.forEach(field => {ErrorsOutput.clearErrorField('registration' ,field);});
    }
}

export {ErrorsOutput};

document.addEventListener('click', function() {
    let login__button = document.querySelector('.auth-login__button');
    let registration__button = document.querySelector('.auth-registration__button');
    login__button.addEventListener('click', ErrorsOutput.clearLoginErrorFields);
    registration__button.addEventListener('click', ErrorsOutput.clearRegistrationErrorFields);
});
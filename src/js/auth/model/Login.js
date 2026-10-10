class Login {
    constructor(errors) {
        
    }

    showError(field, message) {
        let place_for_message = document.querySelector(`.auth-login-errorMessage_${field}`);
        place_for_message.textContent = message;
    }
}
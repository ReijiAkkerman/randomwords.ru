class Registration {
    showError(field, message) {
        let place_for_message = document.querySelector(`.auth-registration-errorMessage_${field}`);
        place_for_message.textContent = message;
    }
}
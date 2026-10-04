class Registration {
    sendData(event) {
        event.preventDefault();
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "/auth/reg");
        xhr.responseType = 'text';
        let form = document.querySelector('.auth-registration');
        let formData = new FormData(form);
        xhr.send(formData);
        xhr.onloadend = () => {
            alert(xhr.responseText);
            console.log(xhr.responseText);
        };
    }
}

var registration = new Registration();

document.addEventListener("DOMContentLoaded", function() {
    let registration_button = document.querySelector(".auth-registration__button");
    registration_button.addEventListener("click", registration.sendData);
});
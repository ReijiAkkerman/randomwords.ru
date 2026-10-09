class Login {
    sendData(event) {
        event.preventDefault();
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "/auth/log");
        xhr.responseType = 'text';
        let form = document.querySelector('.auth-login');
        let formData = new FormData(form);
        xhr.send(formData);
        xhr.onloadend = () => {
            alert(xhr.responseText);
            console.log(xhr.responseText);
        };
    }
}

var login = new Login();

document.addEventListener("DOMContentLoaded", function() {
    let login_button = document.querySelector(".auth-login__button");
    login_button.addEventListener("click", login.sendData);
});
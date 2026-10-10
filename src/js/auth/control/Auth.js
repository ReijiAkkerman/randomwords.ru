import {ErrorsOutput} from '/src/js/auth/model/ErrorsOutput.js';

class Auth {
    static log(event) {
        event.preventDefault();
        let xhr = new XMLHttpRequest();
        xhr.open('POST', '/auth/log');
        xhr.responseType = 'json';
        let form = document.querySelector('.auth-login');
        let formData = new FormData(form);
        xhr.send(formData);
        xhr.onloadend = () => {
            if(xhr.response) {
                ErrorsOutput.completeErrorFields('login', xhr.response);
            }
        };
    }

    static reg(event) {
        event.preventDefault();
        let xhr = new XMLHttpRequest();
        xhr.open('POST', '/auth/reg');
        xhr.responseType = 'json';
        let form = document.querySelector('.auth-registration');
        let formData = new FormData(form);
        xhr.send(formData);
        xhr.onloadend = () => {
            if(xhr.response) {
                ErrorsOutput.completeErrorFields('registration', xhr.response);
            }
        };
    }
}

document.addEventListener("DOMContentLoaded", function() {
    let login__button = document.querySelector('.auth-login__button');
    let registration__button = document.querySelector('.auth-registration__button');
    login__button.addEventListener('click', Auth.log);
    registration__button.addEventListener('click', Auth.reg);
});
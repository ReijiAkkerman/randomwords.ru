class ErrorsOutput {
    static completeErrorFields(action_type, errors_array) { //[control]Auth.(reg|log);
        let errors_list = ErrorsOutput.#getErrorsList(action_type, errors_array);
        for(const [error_field, error_message] of errors_list) {
            let placeForError = document.querySelector(`.auth-${action_type}-errorMessage_${error_field}`);
            placeForError.textContent = error_message;
            placeForError.style.display = (error_message) ? '' : 'none';
        }
    }

    static #getErrorsList(window, errors_array) {
        let errors_list = new Map();
        errors_array.forEach(error => {errors_list.set(error.error_field, error.error_message);});
        let fieldnames = ErrorsOutput.#getFieldNames(window);
        for(let i = 0; i < fieldnames.length; i++)
            if(errors_list.has(fieldnames[i])) continue;
            else errors_list.set(fieldnames[i], '');
        return errors_list;
    }

    static #getFieldNames(window) {
        let fields = document.querySelectorAll(`.auth-${window} .auth__input`);
        let fieldnames = new Array(fields.length);
        for(let i = 0; i < fields.length; i++)
            fieldnames[i] = fields[i].name;
        return fieldnames;
    }
}

export {ErrorsOutput};
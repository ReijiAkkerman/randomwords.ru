import {ItemsOpener} from "../ItemsOpener.js";

document.addEventListener("DOMContentLoaded", function() {
    let open_buttons = document.querySelectorAll(".settings-parametersEditing_switchButton");
    let objects_for_buttons = new Array(open_buttons.length);
    for(let i = 0; i < open_buttons.length; i++) {
        objects_for_buttons[i] = new ItemsOpener();
        open_buttons[i].addEventListener("click", objects_for_buttons[i].switchDisplaying.bind(objects_for_buttons[i]));
    }
});
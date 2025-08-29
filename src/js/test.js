class test {
    static central_button = document.querySelector(".cls2");
    static svg = test.central_button.querySelector("svg");

    static hideIcon() {
        let animation = [{opacity:0}];
        let timing = {
            duration: 100,
            fill: "forwards",
            easing: "linear",
        };
        test.svg.animate(animation, timing);
    }

    static showIcon() {
        let animation = [{opacity:1}];
    }

    static hideDescription() {

    }

    static showDescription() {

    }

    static increaseButtonSize() {
        let animation = [{width:"400%"}];
        let timing = {
            duration: 200,
            fill: "forwards",
            easing: "linear",
        };
        test.central_button.animate(animation, timing);
    }

    static reduceButtonSize() {
        let animation = [{width:"100%"}];
        let timing = {
            duration: 200,
            fill: "forwards", 
            easing: "linear",
        };
        test.central_button.animate(animation, timing);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    test.central_button.addEventListener("mouseenter", test.increaseButtonSize);
    test.central_button.addEventListener("mouseleave", test.reduceButtonSize);
})
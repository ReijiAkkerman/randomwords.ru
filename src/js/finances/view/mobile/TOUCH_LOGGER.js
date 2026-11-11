class TOUCH_LOGGER {
    #startX;
    #startY;
    #endX;
    #endY;
    #deltaX;
    #deltaY;
    #deadZoneX;
    #deadZoneY;
    #swipeMayBeUsed;
    #deadZoneX_length = 40;
    #deadZoneY_length = 40;

    swipeDirection;

    setStartPoint(event) {
        this.#startX = event.touches[0].clientX;
        this.#startY = event.touches[0].clientY;
        // console.log(`start x=${this.#startX} y=${this.#startY}`);
    }

    #setEndPoint(event) {
        this.#endX = event.changedTouches[0].clientX;
        this.#endY = event.changedTouches[0].clientY;
    }

    #getDeltaX() {
        this.#deltaX = this.#startX - this.#endX;
    }

    #getDeltaY() {
        this.#deltaY = this.#startY - this.#endY;
    }

    #checkDeadZoneX() {
        this.#deadZoneX = (Math.abs(this.#deltaX) > this.#deadZoneX_length) ? false : true;
    }

    #checkDeadZoneY() {
        this.#deadZoneY = (Math.abs(this.#deltaY) > this.#deadZoneY_length) ? false : true;
    }

    #mayUseSwipe() {
        if(this.#deadZoneX === false && this.#deadZoneY === true) this.#swipeMayBeUsed = true;
        else this.#swipeMayBeUsed = false;
    }

    defineSwipeDirection(event) {
        this.#setEndPoint(event);
        this.#getDeltaX();
        this.#getDeltaY();
        this.#checkDeadZoneX();
        this.#checkDeadZoneY();
        this.#mayUseSwipe();

        if(this.#swipeMayBeUsed === true)
            this.swipeDirection = (this.#startX < this.#endX) ? 'right' : 'left';
        else this.swipeDirection = false;
    }
}

export var last_touch = new TOUCH_LOGGER();

document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener('touchstart', last_touch.setStartPoint.bind(last_touch));
    document.addEventListener('touchend', last_touch.defineSwipeDirection.bind(last_touch));
});
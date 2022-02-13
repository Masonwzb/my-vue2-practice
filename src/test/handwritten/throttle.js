function throttle(eventFunc, delay) {
    let timer = null;
    return function (...args) {
        if (!timer) {
            timer = setTimeout(() => {
                timer = null;
                eventFunc.apply(this, args);
            }, delay);
        }
    }
}
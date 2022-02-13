export function myDebounce(eventFunc, delay) {
    let timer = null;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            eventFunc.apply(this, args);
        }, delay);
    }
}
function myDeepClone(obj) {
    if (typeof obj !== 'object' || obj === null) return;

    const newObj = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        // eslint-disable-next-line no-prototype-builtins
        if (obj.hasOwnProperty(key)) {
            newObj[key] = typeof obj[key] === 'object' ? myDeepClone(obj[key]) : obj[key];
        }
    }
    return newObj;
}
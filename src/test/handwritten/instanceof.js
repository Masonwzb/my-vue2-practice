const instanceofOne = (obj, func) => {
    if (obj === null || typeof obj !== 'object') return false;

    let proto = Object.getPrototypeOf(obj);

    if (proto === null) {
        return false;
    }

    if (proto === func.prototype) {
        return true;
    }

    // 否则递归
    return instanceofOne(proto, func);
}

const instanceofTwo = (obj, func) => {
    if (!obj || typeof obj !== 'object') return false;

    let proto = obj;

    while (proto) {
        if (proto === func.prototype) {
            return true
        }
        proto = Object.getPrototypeOf(proto);
    }
    return false;
}

const instanceofThree = (obj, func) => {
    if (obj === null || typeof obj !== 'object') {
        return false;
    }

    let proto = obj;

    // eslint-disable-next-line no-constant-condition
    while (true) {
        if (proto === null) {
            return false;
        } else if (proto === func.prototype) {
            return true;
        } else {
            proto = Object.getPrototypeOf(proto);
        }
    }
}

// 测试
let Fn = function () { }
let p1 = new Fn()

console.log(instanceofThree({}, Object)) // true
console.log(instanceofThree(p1, Fn)) // true
console.log(instanceofThree({}, Fn)) // false
console.log(instanceofThree(null, Fn)) // false
console.log(instanceofThree(1, Fn)) // false

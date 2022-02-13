function myBind(context, ...args) {
    const ctx = context || window;
    const fnSymbol = Symbol('bind');
    ctx[fnSymbol] = this;

    return function (...args2) {
        // 合并参数
        const concatArgs = [...args, ...args2];

        ctx[fnSymbol](...concatArgs);
        delete ctx[fnSymbol];
    }
}
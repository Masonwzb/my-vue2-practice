function myCall(context, ...args) {
    const ctx = context || window;
    const fnSymbol = Symbol('call');
    ctx[fnSymbol] = this;

    ctx[fnSymbol](...args);
    delete ctx[fnSymbol];
}
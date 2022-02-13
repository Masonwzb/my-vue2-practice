function myApply(context, argArr) {
    const ctx = context || window;
    const fnSymbol = Symbol('apply');
    ctx[fnSymbol] = this;

    ctx[fnSymbol](...argArr);
    delete ctx[fnSymbol];
}
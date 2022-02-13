const myObject = {
    a: 1,
    b: 2,
};

Object.defineProperty(myObject, Symbol.iterator, {
    writable: false,
    enumerable: false,
    configurable: true,
    value: function () {
        console.log('this --- ', this);
        const allKeys = Object.keys(this);
        let idIndex = 0;
        return {
            next: () => {
                const key = allKeys[idIndex++];
                return {
                    key,
                    value: this[key],
                    done: idIndex > allKeys.length,
                }
            }
        }
    }
});

const iteratorObj = myObject[Symbol.iterator]();
console.log(iteratorObj.next());
console.log(iteratorObj.next());
console.log(iteratorObj.next());

for(const value of myObject) {
    console.log('myObject - val ------ ', value);
}
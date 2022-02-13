export class EventEmitter {
    constructor() {
        this.events = {};
    }

    // 监听事件
    $on(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] =[];
        }
        this.events[eventName].push(callback);
    }

    // 分发事件
    $emit(eventName, ...args) {
        if (!this.events[eventName]) return;
        this.events[eventName].forEach(cb => cb.apply(this, args));
    }


    // 删除事件
    $off(eventName, callback) {
        if (typeof eventName === 'undefined') {
            this.events = {};
            return;
        }

        if (typeof eventName === 'string') {
            if (typeof callback === 'function') {
                this.events[eventName] = this.events[eventName].filter(cb => {
                    return cb !== callback;
                });
            } else {
                delete this.events[eventName];
            }
        }
    }

    // 一次性监听事件
    $once(eventName, callback) {
        const proxyCallback = (...args) => {
            callback.apply(this, args);
            // 回调函数执行完成之后就删除事件订阅
            this.$off(eventName, proxyCallback);
        };
        this.$on(eventName, proxyCallback);
    }
}
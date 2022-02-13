class Subject {
    constructor() {
        this.state = 0;
        this.observers = [];
    }

    getState() {
        return this.state;
    }

    setState(val) {
        this.state = val;
        this.notifyAllObservers();
    }

    notifyAllObservers() {
        this.observers.forEach(ob => {
            ob.update();
        })
    }

    attach(ob) {
        this.observers.push(ob);
    }

}

class Observer {
    constructor(name, sub) {
        this.name = name;
        this.subject = sub;
        this.subject.attach(this);
    }

    update() {
        console.log(`${this.name} update, state: ${this.subject.getState()}`);
    }
}

export { Subject, Observer };
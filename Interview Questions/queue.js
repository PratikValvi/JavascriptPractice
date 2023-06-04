//Implement Queue using array

class Queue {
    constructor() {
        this.items = [];
    }

    addToStart(element) {
        this.items.unshift(element);
    }

    addToEnd(element) {
        this.items.push(element);
    }

    peekAtStart() {
        if(this.isEmpty()) {
            return null
        }
        return this.items[0]
    }

    peekAtEnd() {
        if(this.isEmpty()) {
            return null
        }
        return this.items[this.items.length - 1]
    }

    popFromStart() {
        if(this.isEmpty()) {
            return null
        }
        return this.items.shift();
    }

    popFromEnd() {
        if(this.isEmpty()) {
            return null
        }
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0
    }
}

const queue = new Queue();
queue.addToStart(1);
queue.addToEnd(2);
queue.addToEnd(3);
queue.addToStart(4);

console.log(queue.peekAtStart());
console.log(queue.peekAtEnd());

console.log(queue.popFromStart());
console.log(queue.peekAtStart());
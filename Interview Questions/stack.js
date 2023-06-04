//Implement Stack using Array

class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length == 0
    }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

let topItem = stack.pop();
console.log(topItem);
console.log(stack.peek());
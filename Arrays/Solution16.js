/**
16. Implementing a stack using an array
*/

/**
Stack Methods

push(element): Adds an element to the top of the stack.

pop(): Removes and returns the element at the top of the stack.

peek(): Returns the element at the top of the stack without removing it.

isEmpty(): Returns a boolean indicating whether the stack is empty or not.

size(): Returns the number of elements in the stack.
*/

class Stack {
    constructor() {
        this.array = [];
    }

    push = (element) => {
        this.array.unshift(element);
    }
    
    pop = () => {
        if (this.array.length > 1) {
            let firstElement = this.array.shift();
            return firstElement;
        }
        return null;
    }
    
    peek = () => this.array.length > 1 ? this.array[0] : null;
    
    isEmpty = () => this.array.length > 1 ? false : true;
    
    size = () => this.array.length;

    getValues = () => this.array;
}

const stack = new Stack();

//Push
stack.push(6);
stack.push(9);
stack.push(1);
console.log("Stack after push: ",stack.getValues());

//Pop
console.log("Pop element: ",stack.pop());
console.log("Stack after pop: ",stack.getValues());

//Peek
console.log("Peek element: ",stack.peek());
console.log("Stack after peek: ",stack.getValues());

//isEmpty
console.log("Is stack empty: ",stack.isEmpty());

//Size
console.log("Size of stack: ",stack.size());

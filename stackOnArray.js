class Stack {
  constructor() {
    this.list = [];
  }

  push(value) {
    this.list.push(value);
    return this.list;
  }

  pop() {
    this.list.pop();
    return this.list;
  }

  peek() {
    return this.list[this.list.length - 1];
  }
}

const myStack = new Stack();
myStack.push("google");
myStack.push("github");
myStack.push("discord");
myStack.pop();
myStack.pop();
const res = myStack.peek();

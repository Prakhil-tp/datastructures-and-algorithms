class LinkNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new LinkNode(value);
    if (!this.top) this.bottom = newNode;
    else newNode.next = this.top;

    this.top = newNode;
    this.length++;
    return this;
  }

  pop() {
    if (!this.top) return null;
    else if (this.top === this.bottom) this.bottom = null;
    this.top = this.top.next;
    this.length--;
    return this;
  }

  peek() {
    return this.top.value;
  }
}

const myStack = new Stack();
myStack.push("google");
myStack.push("udemy");
myStack.push("discord");
myStack.pop();
myStack.pop();
const res = myStack.pop();
console.log(res);

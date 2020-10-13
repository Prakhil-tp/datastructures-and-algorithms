class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  insert(index, value) {
    if (index === 0) return this.prepend(value);
    else if (index >= this.length) return this.append(value);

    const leader = this.traverseToIndex(index - 1);
    const newNode = new Node(value);
    newNode.next = leader.next;
    leader.next = newNode;
    this.length++;
  }

  traverseToIndex(index) {
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  remove(index) {
    const leader = this.traverseToIndex(index - 1);
    const currentNode = this.traverseToIndex(index);
    leader.next = currentNode.next;
    this.length--;
  }

  printList() {
    const values = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return values;
  }

  reverse() {
    if (this.head.next === null) return this.head;
    let firstNode = this.head;
    let secondNode = firstNode.next;
    firstNode.next = null;
    this.tail = firstNode;
    while (secondNode) {
      const temp = secondNode.next;
      secondNode.next = firstNode;
      firstNode = secondNode;
      secondNode = temp;
    }
    this.head = firstNode;
  }
}

const myLinkedList = new LinkedList(12);
myLinkedList.append(16);
myLinkedList.append(20);
myLinkedList.prepend(10);
myLinkedList.insert(2, 50);
myLinkedList.remove(1);
const res = myLinkedList.printList();
console.log(res);
myLinkedList.reverse();
const res1 = myLinkedList.printList();
console.log(res1);

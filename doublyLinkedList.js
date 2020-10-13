class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
  }

  insert(index, value) {
    if (index === 0) return this.prepend(value);
    else if (index >= this.length) return this.append(value);

    const leader = this.traverseToIndex(index - 1);
    const newNode = new Node(value);
    const follower = leader.next;
    newNode.next = follower;
    follower.prev = newNode;
    newNode.prev = leader;
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
    const unwantedNode = leader.next;
    const follower = unwantedNode.next;
    leader.next = follower;
    follower.prev = leader;
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
}

const myLinkedList = new DoublyLinkedList(12);
myLinkedList.append(16);
myLinkedList.append(20);
myLinkedList.prepend(10);
myLinkedList.insert(2, 50);
myLinkedList.remove(1);
const res = myLinkedList.printList();
console.log(res);

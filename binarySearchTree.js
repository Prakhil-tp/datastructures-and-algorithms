/**
 * Create binary tree.
 *
 *      9
 *   4     20
 * 1  6  15  170
 */

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let currentNode = this.root;
    while (true) {
      if (currentNode.value < value) {
        if (currentNode.right) currentNode = currentNode.right;
        else {
          currentNode.right = newNode;
          return this;
        }
      } else if (currentNode.value > value) {
        if (currentNode.left) currentNode = currentNode.left;
        else {
          currentNode.left = newNode;
          return this;
        }
      } else break;
    }
  }

  lookup(value) {
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.value === value) return currentNode;
      else if (currentNode.value < value) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      }
    }
    return false;
  }

  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        // we have a match, get to work!

        // option 1: No right child
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            // if parent > current value, make current left child a child of parent.
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;

              // if parent < current value, make left child a right child of parent.
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

          // option 2: Right child which doesn't have a left child.
        } else if (currentNode.left.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            currentNode.right.left = currentNode.left;

            // if parent > currentNode, make right child a left child of the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

              // if parent < currentNode, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

          // option 3: Right child that has left child
        } else {
          // find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }
          // Parent's left subtree  is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }
}

// function to list the tree
function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

const tree = new BinarySearchTree();
tree.insert(51);
tree.insert(55);
tree.insert(54);
tree.insert(40);
const a = tree.remove(54);
console.log(a);
const res = JSON.stringify(traverse(tree.root));
console.log(res);

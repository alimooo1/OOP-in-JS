class Stack {
  #stackStorage = [];

  push(item) {
    this.#stackStorage.unshift(item);
  }

  pop() {
    const removedItam = this.#stackStorage[0];
    if (removedItam === undefined) {
      throw new Error("Stack is Empty!");
    } else {
      return this.#stackStorage.shift();
    }
  }

  peek() {
    const firstItem = this.#stackStorage[0];
    if (firstItem === undefined) {
      throw new Error("Stack is Empty!");
    } else {
      return firstItem;
    }
  }

  get count() {
    const count = this.#stackStorage.length;
    return count;
  }
}

const stack = new Stack();

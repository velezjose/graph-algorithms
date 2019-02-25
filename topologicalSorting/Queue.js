module.exports = {
  Queue: class Queue {
    constructor() {
      this.q = [];
    }

    enqueue(val) {
      this.q.push(val);
    }

    dequeue() {
      return this.q.shift();
    }

    toArray() {
      return this.q;
    }

    isEmpty() {
      return this.q.length === 0;
    }
  }
};

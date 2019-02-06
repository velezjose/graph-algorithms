// Priority Queue implementation using a MinHeap.
export default class MinHeap {
  // Assigns a _storage array that will contain our heap.
  // First element is null so we can refer to parent and children with the 
  // following formulas:
  //   parent(i) = Math.floor(i / 2);
  //   left(i) = 2 * i;
  //   right(i) = 2 * i + 1;
  constructor(val) {
    this._storage = [null];
    if (val !== undefined) {
      this._storage.push(val);
    }
  }

  // Push into _storage array and heapify up if necessary
  insert(value) {
    this.push(value);
    this.heapifyUp(this.size());
    return value;    
  }

  // Return element at index 1 of _storage array.
  getMin() {
    if (this.size() > 0) {
      return this.get(1);
    }
  }

  // Called when element is inserted. If element is smaller than parent, 
  // switch the two until the element is no longer smaller than its new parent 
  // or it's at index 1 of our _storage.
  heapifyUp(idx) {
    if (this.size() <= 1) {
      return;
    }

    while (this.get(idx) < this.parent(idx) && idx > 1) {
      let val = this.get(idx);
      let [bigger, parentIdx] = [this.parent(idx), Math.floor(idx / 2)];
      this.set(idx, bigger);
      this.set(parentIdx, val);
      idx = parentIdx;
    }
  } 

  // Called when min is extracted. If new element at root is greater than any of
  // its children, switch with smaller child and continue doing so until element is
  // no longer greater than its new children.
  heapifyDown(idx) {
    if (this.size() <= 1) {
      return;
    }

    // While element is greater than left or right AND while index is <= (1/2) * size of the heap
    //   ** this last condition occurs because we don't want to swap if index is more than 
    //   ** halfway through the heap
    while ((this.get(idx) > this.left(idx) || this.get(idx) > this.right(idx)) && idx <= Math.floor(this.size() / 2)) {
      let val = this.get(idx);
      let smaller, smallerChildIdx;

      if (this.right(idx) !== undefined) {
        // smaller gets smaller of the two values
        // smallerChildIdx gets the corresponding index of the smaller of the two children: 
        //    --> (2i) if smaller is the left child
        //    --> (2i + 1) if smaller is the right child
        [smaller, smallerChildIdx] = this.left(idx) < this.right(idx) ? [this.left(idx), 2 * idx] : [this.right(idx), 2 * idx + 1];
      } else {
        [smaller, smallerChildIdx] = [this.left(idx), 2 * idx];
      }

      this.set(idx, smaller);
      this.set(smallerChildIdx, val);
      idx = smallerChildIdx;
    }
  }

  // Switch last with element at index 1 of _storage and return previous 
  // element at index 1.
  // Special cases when _storage's size is <= 1 can be applied as shown.
  extractMin() {
    if (this.size() < 1) {
      return;
    } else if (this.size() === 1) {
      return this.pop();
    }

    let min = this.get(1);
    let last = this.pop();
    this.set(1, last);
    this.heapifyDown(1);
    return min;
  }

  // Decrease key in O(n) time complexity :(
  // One way to go about this (if it were super necessary to get this in O(n), would
  // be to keep a hashmap of key-value pairs of values and indexes).
  decreaseKey(val, newVal) {
    let idx = this._storage.indexOf(val);
    this.set(idx, newVal);
    this.heapifyUp(idx);
  }

  // Returns the parent of element at i-th position in our _storage array..
  parent(i) {
    return this.get(Math.floor(i / 2));
  }

  // Returns element to the left of i.
  left(i) {
    return this.get(i * 2);
  }

  // Returns element to the right of i.
  right(i) {
    return this.get(i * 2 + 1);
  }

  // Getter for our _storage array.
  get(i) {
    return this._storage[i];
  }

  // Setter for our _storage array.
  set(i, value) {
    this._storage[i] = value;
  }

  // Pops from our _storage array.
  pop() {
    return this._storage.pop()
  }

  // Push to our _storage array. I.e. to add at end.
  push(value) {
    this._storage.push(value);
  }

  // Returns size of our MinHeap instance.
  size() {
    return this._storage.length - 1;
  }
}
class SortedList {
  constructor() {
    this.items = [];
  }
  get length() {
    return this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    return this.items;
  }
  get(pos) {
    if (pos >= this.length) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }
  max() {
    if (this.length === 0) throw new Error("EmptySortedList");
    return Math.max(...this.items);
  }
  min() {
    if (this.length === 0) throw new Error("EmptySortedList");
    return Math.min(...this.items);
  }
  average() {
    if (this.length <= 0) throw new Error("EmptySortedList");
    return this.sum() / this.length;
  }
  sum() {
    return this.length <= 0 ? 0 : this.items.reduce((a, b) => a + b, 0);
  }
}

module.exports = SortedList;

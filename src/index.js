class Sorter {
  constructor() {
    this.arr = new Array;
  }

  add(element) {
      this.arr.push(element);// your implementation
  }

  at(index) {
    return this.arr[index];// your implementation
  }

  get length() {
    var lngth;
    return lngth = this.arr.length;// your implementation
  }

  toArray() {
      return this.arr;// your implementation
  }

  sort(indices) {
    //this.arr.sort(indices);
    var el = [];
    for(var i = 0; i < indices.length; i++)
    {
      el[i] = this.arr[indices[i]];
    }
    el.sort();
    for(var i = 0; i < indices.length; i++)
    {
      this.arr[indices[i]] = el[i];
    }
    // your implementation
  }

  setComparator(compareFunction) {
    // your implementation
  }
}

module.exports = Sorter;

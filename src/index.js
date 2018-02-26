class Sorter {
  constructor() {
    this.storeElem = [];
    this.compareFunction = (a , b)=> a - b;
  }

  add(element) {
    this.storeElem.push(element);
  }

  at(index) {
    return this.storeElem[index];
  }

  get length() {
    return this.storeElem.length;
  }

  toArray() {
    return this.storeElem;
  }

  sort(indices) {
    const sortedInd = indices.sort((a,b)=>a-b);
    const indLength = sortedInd.length;
    const minIndex = sortedInd[0];
    const sortedArr = this.storeElem.splice(minIndex,indLength);
    sortedArr.sort(this.compareFunction);
    this.storeElem.splice(minIndex,0,...sortedArr);
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;

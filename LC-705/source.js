class MyHashSet {

  constructor() {
    this.set = new Array(10);
    this.size = 0;
  }

  hash(key, bucketLength) {
    return key % bucketLength;
  }

  add(key) {
    const loadWeight = this.size / this.set.length;
    if (loadWeight > 0.75) {
      this.resize();
    }
    const hash = this.hash(key, this.set.length);
    if (this.set[hash] != null) {
      if (this.set[hash].includes(key)) return;
      this.set[hash].push(key);
    } else {
      this.set[hash] = [key];
    }
    this.size++;
  }

  remove(key) {
    const hash = this.hash(key, this.set.length);
    if (this.set[hash] != null) {
      const index = this.set[hash].indexOf(key);
      if (index > -1) {
        this.set[hash].splice(index, 1);
        this.size--;
      }
    } 
  }

  contains(key) {
    const hash = this.hash(key, this.set.length);
    if (this.set[hash] != null) {
      return this.set[hash].includes(key);
    }
    return false;
  }

  resize() {
    const newLength = this.set.length * 2 + 1;
    const newSet = new Array(newLength);
    for (const elem of this.set) {
      if (elem != null) {
        elem.forEach(key => {
          const newHash = this.hash(key, newLength);
          if (newSet[newHash] != null) {
            newSet[newHash].push(key);
          } else {
            newSet[newHash] = [key];
          }
        })
      }
    }

    this.set = newSet;
  }
}

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
Array.prototype.bubbleSort = function () {
  let sorted = false;
  while (sorted === false) {
    sorted = true;
    for (let i = 0; i < this.length - 1; i++) {
      let j = i + 1;

      if (this[i] > this[j]) {
        let temp = this[j];
        this[j] = this[i];
        this[i] = temp;
        sorted = false;
      }
    }
  }

  return this;
};

// console.log([1,3,2,7,4].bubbleSort());

String.prototype.substrings = function () {
  let newArr = [];
  let arr = this.split("");

  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j < this.length + 1; j++) {
      newArr.push(arr.slice(i, j).join(""));
    }
  }

  return newArr;
};

// console.log("hello".substrings());

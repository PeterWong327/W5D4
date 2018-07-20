Array.prototype.uniq = function () {
  let newArr = [];
  this.forEach(el => {
    if (newArr.includes(el) === false) {
      newArr.push(el);
    }

  });
  return newArr;
};

// console.log([].uniq());


Array.prototype.twoSum = function() {
  let newArr = [];

  for (let i = 0; i < this.length - 1; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if ((this[i] + this[j]) === 0) {
        newArr.push([i,j]);
      }
    }
  }

  return newArr;
};
// console.log([1,-1,2,4,-2, 0].twoSum());

Array.prototype.transpose = function () {
  let newArr = [];

  for (let i = 0; i < this[0].length; i++) {
    let subArr = [];
    for (let j = 0; j < this.length; j++) {
      subArr.push(this[j][i]);
    }
    newArr.push(subArr);
  }

  return newArr;
};

// console.log([[1,2], [3,4], [5,6]].transpose());

Array.prototype.myEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

function myCallback(el) {
  console.log(el * el);
}

// console.log([1,2,3].myEach(myCallback));

Array.prototype.myMap = function (callback) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr[i] = callback(this[i]);
  }
  return newArr;
};

function myCallback2(el) {
  return (el * el);
}

// console.log([1,2,3].myMap(myCallback2));

Array.prototype.myReduce = function (callback, initialValue) {

  for (let i = 0; i < this.length; i++) {
    if (initialValue === undefined) {
      initialValue = this[0];
    } else {
      initialValue = callback(initialValue, this[i]);
    }
  }

  return initialValue;
};

function myCallback3(acc,el) {
  return acc - el;
}

// console.log([1,2,3].myReduce(myCallback3));

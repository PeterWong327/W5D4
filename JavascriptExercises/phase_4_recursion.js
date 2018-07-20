function range(start, end) {
  if (start === end) {
    return [start];
  }
  else
  if (start > end) {
    return undefined;
  }
  let arr = range(start, end - 1).concat([end]);
  return arr;
}

// console.log(range(1,5));

function sumRec(arr) {
  if (arr.length === 1) {
    return arr[0];
  }

  return sumRec(arr.slice(0, -1)) + arr[arr.length - 1];
}

// console.log(sumRec([1,2,3]));


function exponent1(base, exp) {
  if (exp === 0) {
    return 1;
  }

  return exponent1(base, exp - 1) * base;
}

// console.log(exponent1(2, 0));

function exponent2(base, exp) {
  if (exp === 1) { return base;}
  if (exp === 0) { return 1; }
  if (exp % 2 === 0) {
    return exponent2(base, exp / 2) ^ 2;
  }
  else {
    return base * (exponent2(base, (exp - 1) / 2) ^ 2);

  }
}
// console.log(exponent1(2, 5));

function fibonacci(n) {
  if (n === 1) {
    return [1];
  }
  if (n === 2) {
    return [1,1];
  }
  let arr = fibonacci(n-1);
  return arr.concat([arr[arr.length-1] + arr[arr.length - 2]]);
}

// console.log(fibonacci(5));

function deepDup(arr) {
  let duped = [];

  arr.forEach(function(el) {
    if (el instanceof Array) {
      duped.push(deepDup(el));
    } else {
      duped.push(el);

    }
  });
  return duped;
}

// console.log(deepDup([1,[2,3],4]));

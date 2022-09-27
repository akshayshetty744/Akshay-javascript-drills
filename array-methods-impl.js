const items = [1, 2, 3, 4, 5, 5]; // use this array to test your code. 
/*
  Complete the following functions.
  These functions only need to work with arrays.
  A few of these functions mimic the behavior of the `Built` in JavaScript Array Methods.
  The idea here is to recreate the functions from scratch BUT if you'd like,
  feel free to Re-use any of your functions you build within your other functions.
  **DONT** Use for example. .forEach() to recreate each, and .map() to recreate map etc.
  You CAN use concat, push, pop, etc. but do not use the exact method that you are replicating
*/

// each
    function cb(a) {
      console.log(`index ${a}`)
    }
    function each(elements, cb) {
      for (let i = 0; i < elements.length; i++) {
        console.log(`value  ${elements[i]}`);
        cb(i)
      }
    }
    each(items, cb)


//map
    let x = [];
    function cb1(a) {
      x.push(a * 10);
      console.log(x)
    }
    function map(elements, cb) {
      for (let i of elements) {
        cb(i)
      }
    }
    map(items, cb1)

//reduce
let sum = 0;
function cb2(a, b) {
  sum += b;
  console.log(sum + a);
}

function reduce(elements, cb, startingValue) {
  for (let i of elements) {
    if (typeof (startingValue) == 'undefined') {
      startingValue = 0;
      cb(0, i)
    } else {
      cb(startingValue, i)
    }
  }
}
reduce(items, cb2, 10)


//find
function cb3(a) {
  if (!a) {
    console.log(`undefined`);
  } else {
    console.log(a);
  }
}

function find(elements, cb) {
  for (let i of elements) {
    cb(i)
  }
}
find(items, cb3)


//filter
    let arr = [];
    function cb4(a) {
      if (!a) {
        console.log([]);
      } else {
        arr.push(a);
        console.log(arr);
      }
    }

    function filter(elements, cb) {
      for (let i of elements) {
        cb(i)
      }
    }
    filter(items, cb4)

const nestedArray = [1, [2], [[3]], [[[4]]]]; // use this to test 'flatten'

function flatten(elements) {
  // Flattens a nested array (the nesting can be to any depth).
  // Hint: You can solve this using recursion.
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
}

function counterFactory() {
  let a=0;
  return {
    increment:()=> (++a),
    decrement: ()=> (a - 1),
  };
}

function limitFunctionCallCount(cb, n) {
  let callCount = 0;
  return (...a) => {
    if (callCount === n) return null;
    callCount++;
    return cb(...a);
  };
}

function cacheFunction(cb) {
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
}

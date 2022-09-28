const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' }; // use this object to test your functions

// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

function keys(obj) {
  return Object.keys(obj);
}

function values(obj) {
  return Object.values(obj);
}

function mapObject(obj, cb) {
  Object.keys(obj).map((element) => (obj[element] = cb(obj[element])));
  return obj;
}

function pairs(obj) {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
}

/* STRETCH PROBLEMS */

function invert(obj) {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
}

function defaults(obj, defaultProps) {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
}

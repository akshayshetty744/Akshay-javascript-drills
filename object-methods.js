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
  return  Object.entries(obj)
}

/* STRETCH PROBLEMS */

function invert(obj) {
   let newObj={}
  Object.keys(obj).forEach((item)=>{
    let value=obj[item]
    newObj[value]=item

  })
  return newObj
}

function defaults(obj, defaultProps) {
  Object.keys(defaultProps).forEach((key) => {
    if (Object.prototype.hasOwnProperty.call(obj, key)) return;
    obj[key] = defaultProps[key];
  });
  return obj;
}

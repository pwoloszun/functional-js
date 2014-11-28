/*
 * Converts arguments to string.
 * Usage:
 * argsToArray(1, null, "imba") => "1, null, imba"
 * */
function argsToString() {
}

/*
 * Returns an Array instance containing all arguments passed to function
 * Usage:
 * argsToArray(1, null, "imba") => [1, null, "imba"]
 * */
function argsToArray() {
}

// Wywola funkcje fn z dowolna iloscia pozostalych parametrow
// (fn, arg1, arg2, ..., argN) => fn(arg1, arg2, ...,  argN)
/*
 * Calls function passed as first parameter fn, with every other param passed to it
 * Usage:
 * callWithArgs(myFunction, 1, "xxx") => myFunction(1, "xxx")
 * callWithArgs(myFunction, [], "a", 123) => myFunction([], "a", 123)
 * */
function callWithArgs(fn) {
}

/*
 * Calls given function fn, *i* times
 * Usage:
 * times(5, function(i) {
 *   log(i);
 * });
 * */
function times(fn, i) {
}

/*
 * Calls function fn for each element of array
 * Usage:
 * each(function(i) {
 *   log(i);
 * }, [1, 2, 3]) => logs on console: 1, 2, 3
 * */
function each(fn, array) {
}

/*
 * Maps array using function fn
 * Usage:
 * map(function(name) {
 *   return "Hello " + name;
 * }, ["Kate", "Bob"]) => ["Hello Kate", "Hello Bob"]
 * */
function map(fn, array) {
}

/*
 * Filters array using boolean function fn and returns new instance
 * containing only filtered elements
 * Usage:
 * filter(function(i) {
 *  return i % 2 === 0;
 * }, [1,2,3,4]) => [2, 4]
 *
 * filter(function(name) {
 *  return name[0] === "B";
 * }, ["Kate", "Bob", "Ed", "Ben"]) => ["Bob", "Ben"]
 * */
function filter(fn, array) {
}

function filterExample() {
  var arr = [1, 2, 3, 4];
  var filterFn = function(number) {
    return number % 2 === 0;
  };
  filter(filterFn, arr); // => [2, 4]

  var filterLessThan2 = function(number) {
    return number < 2;
  };
  filter(filterLessThan2, arr); // => [1]

  filter(function(name) {
    return name[0] === "B";
  }, ["Kate", "Bob", "Ed", "Ben"]);// =>["Bob", "Ben"]
}


/*
 * Checks if all elements of array satisfy conditions of boolean function fn
 * Usage:
 * all(function(i) {
 *   return i % 2 === 0;
 * }, [1, 2, 3]) => false
 *
 * all(function(name) {
 *   return name[0] === "B";
 * }, ["Bob", "Ben", "Bison"]) => true
 * */
function all(fn, array) {
}

function find(fn, array) {
}

function uniq(fn, array) {
}

// example:
function curryExample() {
  var result = R.multiply(2, 3);
  log("2 * 3 ==", result);

  var double = R.multiply(2);
  log("double(9) ==", double(9));
  log("double(-7) ==", double(-7));
}
//curryExample();

/**
 * Implement getNameTask
 * Use: R.get
 */
function getNameTask() {
  // getName
  // TODO

  var bob = {name: "bob", age: 34};
  //log(getName(bob));
  assertEqual(getName(bob), bob.name);
}
//getNameTask();

/**
 * Implement listWordsTask
 * Use: R.split
 */
function listWordsTask() {
  // listWords
  // TODO

  //log(listWords("ala ma kota"));
  assertSame(listWords("ala ma kota"), ["ala", "ma", "kota"]);
}
//listWordsTask();

/**
 * Implement tripleListTask
 * Use: R.map, R.multiply
 */
function tripleListTask() {
  // triple
  // TODO
  // tripleList
  // TODO

  log(tripleList([1, 2, 3]));
  assertSame(tripleList([1, 2, 3]), [3, 6, 9]);
}
//tripleListTask();

/**
 * Implement maxTask
 * Use: R.reduce, greaterFrom
 */
function maxTask() {
  var greaterFrom = function(a, b) {
    return a > b ? a : b;
  };
  // max
  // TODO

  //log(max([1, 27, 3]));
  assertEqual(max([1, 27, 3]), 27);
  //log(max([-1, -27, -3]));
  // TODO: uncomment assertion
  //assertEqual(max([-1, -27, -3]), -1);
}
//maxTask();

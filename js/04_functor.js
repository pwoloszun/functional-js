function functorUsage() {
  log(Container(13).map(R.add(1)));
  log(Container("cats").map(R.substring(0, 2)).map(R.toUpperCase));
  var upperFirstTwoLetters = R.compose(R.substring(0, 2), R.toUpperCase);
  log(Container("cats").map(upperFirstTwoLetters));
}
//functorUsage();

function lazyFunctorUsage() {
  var c1 = Container(3).map(R.add(1));
  log(c1);

  var c2 = R.map(R.add(1), Container(3));
  log(c2);

  //TODO: whats the difference?
}
//lazyFunctorUsage();

function nullObjectFunctorUsage() {
  var firstMatch = R.compose(R.head, Container, R.match(/cat/g));

  log("Null Object pattern, no match:", firstMatch("dog imba!"));
}
//nullObjectFunctorUsage();

/**
 * Implement incrementByOneTask
 * Use: R.map, R.add, Container
 */
function incrementByOneTask() {
  // addOne
  // incrementByOne

  //log(incrementByOne(Container(3)));
  assertSame(incrementByOne(Container(3)), Container(4));
}
//incrementByOneTask();

/**
 * Implement incrementByOneTask
 * Use: R.map, R.add, Container
 */
function takeTwoElementsTask() {
  // takeTwo
  // takeTwoElements

  //log(takeTwoElements(Container(["one", "two", "three", "four"])));
  assertSame(takeTwoElements(Container(["one", "two", "three", "four"])), Container(["one", "two"]));
}
//takeTwoElementsTask();

/**
 * Implement safeUpperCaseTask
 * Use: R.map, parseInt, Maybe
 */
function safeUpperCaseTask() {
  // mapToUpperCase
  // safeUpperCase

  //log(safeUpperCase("abc"));
  //log(safeUpperCase(null));
  assertSame(safeUpperCase("abc"), Maybe("ABC"));
  assertSame(safeUpperCase(null), Maybe(null));
}
//safeUpperCaseTask();

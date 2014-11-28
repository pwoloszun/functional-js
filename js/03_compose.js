// Example:
function wordsLengthsTask() {
  // TODO: together
  // listWords
  // mapToLengths
  // wordsLengths

  var result = wordsLengths("Ala ma kota");
  //log("Result: ", result);
  assertSame(result, [3, 2, 4]);
}

//wordsLengthsTask();

// === Tasks ===

var articles = [
  {
    title: 'Batman returns',
    url: 'http://batman.com',
    author: {
      name: 'Pan Samochodzik',
      email: 'mr.car@gmail.com'
    }
  },
  {
    title: 'Losowy tytul 2',
    url: 'http://google.pl',
    author: {
      name: 'Gal Anonim',
      email: 'g.a@me.com'
    }
  }
];

/**
 * Implement getTitleNumber
 * Use: R.compose, R.get, R.nth
 */
function getTitleNumberTask() {
  var getTitleNumber = function(n, objects) {
    // TODO: together ?
    // getTitle
    // nthElement
    // nthElementTitle
    return nthElementTitle(objects);
  };
  //log(getTitleNumber(1, articles));
  assertEqual(getTitleNumber(1, articles), 'Losowy tytul 2');
}
//getTitleNumberTask();

/**
 * Implement listNames
 * Use: R.compose, R.get, R.map
 */
function listNamesTask() {
  // getAuthorName
  // TODO
  // listNames
  // TODO
  //log("listNames:", listNames(articles));
  assertSame(listNames(articles), ["Pan Samochodzik", "Gal Anonim"]);
}
//listNamesTask();

/**
 * Implement isAuthor
 * Use: R.contains, R.compose
 */
function isAuthorTask() {
  // isAuthor
  // TODO
  var isAuthor = function(name, articles) {
    // reuse: listNames
    // TODO
    // containsName
    // TODO
    // listContainsName
    // TODO
    return listContainsName(articles);
  };

  //log("isAuthor:", isAuthor("batman", articles), isAuthor("Gal Anonim", articles));
  assertFalse(isAuthor("batman", articles));
  assertTrue(isAuthor("Gal Anonim", articles));
}
//isAuthorTask();

/**
 * Implement avg
 * Use: fork, R.divide, R.sum, and R.length.
 */
function avgTask() {
  var fork = R.curry(function(lastly, f, g, x) {
    return lastly(f(x), g(x));
  });

  // avg
  // TODO

  //log("avg:", avg([1, 2, 3, 4, 5]));
  assertEqual(3, avg([1, 2, 3, 4, 5]));
}
//avgTask();

/**
 * Implement multiCompositionTask
 * Use: R.compose, R.join, R.map, R.trim, R.split, R.toUpperCase, toGreeting
 */
function multiCompositionTask() {
  var toGreeting = R.curry(function(str) {
    return "Hi, >>>" + str + "<<<!";
  });

  // TODO
  // greetingsText

  //log(toGreetings("  ala -  ma   -\tkota\n"));
  assertEqual(greetingsText("  ala -  ma   -\tkota\n"), "Hi, >>>ALA<<<!\nHi, >>>MA<<<!\nHi, >>>KOTA<<<!");
}
//multiCompositionTask();

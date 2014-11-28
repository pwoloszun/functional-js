function log() {
  console.log.apply(console, arguments);
}

function assertEqual(actualValue, expectedValue) {
  if (actualValue !== expectedValue) {
    var msg = JSON.stringify(actualValue) + " should equal " + JSON.stringify(expectedValue);
    console.assert(false, msg);
  }
}

function assertSame(actualValue, expectedValue) {
  if (actualValue !== expectedValue) {
    var actualStr = JSON.stringify(actualValue);
    var expectedStr = JSON.stringify(expectedValue);
    var msg = actualStr + " should be same as " + expectedStr;
    var haveSameConstructor = !!actualValue.constructor && !!expectedValue.constructor && actualValue.constructor === expectedValue.constructor;
    if (!(haveSameConstructor && actualStr === expectedStr)) {
      console.assert(false, msg);
    }
  }
}

function assertTrue(value) {
  console.assert(value === true, JSON.stringify(value) + " should be true");
}

function assertFalse(value) {
  console.assert(value === false, JSON.stringify(value) + " should be false");
}

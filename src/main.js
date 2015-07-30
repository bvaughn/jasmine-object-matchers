/**
 * Matcher helpers for tests involving Objects.
 */
JasmineObjectMatchers = {};

JasmineObjectMatchers.toContainKeys = function(object, keys) {
  var pass = true;
  var message;

  var objectKeysMap = {};
  var key;

  for (key in object) {
    objectKeysMap[key] = object[key];
  }

  if (!(keys instanceof Array)) {
    keys = Object.keys(keys);
  }

  for (var i = 0, length = keys.length; i < length; ++i) {
    key = keys[i];

    if (!objectKeysMap[key]) {
      message = 'Expected object to contain key:' + key;
      pass = false;
      break;
    }
  }

  return {
    pass: pass,
    message: message
  };
};

JasmineObjectMatchers.toContainValues = function(actualObject, expectedObject) {
  var pass = true;
  var message;

  for (var key in expectedObject) {
    if (actualObject[key] != expectedObject[key]) {
      var expectedValue = expectedObject[key];
      var actualValue = actualObject[key];
      message = 'Expected object to contain "' + expectedValue + '" at "' + key + '" but was "' + actualValue + '"';
      pass = false;
      break;
    }
  }

  return {
    pass: pass,
    message: message
  };
};

beforeEach(function() {
  jasmine.addMatchers({
    toContainKeys: function() {
      return {
        compare: JasmineObjectMatchers.toContainKeys
      };
    },
    toContainValues: function() {
      return {
        compare: JasmineObjectMatchers.toContainValues
      };
    }
  });
});

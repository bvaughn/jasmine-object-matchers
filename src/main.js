JasmineObjectMatchers = {};

/**
 * Matcher helpers for tests involving Objects.
 */

JasmineObjectMatchers.toContainKeys =
  function( object, keys ) {
    var pass = true;
    var message;

    if ( !_.isArray( keys ) ) {
      keys = _.keys(keys);
    }

    _.find(keys, function(key) {
      if ( !_.has(object, key) ) {
        message = 'Expected object to contain key:' + key;
        pass = false;

        return true;
      }
    });

    return {
      pass: pass,
      message: message
    };
  };

JasmineObjectMatchers.toContainValues =
  function( actualObject, expectedObject ) {
    var pass = true;
    var message;

    _.find(
      _.keys(expectedObject),
      function(key) {
        if ( actualObject[key] != expectedObject[key] ) {
          message = 'Expected object to contain "' + expectedObject[key] + '" at "' + key + '" but contained "' + actualObject[key] + '"';
          pass = false;

          return true;
        }
      });

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

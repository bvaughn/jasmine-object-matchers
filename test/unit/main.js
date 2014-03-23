'use strict';

describe('Object Matcher tests', function () {

  var $rootScope;

  beforeEach(inject(function($injector) {
    $rootScope = $injector.get('$rootScope');
  }));

  it('toContainKeys should accept valid Objects with keys', function() {
    var object = {
      foo: 1,
      bar: 2
    };

    expect(object).toContainKeys({ foo: null });
    expect(object).toContainKeys({ bar: null });
    expect(object).toContainKeys({ foo: null, bar: null });
  });

  it('toContainKeys should accept valid Arrays with keys', function() {
    var object = {
      foo: 1,
      bar: 2
    };

    expect(object).toContainKeys(['foo']);
    expect(object).toContainKeys(['bar']);
    expect(object).toContainKeys(['foo','bar']);
  });

  it('toContainValues should accept valid Objects', function() {
    var object = {
      foo: 1,
      bar: 2
    };

    expect(object).toContainValues({ foo: 1 });
    expect(object).toContainValues({ bar: 2 });
    expect(object).toContainValues({ foo: 1, bar: 2 });
  });

  // Direct testing of expected failure conditions

  it('toContainKeys should reject invalid Objects with keys', function() {
    var result = JasmineObjectMatchers.toContainKeys({foo: 1}, {bar: 1});

    expect(result.pass).toBe(false);
  });

  it('toContainKeys should reject invalid Arrays with keys', function() {
    var result = JasmineObjectMatchers.toContainKeys({foo: 1}, ['bar']);

    expect(result.pass).toBe(false);
  });

  it('toContainValues should reject missing keys', function() {
    var result = JasmineObjectMatchers.toContainValues({foo: 1}, {bar: 1});

    expect(result.pass).toBe(false);
  });

  it('toContainValues should reject keys with incorrect values', function() {
    var result = JasmineObjectMatchers.toContainValues({foo: 1}, {foo: 2});

    expect(result.pass).toBe(false);
  });

});

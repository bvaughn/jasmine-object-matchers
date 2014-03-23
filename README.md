Jasmine Object Matchers
================

Custom object equality matchers for use with **[Jasmine 2.0](http://jasmine.github.io/2.0/introduction.html)**.

# Installing

`bower install jasmine-promise-matchers --save`

# Documentation

**[Jasmine 2.0](http://jasmine.github.io/2.0/introduction.html)** offers partial Object matching via the `jasmine.objectContaining` mechanism- but its syntax is pretty ugly. The following matchers allow simple assertions to be made against an Objects keys or key-value pairs without requiring use of `jasmine.objectContaining`.

### toContainKeys

Verifies that an Object contains a minimum set of specified keys. These keys can be provided in the form of an Array:
>`expect({foo: 1, bar: 2}).toContainKeys(['foo']);`

Or an object:
>`expect({foo: 1, bar: 2}).toContainKeys({bar: 2});`

Additional keys beyond the ones specified are ignored.

### toContainValues

Verifies that an Object contains a minimum set of specified key-value pairs.
>`expect({foo: 1, bar: 2}).toContainValues({foo: 1});`

Additional keys beyond the ones specified are ignored.

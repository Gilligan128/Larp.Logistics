var assert = require('assert');
require('testdom')('<html><body></body></html>');
var ReactTestUtils    = require('react-addons-test-utils');
var Sample = require('./sample.js');
var React = require('react');

describe('Sample', function() {
  describe('render', function () {
    it('should render "Hi"', function () {
      var component = ReactTestUtils.renderIntoDocument(
        <Sample />
      );
      var p = ReactTestUtils.findRenderedDOMComponentWithTag(
        component, 'p'
      );

      assert.equal(p.textContent,"Hi, guys");
    });
  });
});

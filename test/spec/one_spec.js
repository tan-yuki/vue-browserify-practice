/* global describe, it */

(function () {
    'use strict';

    var Vue = require('vue');

    describe('one', function () {
        describe('#msg', function () {
            it('should return "This is one"', function () {
                var one = new Vue(require('../../app/scripts/one.js'));
                expect(one.msg).to.equal('This is one');
            });
        });
    });
})();

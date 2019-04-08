const assert = require('chai').assert;
const app = require('../app');

describe('App-Unit test cases:',function() {
    describe('Validate Say Hello:', function() {
        it('validate string equal "Hello"', function () {
            assert.equal(app.sayHello(), 'Hello');
        })

        it('validate data type', function () {
            assert.typeOf(app.sayHello(), 'String');
        })
    })

    describe('Validate add number', function () {
        it('validate addNumber(2,3) equals to 5', function () {
            assert.equal(app.addNumber(2,3), 5);
        })

        it('validate addnumber data type', function () {
            assert.typeOf(app.addNumber(2, 3), 'Number');
        })
    })
})
// Mock 
const chai = require('chai');  
const assert = chai.assert;    // Using Assert style
const expect = chai.expect;    // Using Expect style
const should = chai.should(); 
const sinon = require('sinon')

// mock a function as like it is there
// mock may or may not return values
// MOCK A function
// use mock to ensure a function is called or not
// if called, what are the parameter passed
// how many times it is called

// // complex scenario in your code, something that you cannot test it
// function moneyTransfer(source_account, target_account) {
//     //encapsulation
//     // complex or secure or internals that we cannot test it
//     // this code need a lot of dependencies, which cannot be possible to use in test

// }


// const service = {
//     transfer: function(source, target) {
//         // unit of work for test case
//         // i have ensure that moneyTransfer
//         // called once
//         // called with source and target
//         let result = moneyTransfer(source, target)
//     }
// }

// node.js controller/service is calling moneyTransfer(...)
// mock moneyTransfer
 

var fact = sinon.fake.returns(120);

var result = fact(2)
console.log(result)

// assert(callback.calledOn(obj));
console.log(fact.calledWith(5))
 

const jQuery = {
    // we don't want this to be called
    // we need fake 
    ajax :  function(url) {
        console.log('real jqeuery')
    }
}

sinon.replace(jQuery, "ajax", sinon.fake.returns({id: 1, name:'apple'}));

console.log("ajax ", jQuery.ajax())
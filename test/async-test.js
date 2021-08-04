// Mock 
const chai = require('chai');  
const assert = chai.assert;    // Using Assert style
const expect = chai.expect;    // Using Expect style
const should = chai.should(); 

describe ("delayed/async test", () => {
    // done is a callback method
    // when used, mocka shall a function callback
    // your test shoudl call the callback after completion of test
    it("timeout ", (done) => {
        setTimeout(() => {
                console.log("inside setTimeout logic")
                expect(1 + 1 ).to.equal(2)
                done() // to inform mocka that test is done
        }, 1500)
    })
})
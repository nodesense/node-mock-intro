//const assert = require('assert');

const chai = require('chai');  
const assert = chai.assert;    // Using Assert style
const expect = chai.expect;    // Using Expect style
const should = chai.should();  // Using Should style



describe("Math calculator ", () => {
    it("should add  two positive number", () => {
        console.log("Inside test")
        assert.ok( (1 + 2) == 3)
       // assert.fail("sorry")
    })

    it("from chai example", () => {
       const foo = 'bar'
        , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };
      
      expect(foo).to.be.a('string');
      expect(foo).to.equal('bar');
      expect(foo).to.have.lengthOf(3);
      expect(beverages).to.have.property('tea').with.lengthOf(3);
    })

    it("should ", () => {
      console.log("checkking",   "hello".should)
      , foo = 'bar'
  , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

foo.should.be.a('string');
foo.should.equal('bar');
foo.should.have.lengthOf(3);
beverages.should.have.property('tea').with.lengthOf(3);

    })
})
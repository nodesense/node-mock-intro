const chai = require('chai');  
const assert = chai.assert;    // Using Assert style
const expect = chai.expect;    // Using Expect style
const should = chai.should();  // Using Should style
const app = require('../app')
const sinon  = require('sinon'); 
const Product = require('../models/product')
const productService = require('../services/product.service')

// NOT A GOOOD PRACTICE
sinon.replace(Product, "findById", sinon.fake.returns(Promise.resolve({id: 1, name:'apple', price: 100})));


describe("product service ", () =>{
    it ("get produce / get product", async () => {
       const product = await  productService.getProduct(10)
       product.should.have.property("price").with.equal(90);
     //  expect(product).to.equal({ id: 10, name: 'apple', price: 90});

    })
})

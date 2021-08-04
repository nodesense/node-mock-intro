
const chai = require('chai');  
const assert = chai.assert;    // Using Assert style
const expect = chai.expect;    // Using Expect style
const should = chai.should();  // Using Should style
const app = require('../app')

const chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe("test chai http ", () =>{
    it ("chai http test", () => {
        // app for testing
        // chai http shall make req object to pass to express app
        // no listening server

        chai.request(app)
        .get('/')
        .end(function (err, res) { // response from app router
        expect(err).to.be.null;
        expect(res).to.have.status(200);
    });
})

    it ("chai http 404 test", () => {
        
        chai.request(app)
        .get('/not-found')
        .end(function (err, res) { // response from app router
            expect(err).to.be.null;
            expect(res).to.have.status(404);
        });
    })
     
})

const Product = require('../models/product')
module.exports = {
    getProduct : async function(id) {
        console.log("calling DB")
        const result = await Product.findById(id)
        result.price = result.price * .9 // 10 % discount business logic
        return result; // promise output
    }
}
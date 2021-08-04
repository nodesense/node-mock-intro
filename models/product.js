module.exports = {
    findById : function(id) {
        // call mongoose/mongoolse internal code
        console.log('real findById called')
        // return Promise.resolve({id, name: 'apple', price: 100})
        return Promise.reject("MongoDB connection Error")
    }
}
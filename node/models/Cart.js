const mongoose = require('mongoose');
const Product = require('./Product');
var mongoosePaginate = require('mongoose-paginate')
// var mongooseAggregatePaginate = require('mongoose-aggregate-paginate')
var ProductSchema ={
        type:mongoose.Schema.Types.ObjectId,
        ref: "products"
    }
const CartSchema = new mongoose.Schema({
    Product:[ProductSchema],
    size:{
        type:String
    }
})

CartSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('cart',CartSchema);
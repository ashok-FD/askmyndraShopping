const Cart = require('../models/Cart');
const Product = require('../models/Product');

exports.cartCreate = (req,res) =>{
    // console.log(req.body.product)
 Product.findById({_id:req.body.product})
 .then(data=>{
     console.log(data);
    let cart = new Cart({
        Product:data,
        size:req.body.size
    }).save()
    .then(docs=>{
        res.status(200).json({
            message:'create sucessfully',
            cart:{
                Product:docs.Product,
                size:docs.size,
                CartID:docs._id
            },
            method:'POST',
            status:['200','Create sucessfull']
        })
    }).catch(err=>{
        res.status(500).json({
            message:['Create unsucessfull',err]
        })
    })
 }).catch(err=>{
     res.json(err);
 })
}

exports.getAll = (req,res) =>{
    const id = req.params.id
    Cart.findById({_id:id})
    .populate('Product')
    .then(docs=>{
        res.status(200).json({
            Cart:docs
        })
    }).catch(err=>{
        res.status(500).json({
            error:err
        })
    })
}
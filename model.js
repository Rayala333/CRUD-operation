const mongoose = require('mongoose');

const productlist = new mongoose.Schema({
    p_id : {
        type : String,
        require : true,
    },
    p_name : {
        type : String,
        require :true,
    },
    p_cost :{
        type : String,
        require : true,
    },
   
})

module.exports = mongoose.model('products', productlist)
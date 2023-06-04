const mongoose = require('mongoose') ;
const User= require("../models/User")
const schema = {
    title :{
        type : String 
    }, 
    price :{
        type : String 
    }, 
    description: {
        type : String
    },
    image : {
        type : String 
    },
    userId:{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }

}

const Product = mongoose.model("Product", schema)
module.exports=Product ;
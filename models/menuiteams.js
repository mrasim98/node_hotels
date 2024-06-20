const mongoose = require('mongoose');

const menuIteamsSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    price:{
        type:Number,
        required: true,
    },
    taste:{
        type : String,
        enum :['sweet','spicy','sour'],
    },
    sales:{
        type :Number,
        default : 0,

    }
})
const menuiteams = mongoose.model('menuiteam', menuIteamsSchema);

module.exports = menuiteams
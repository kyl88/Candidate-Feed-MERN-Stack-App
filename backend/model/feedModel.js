const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const feedSchema= new Schema({
    text:{
        type:String,
        required:true,
       },

    },
    
    {
        timestamps: true,
    }
);
const Feed = mongoose.model('Feed',feedSchema);
module.exports = Feed;
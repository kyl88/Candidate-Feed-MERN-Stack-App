const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const feedSchema= new Schema({
    name:{
        type:String,
        required:true,
       },

    location:{
          type:String,
         required:true,
       },

     timezone:{
         type:String,
         required:true,
       },

     skills:{
         type:String,
         required:true,
       },

     duration:{
         type: String,
         required:true,
       },

     recommodiation:{
         type: String,
         required:true,
       },

     about:{
         type: String,
         required:true,
         }
    },{timestamps: true});
    const Feed = mongoose.model('Feed',feedSchema);
    module.exports = Feed;
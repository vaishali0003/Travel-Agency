const mongoose=require('mongoose');

const reviewSchema=mongoose.Schema({

    username:{
        type:String,
    },
    userreview:{
        type:String
    }

})

const Review=mongoose.model('review',reviewSchema);
module.exports=Review;
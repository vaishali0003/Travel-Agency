const mongoose=require('mongoose');

const busSchema=mongoose.Schema({
    book_from:{
        type:String,
        required:true
    },
    book_to:{
        type:String,
        required:true
    },
    bus_name:{
        type:String,
        required:true
    },
    bus_time:{
        type:String,
        required:true
    },
    bus_drops:{
        type:String,
        required:true
    },
    bus_seats:{
        type:Number,
        required:true
    },
    bus_window:{
        type:Number,
        required:true
    },
    bus_type:{
        type:String,
        required:true
    },
    bus_price:{
        type:Number,
        required:true
    },
    bus_recieve_date:{
        type:String,
        required:true
    },
    bus_drop_date:{
        type:String,
        required:true
    },
    booked_seats:{
        type:String,
        required:true
    }
})

const Bus=mongoose.model('bus',busSchema);
module.exports=Bus;


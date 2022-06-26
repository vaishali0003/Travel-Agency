const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
})

userSchema.pre('save',async function(next){

    if(this.isModified('password')){
        this.password=await bcrypt.hash(this.password,10)
    }
    next();
})


const User=mongoose.model('user',userSchema)
module.exports=User;
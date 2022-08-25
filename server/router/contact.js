const express=require('express');
const router=express.Router();
const { body, validationResult } = require('express-validator');
const Contact=require('../models/contactSchema');

router.post('/queries',async(req,res)=>{

const {name,email,contactno,subject,message}=req.body;

try{
let contact=new Contact({
    name:name,
    email:email,
    contactno:contactno,
    subject:subject,
    message:message
})
await contact.save();

return res.status(200).json({type:"success",message:"user query stored successfully",contact:contact});
}

catch(err){
return res.status(401).json({type:"danger",message:"Some internal error occured",err:err});
}

})

module.exports=router;
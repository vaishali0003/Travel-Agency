const express=require('express');
require('./db/conn');
const auth=require('./router/auth')
var cors = require('cors')

const app=express();
const port=4300;

app.use(cors())
app.use(express.json());


// we link the router files to make our routes easy
app.use('/auth',auth);


app.listen(port,()=>{
    console.log(`Listening to port ${port}`)
})